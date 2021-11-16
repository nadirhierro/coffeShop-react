import "./CartWidget.scss";
import cartIcon from "../../assets/icons/shopping-cart.png";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const cart = useCart();
  return (
    <div className="carritoIcon">
      {cart.cart.quantity > 0 ? (
        <>
          <Link to={"/cart"}>
            <img src={cartIcon} alt="Icono carrito" />
          </Link>
          <span className="carritoContador">{cart.cart.quantity}</span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
