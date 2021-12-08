import "./NavBar.scss";
import logoLarge from "../../assets/logos/logo_white_large.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navi">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src={logoLarge} className="navi__logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navi__links">
            <div className="dropdown">
              <button
                className="btn rounded-pill dropdown__btn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link to={"/category/destacados"} className="dropdown-item">
                  Destacados
                </Link>
                <Link to={"/category/guitarras"} className="dropdown-item">
                  Guitarras
                </Link>
                <Link to={"/category/bajos"} className="dropdown-item">
                  Bajos
                </Link>
                <Link to={"/category/teclados"} className="dropdown-item">
                  Teclados
                </Link>
                <Link to={"/category/baterias"} className="dropdown-item">
                  Baterias
                </Link>
                <Link to={"/category/estudio"} className="dropdown-item">
                  Estudio
                </Link>
              </div>
            </div>
            <span
              class="navi__links__link rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#nosotros"
            >
              Nosotros
            </span>
            <span
              class="navi__links__link rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#ubicacion"
            >
              Ubicación
            </span>
            <span
              class="navi__links__link rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#contacto"
            >
              Contacto
            </span>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
