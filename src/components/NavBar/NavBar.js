import "./NavBar.scss";
import logoLarge from "../../assets/logos/logo_large.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navi">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img src={logoLarge} className="navi__logo" alt="logo" />
        </a>
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
            <a className="nav-link" aria-current="page" href="/#">
              Tienda
            </a>
            <a className="nav-link" href="/#">
              Novedades
            </a>
            <a className="nav-link" href="/#">
              Sobre Nosotros
            </a>
            <a className="nav-link" href="/#">
              Contacto
            </a>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
