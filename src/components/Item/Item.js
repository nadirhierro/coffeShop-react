import "./Item.scss";
import ItemCount from "../ItemCount/ItemCount";

function Item({ item }) {
  const onAdd = function () {
    console.log(`Agregaste ${item.title} al carrito`);
  };
  return (
    <div className="item col-md-2">
      <h3 className="item__title">{item.title}</h3>
      <img
        src={item.pictureUrl}
        className="item__picture"
        alt={item.title}
      ></img>
      <h4 className="item__description">{item.description}</h4>
      <span className="item__price">$ {item.price}</span>
      <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
    </div>
  );
}

export default Item;
