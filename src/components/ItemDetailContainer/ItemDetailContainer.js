import "./ItemDetailContainer.scss";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/data.json";
import ItemDetail from "../ItemDetail/ItemDetail";

// mi item empieza siendo undefined
// empiezo primero recuperando mi data, una vez la tengo, me fijo (getItem) si existe producto con el id del params
// si existe el producto, lo seteo en item
// si no existe el producto, agarro mi estado existe y le asigno un 0 (falsy)
// uso el estado existe en 1 (truesy) mientras busco el producto, para que figure el loader de cargando
// una vez se sabe el producto, se lo renderiza sino
// una vez se sabe que no hay producto, se renderiza el error

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
          reject(new Error("No existe el producto"));
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
        <h4 className="loader">Cargando...</h4>
      ) : (
        <div className="row">
          <div className="col-12 itemDetailContainer__error">
            <h4 className="error">¡No existe el producto!</h4>
            <Link to={"/"} className="btn">
              Volvé a la tienda
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
