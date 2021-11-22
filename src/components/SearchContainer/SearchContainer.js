import "./SearchContainer.scss";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import SearchBar from "../SearchBar/SearchBar";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import search from "../../js/search";

export default function SearchContainer() {
  const [products, setProducts] = useState(undefined);
  const [loading, setLoading] = useState(false);
  let { searchId } = useParams();

  useEffect(() => {
    setLoading(true);
    setProducts(undefined);
    const db = getFirestore();
    let q = query(collection(db, "items"));
    getDocs(q)
      .then((snapshot) => {
        let allProducts = snapshot.docs.map((doc) => doc.data());
        setProducts(search(searchId, allProducts));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchId]);

  return (
    <div className="container-fluid searchContainer">
      <SearchBar />
      <div className="row justify-content-center">
        <div className="row justify-content-center searchContainer__items">
          <h4 className="text-center">
            Resultados para la búsqueda: "{searchId}"
          </h4>
        </div>
        {loading ? (
          <Loader />
        ) : products ? (
          <ItemList items={products} />
        ) : (
          <>
            <h3 className="text-center searchContainer__noProducts">
              No hay productos para tu búsqueda!
            </h3>
            <Link to={"/"} className="btn searchContainer__btnBack">
              Volver a la tienda
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
