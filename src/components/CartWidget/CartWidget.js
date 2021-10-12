import "./CartWidget.scss";
import cartIcon from "../../assets/icons/shopping-cart.png";

function CartWidget() {
  return (
    <a className="carritoIcon">
      <img src={cartIcon} alt="Icono carrito" />
    </a>
  );
}

export default CartWidget;
