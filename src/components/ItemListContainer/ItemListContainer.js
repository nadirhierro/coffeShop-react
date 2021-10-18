import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Café Colombia Guanes",
        description: "Castilla Caturra Typica y Maragogipe",
        price: 125,
        stock: 5,
        pictureUrl: "./assets/products/1.jpg",
      },
      {
        id: 2,
        title: "Café Blend Brasil Colombia",
        description: "Topazio Castilla Caturra Typica y Maragogipe",
        price: 122,
        stock: 3,
        pictureUrl: "./assets/products/2.jpg",
      },
    ];
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    task.then((res) => {
      setProductos(data);
    });
  }, []);
  return (
    <>
      <div className="container-fluid itemListContainer">
        <div className="row gap-5">
          <ItemList items={productos} />
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
