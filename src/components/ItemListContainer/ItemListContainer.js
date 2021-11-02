import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import data from "../data/data.json";

// mis productos a mostrar comienza siendo un array vacío
// declaro las categorias en un array de strings
// categoryId es el param del router
// comienzo dejando productos en undefined para que mientras se regenere el array para la categoría, dejo el mensaje de cargando
// una vez tengo los productos, me fijo si categoryId es undefined (esto es para el caso de que la ruta sea "/")
// si no es undefined ni es "destacados" entonces filtro por categoría (en el caso de que categoryId sea cualquier cosa, el filtro va a quedar en [])
// luego retorno según el caso
// si categoryId es una categoría o es undefined ("/") entonces renderizo los productos una vez estén listos
// si categoryId no es una categoría entonces renderizo que la página no fue encontrada

function ItemListContainer() {
  const [productos, setProductos] = useState(undefined);
  const categorias = [
    "destacados",
    "guitarras",
    "bajos",
    "teclados",
    "baterias",
    "estudio",
  ];
  let { categoryId } = useParams();
  useEffect(() => {
    setProductos(undefined);
    console.log(categoryId);
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data.JSON);
      }, 2000);
    });
    task.then((res) => {
      if (categoryId !== undefined && categoryId !== "destacados") {
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
    return <h4 className="text-center p-5">¡Página no encontrada!</h4>;
  }
}

export default ItemListContainer;
