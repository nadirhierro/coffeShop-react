import "./CartForm.scss";
import { useState } from "react";

// CartForm se encarga de tomar los datos del usuario y pasárselo a CartContainer

export default function CartForm({ sendOrder }) {
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });

  const handleChange = function (event) {
    event.preventDefault();
    setBuyer({ ...buyer, [event.target.name]: event.target.value });
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    sendOrder(buyer);
  };

  return (
    <div className="row justify-content-center form">
      <h2 className="col-12 text-center">
        Por favor, completá con tus datos para que te enviemos tu orden
      </h2>
      <form className="col-12 d-flex flex-column w-50">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={buyer.name}
        ></input>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={buyer.phone}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={buyer.email}
          required
        ></input>
        <button
          disabled={!(buyer.name && buyer.phone && buyer.email)}
          className="btn"
          onClick={handleSubmit}
        >
          Finalizar compra
        </button>
      </form>
    </div>
  );
}
