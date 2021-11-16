import "./Loader.scss";

export default function Loader() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center pt-5 loader">
        <div className="col-12 lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
