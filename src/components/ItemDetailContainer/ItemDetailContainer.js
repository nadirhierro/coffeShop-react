import "./ItemDetailContainer.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(undefined);
  let { itemId } = useParams();
  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.JSON);
      }, 2000);
    });
    getItem.then((res) => {
      data.forEach((producto) => {
        if (producto.id === parseInt(itemId)) {
          setItem(producto);
        }
      });
    });
  }, [itemId]);
  return (
    <div className="container-fluid itemDetailContainer">
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <h4 className="loader">Cargando...</h4>
      )}
    </div>
  );
}

export default ItemDetailContainer;
