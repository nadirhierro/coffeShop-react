import "./Footer.scss";
import footerLogo from "../../assets/logos/logo_white_large.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footerFlex">
          <img className="footerLogo" src={footerLogo} alt="Logo" />
        </div>
        <div className="row justify-content-around">
          <div className="col-6 copyright">
            <p>Copyright 2021</p>
          </div>
          <div className="col-6 text-end copyright">
            <p>
              Sitio por
              <a
                href="https://github.com/nadirhierro/"
                target="_blank"
                rel="noreferrer"
              >
                Nadir Hierro
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
