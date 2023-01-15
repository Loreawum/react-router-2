import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import "../index.css"

export default function pokenavbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "activo" : "inactivo");

  return (
    <Container>
          <Navbar className="d-flex bg-dark fixed-top justify-content-between">
      <Navbar.Brand>
        <NavLink to="/">
          <img className="w-25" src="/img/pngegg.png" alt="pokemon_logo" />
        </NavLink>
      </Navbar.Brand>
      <Container className="justify-content-evenly m-0 w-25">
      <div><NavLink className={setActiveClass} to="/">
          {" "}
          Home{" "}
        </NavLink>
      </div>
      <div>
        <NavLink className={setActiveClass} to="/pokemones">
          {" "}
          Pokemones{" "}
        </NavLink>
      </div>
      </Container>
    </Navbar>
  </Container>
  );
}
