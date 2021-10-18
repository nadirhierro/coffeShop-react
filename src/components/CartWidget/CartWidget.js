import "./CartWidget.scss";
import cartIcon from "../../assets/icons/shopping-cart.png";

function CartWidget() {
  return (
    <div className="carritoIcon">
      <img src={cartIcon} alt="Icono carrito" />
    </div>
  );
}

export default CartWidget;
