import "./ItemCount.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  const onIncrease = function () {
    if (count + 1 <= stock) {
      setCount(count + 1);
    }
  };
  const onDecrease = function () {
    if (count - 1 > 0) {
      setCount(count - 1);
    }
  };
  const handleClick = function (event) {
    event.stopPropagation();
    onAdd(count);
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
          onClick={handleClick}
          className="btn itemCount__addCart__button"
        >
          Agregar {count} unidad/es al Carrito
        </button>
      </div>
      <div className="itemCount__quantity">
        <span className="itemCount__quantity__stock">
          Hay {stock} unidad/es disponibles
        </span>
      </div>
    </div>
  );
}
