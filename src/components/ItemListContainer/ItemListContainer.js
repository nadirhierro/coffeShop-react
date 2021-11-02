import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import data from "../data/data.json";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const categorias = ["guitarras", "bajos", "teclados", "baterias", "estudio"];
  let { categoryId } = useParams();
  useEffect(() => {
    setProductos(undefined);
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.JSON);
      }, 2000);
    });
    task.then((res) => {
      if (categoryId !== undefined) {
        setProductos(
          data.filter((producto) => producto.category === categoryId)
        );
      } else {
        setProductos(data.filter((producto) => producto.destacado === "si"));
      }
    });
  }, [categoryId]);
  if (categorias.indexOf(categoryId) >= 0 || categoryId === undefined) {
    return (
      <>
        <div className="container-fluid itemListContainer">
          <div className="row justify-content-center">
            {productos ? (
              <ItemList items={productos} />
            ) : (
              <h4 className="loader">Cargando...</h4>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return <h1>¡Página no encontrada!</h1>;
  }
}

export default ItemListContainer;
