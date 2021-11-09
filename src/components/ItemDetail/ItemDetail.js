import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../js/numberWithCommas";

export default function ItemDetail({ item }) {
  const [selled, setSelled] = useState(false);

  const cart = useCart();

  useEffect(() => {
    let itemInCart = cart.findItem(item.id);
    if (itemInCart) {
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
      <div className="col-12 d-flex justify-content-center p-2">
        <Link to={"/"} className="btn itemDetail__volver">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}
