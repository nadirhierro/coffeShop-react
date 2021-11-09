import "./Item.scss";
import { Link } from "react-router-dom";
import numberWithCommas from "../../js/numberWithCommas";

export default function Item({ item }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-2 item">
      <div className="item__image">
        <img
          src={require(`../../assets/products/${item.id}.jpg`).default}
          alt={item.title}
          className="img-fluid"
        />
      </div>
      <h3 className="item__title">{item.title}</h3>
      <span className="item__price">$ {numberWithCommas(item.price)}</span>
      <Link to={`/item/${item.id}`} className="item__verProducto">
        Ver producto
      </Link>
    </div>
  );
}
