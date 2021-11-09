import "./Hero.scss";
import fondoHero from "../../assets/heroFondo.jpg";
import logoWhiteLarge from "../../assets/logos/logo_white_large.png";

export default function Hero() {
  return (
    <>
      <div
        className="container-fluid hero"
        style={{ backgroundImage: `url(${fondoHero})` }}
      >
        <div className="row justify-content-center">
          <div
            className="
              col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4
              cajaHeroLogo
              animate__animated animate__fadeIn
            "
          >
            <img
              className="img-fluid heroLogo"
              src={logoWhiteLarge}
              alt="Logo Sincopado"
            />
            <p className="heroLema">Siempre la mejor atención</p>
          </div>
          <div
            className="
              col-12 col-md-12 col-md-6 col-lg-6 col-xl-4
              texto
              animate__animated animate__fadeIn
              bienvenida
              pt-5
            "
          >
            <h2>Bienvenido a nuestra tienda</h2>
            <p>
              ¡Aprovechá todos nuestros productos con 18 cuotas sin interés!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
