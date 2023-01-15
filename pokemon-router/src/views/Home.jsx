import "./home.css";

export default function Home() {
  return (
    <div id="Home" className="vh-100 mt-5 d-flex justify-content-center">
      <h1 className="h1-home txt-warning">Bienvenido</h1>
      <div className="cont-img">
        <img src="/img/PokeBall.png" className="App-logo" alt="logo" />
      </div>
    </div>
  );
}
