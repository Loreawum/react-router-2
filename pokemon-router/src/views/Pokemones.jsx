import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./pokemones.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Pokemones() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [listadoPokemones, setListadoPokemones] = useState([]);
  const [seleccionado, setSeleccionado] = useState("");
  const navigate = useNavigate();

  const getListadoPokemones = async () => {
    const res = await fetch(url);
    let {results} = await res.json();
    results = results.map((pokemon) => ({ name: pokemon.name }));
    setListadoPokemones(results);
  };

  useEffect(() => {
    getListadoPokemones();
  }, []);

    const verPokemon = () => {
    navigate(`/pokemones/${seleccionado}`);
  };

  const handleChange = (e) => {
    setSeleccionado(e.target.value);
  };

  return (
    <Container className="d-flex vh-100">
      <Row className="align-items-center">
        <Col></Col>
        <Col xs={6}>
          <h1 className="h1-poke">Selecciona un pokemon</h1>
          <Form.Select
            aria-label="Default select example"
            value={seleccionado}
            onChange={handleChange}
          >
            <option>Pokemones</option>
            {listadoPokemones.map((pokemon, i) => (
              <option key={i} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </Form.Select>
            <Button
            variant="outline-danger"
            className="mt-5 button "
            onClick={verPokemon}
          >
            Ver
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
