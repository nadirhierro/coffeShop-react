import "./CartItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import numberWithCommas from "../../js/numberWithCommas";

export default function CartItem({ item, removeItem }) {
  return (
    <tr className="fila">
      <th className="cajaImagenTabla" scope="row">
        <img
          src={require(`../../assets/products/${item.id}.jpg`).default}
          alt=""
        />
      </th>
      <td>Encordado guitarra eléctrica D'addario Exp110 Nickle W</td>
      <td>{item.quantity}</td>
      <td>$ {numberWithCommas(item.quantity * item.price)}</td>
      <td>
        <button
          className="btn"
          onClick={(event) => {
            event.preventDefault();
            removeItem(item.id);
          }}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </td>
    </tr>
  );
}
