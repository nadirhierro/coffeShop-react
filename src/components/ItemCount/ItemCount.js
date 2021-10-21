import "./ItemCount.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));
  const [pasado, setPasado] = useState(false);
  const [corto, setCorto] = useState(false);
  const onIncrease = function () {
    if (count + 1 <= stock) {
      setCount(count + 1);
    } else if (count === stock) {
      setPasado(true);
      setTimeout(() => {
        setPasado(false);
      }, 1000);
    }
  };
  const onDecrease = function () {
    if (count - 1 > 0) {
      setCount(count - 1);
    } else if (count === 1) {
      setCorto(true);
      setTimeout(() => {
        setCorto(false);
      }, 1000);
    }
  };
  return (
    <div className="itemCount">
      <div className="itemCount__counter">
        <button onClick={onDecrease} className="btn itemCount__counter__button">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p className="itemCount__quantity">{count}</p>
        <button onClick={onIncrease} className="btn itemCount__counter__button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="itemCount__addCart">
        <button
          onClick={onAdd}
          className="btn btn-primary rounded-pill itemCount__button__add"
        >
          Agregar al Carrito
        </button>
      </div>
      <div className="itemCount__quantity">
        <span className="itemCount__quantity__stock">
          Hay {stock} unidades disponibles
        </span>
        {pasado === true && (
          <span className="itemCount__notification--max">
            Actualmente tenemos en stock {stock} unidades de este producto
          </span>
        )}
        {corto === true && (
          <span className="itemCount__notification--min">
            ¡No puedes seleccionar menos de 1 unidad!
          </span>
        )}
      </div>
    </div>
  );
}

export default ItemCount;
