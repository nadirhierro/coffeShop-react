import "./CartContainer.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import numberWithCommas from "../../js/numberWithCommas";

// CartContainer se encarga de recuperar el carrito (productos, total, remove) y mapear los CartItem
//

export default function CartContainer() {
  const [products, setProducts] = useState(undefined);
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
        </>
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
