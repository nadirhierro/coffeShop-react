import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  const onAdd = function () {
    console.log(`Agregaste ${item.title} al carrito`);
  };
  return (
    <div className="row itemDetail">
      <div className="col-12 col-md-6 itemDetail__imgContainer">
        <img
          src={require(`../../assets/products/${item.id}.jpg`).default}
          alt={item.title}
          className="img-fluid productImage"
        />
      </div>
      <div className="col-12 col-md-6 col-xxl-4 itemDetail__details">
        <h4 className="itemDetail__details__title">{item.title}</h4>
        <p className="itemDetail__details__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          ab ut recusandae dolorem cumque perspiciatis assumenda ea reiciendis,
          nulla possimus ducimus voluptatem ipsum, nostrum dicta earum molestiae
          atque in excepturi blanditiis praesentium ullam laboriosam nobis
          mollitia! Exercitationem accusantium nam suscipit!
        </p>
        <span className="itemDetail__details__price">$ {item.price}</span>
        <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
      </div>
    </div>
  );
}
export default ItemDetail;
