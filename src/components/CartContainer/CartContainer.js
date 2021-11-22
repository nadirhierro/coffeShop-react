import "./CartContainer.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useCart } from "../../contexts/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import CartForm from "../../components/CartForm/CartForm";
import numberWithCommas from "../../js/numberWithCommas";

// CartContainer se encarga de recuperar el carrito (productos, total, remove) y mapear los CartItem
// el CartForm le envía los datos del buyer y la señal para enviar la orden
// la orden la envía CartContainer
// si la envía, guarda en un estado interno orderId y luego lo muestra
// si hay error, se guarda en un estado interno y se muestra
// el return se fija primero si hay productos, si hay renderiza, sino se fija si hay un orderId, si hay muestra mensaje de compra efectiva
// sino se fija si hay error y muestra, sino hay error se muestra mensaje de que no hay productos en el carrito

export default function CartContainer() {
  const [products, setProducts] = useState(undefined);
  const [buyer, setBuyer] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(undefined);

  const cart = useCart();

  useEffect(() => {
    if (!cart.cart.quantity) {
      setProducts(undefined);
    } else {
      setProducts(cart.cart.items);
    }
  }, [cart]);

  const remove = function (itemId) {
    cart.removeItem(itemId);
  };

  const sendOrder = function (buyer) {
    let order = {
      buyer: buyer,
      items: cart.cart.items,
      total: cart.cart.total,
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        setBuyer(buyer);
        cart.clear();
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="container-fluid">
      {products ? (
        <>
          <div className="row justify-content-center tituloFinalizar">
            <h2 className="col-12 text-center">¡Últimos pasos!</h2>
            <h4 className="col-12 text-center">Chequeá tu carrito...</h4>
          </div>
          <div className="row justify-content-center">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th className="columnaImagen" scope="col"></th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Quitar</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {products.map((product) => (
                  <CartItem
                    key={product.id}
                    item={product}
                    removeItem={remove}
                  />
                ))}
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">Total</th>
                  <th scope="col">$ {numberWithCommas(cart.cart.total)}</th>
                  <th scope="col"></th>
                </tr>
              </tbody>
            </table>
          </div>
          <CartForm sendOrder={sendOrder} />
        </>
      ) : orderId ? (
        <div className="row align-content-center flex-column orderSent">
          <h3 className="col-6 text-center">
            ¡{buyer.name}, tu compra fue exitosa!
          </h3>
          <h4 className="col-6 text-center">Tu número de orden es {orderId}</h4>
          <p className="col-6 text-center">
            Te llegará un correo con instrucciones a tu dirección {buyer.email}
          </p>
          <Link to={"./"} className="col-6 text-center sinProductos__volver">
            Volver a la tienda
          </Link>
        </div>
      ) : error ? (
        <div className="row align-content-center flex-column error">
          <h2>Error al realizar al compra, volver a intentarlo!</h2>
        </div>
      ) : (
        <div className="row align-content-center flex-column sinProductos">
          <h1 className="col-6 text-center">¡No hay productos!</h1>
          <Link to={"./"} className="col-6 text-center sinProductos__volver">
            Volver a la tienda
          </Link>
        </div>
      )}
    </div>
  );
}
