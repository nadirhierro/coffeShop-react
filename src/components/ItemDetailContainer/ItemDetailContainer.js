import "./ItemDetailContainer.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(undefined);
  const [existe, setExiste] = useState(1);
  let { itemId } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.JSON);
      }, 2000);
    });
    let producto = [];
    getData.then((res) => {
      const getItem = new Promise((resolve, reject) => {
        producto = data.filter((producto) => producto.id === parseInt(itemId));
        if (producto.length > 0) {
          resolve(producto);
        } else {
          reject(new Error("no existe"));
        }
      });
      getItem.then((res) => {
        setItem(producto[0]);
        setExiste(1);
      });
      getItem.catch((err) => {
        setExiste(0);
      });
    });
  }, [itemId]);
  return (
    <div className="container-fluid itemDetailContainer">
      {item ? (
        <ItemDetail item={item} />
      ) : existe ? (
        <h4 className="loader p-4">Cargando...</h4>
      ) : (
        <h4 className="loader p-4">¡No existe el producto!</h4>
      )}
    </div>
  );
}

export default ItemDetailContainer;
