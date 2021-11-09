import "./CartWidget.scss";
import cartIcon from "../../assets/icons/shopping-cart.png";

export default function CartWidget() {
  return (
    <div className="carritoIcon">
      <img src={cartIcon} alt="Icono carrito" />
    </div>
  );
}
