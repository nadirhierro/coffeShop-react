import "./SearchBar.scss";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setSearch(false);
  }, [search]);

  const handleChange = function (event) {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleClick = function (event) {
    event.preventDefault();
    setSearch(true);
  };

  return (
    <div className="row">
      <div className="col-12 barraBusqueda">
        <h3>Buscá los productos de tu interés</h3>
        <div className="barraBusqueda__buscador">
          <input
            type="search"
            id="input"
            className="rounded barraBusqueda__buscador__input"
            placeholder="Buscar..."
            aria-label="Search"
            value={input}
            onChange={handleChange}
          />
          <button
            disabled={!input}
            className="btn barraBusqueda__buscador__btn"
            onClick={handleClick}
          >
            Buscar
          </button>
        </div>
        {search && <Redirect to={`/search/${input}`} />}
      </div>
    </div>
  );
}
