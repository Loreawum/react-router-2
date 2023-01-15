import "./home.css";


export default function NotFound() {

  return (

    <div id="not_found" className="vh-100 mt-5 d-flex justify-content-center">
      <h1 className="h1-home txt-warning">404</h1>
      <h2>not found page</h2><br />
      <div className="cont-img">
        <img src="/img/404.jpg" className="App-logo" alt="logo" />
      </div>
    </div>

  );
}
