import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../js/numberWithCommas";

// cada vez que cambia el item, se chequea si el mismo ya se encuentra en el carrito
// si está en el carrito, no se muestra el ItemCount, sino que se muestra mensaje de producto en carrito
// también se muestra botones de finalizar compra y quitar producto del carrito
// onAdd intenta vender el producto, si se vende, se marca como vendido, sino no se hace nada
// el handleRemove gestiona el removeItem

export default function ItemDetail({ item }) {
  const [selled, setSelled] = useState(false);

  const cart = useCart();

  useEffect(() => {
    if (cart.isInCart(item.id)) {
      setSelled(true);
    }
  }, [cart, item.id]);

  const onAdd = function (quantity) {
    const vendido = cart.addItem(item, quantity);
    if (vendido) {
      setSelled(true);
    }
  };

  const handleRemove = function (event) {
    event.preventDefault();
    cart.removeItem(item.id);
    setSelled(false);
  };

  return (
    <div className="row itemDetail">
      <div className="col-12 col-md-6 itemDetail__imgContainer">
        <img
          src={require(`../../assets/products/${item.id}.jpg`).default}
          alt={item.title}
          className="img-fluid productImage"
        />
      </div>
      <div className="col-12 col-md-6 col-xxl-4 itemDetail__details">
        <h4 className="itemDetail__details__title">{item.title}</h4>
        <p className="itemDetail__details__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          ab ut recusandae dolorem cumque perspiciatis assumenda ea reiciendis,
          nulla possimus ducimus voluptatem ipsum, nostrum dicta earum molestiae
          atque in excepturi blanditiis praesentium ullam laboriosam nobis
          mollitia! Exercitationem accusantium nam suscipit!
        </p>
        <span className="itemDetail__details__price">
          $ {numberWithCommas(item.price)}
        </span>
        {!selled ? (
          <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
        ) : (
          <div className="itemDetail__selled">
            <h3 className="itemDetail__selled__yetInCart">
              ¡Producto en carrito!
            </h3>
            <Link to="/cart" className="btn itemDetail__selled__finalizar">
              Finalizar compra
            </Link>
            <button
              onClick={handleRemove}
              className="btn itemDetail__selled__remove"
            >
              Quitar producto del carrito
            </button>
          </div>
        )}
      </div>
      <div className="col-12 d-flex justify-content-center pt-4">
        <Link to={"/"} className="btn itemDetail__volver">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}
