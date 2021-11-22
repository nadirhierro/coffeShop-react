import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { getFirestore } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import SearchBar from "../SearchBar/SearchBar";

// mis productos a mostrar comienza siendo undefined
// declaro las categorias en un array de strings
// categoryId es el param del router
// comienzo dejando productos en undefined para que mientras se regenere el array para la categoría, dejo el mensaje de cargando
// una vez tengo los productos, me fijo si categoryId es undefined (esto es para el caso de que la ruta sea "/")
// si no es undefined ni es "destacados" entonces filtro por categoría (en el caso de que categoryId sea cualquier cosa, el filtro va a quedar en [])
// luego retorno según el caso
// si categoryId es una categoría o es undefined ("/") entonces renderizo los productos una vez estén listos
// si categoryId no es una categoría entonces renderizo que la página no fue encontrada

export default function ItemListContainer() {
  const [products, setProducts] = useState(undefined);
  const [loading, setLoading] = useState(true);

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
    setProducts(undefined);
    setLoading(true);
    const db = getFirestore();
    let q = undefined;
    if (categoryId === "destacados" || !categoryId) {
      q = query(collection(db, "items"), where("destacado", "==", "si"));
    } else {
      q = query(
        collection(db, "items"),
        where("category", "==", `${categoryId}`)
      );
    }
    getDocs(q)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => doc.data()));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  if (categorias.includes(categoryId) || categoryId === undefined) {
    return (
      <div className="container-fluid itemListContainer">
        <SearchBar />
        <div className="row justify-content-center itemListContainer__items">
          {loading ? <Loader /> : <ItemList items={products} />}
        </div>
      </div>
    );
  } else {
    return <h4 className="text-center p-5">¡Página no encontrada!</h4>;
  }
}
