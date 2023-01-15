import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import Loading from "../components/Loading"

import  Card  from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";

export default function Detalle() {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const { nombre } = useParams();
    const navigate = useNavigate();
    const [Info, setInfo] = useState([])

    const volver = () => {
      navigate("/pokemones/")
  }

    const getInfo = async () => {
        const response = await fetch(`${url}${nombre}`)
        if (response.status === 200) {
            const datos = await response.json()
            const poke_objt =
                        {
                          name: datos.name[0].toUpperCase() + datos.name.slice(1),
                          img: datos.sprites.other.dream_world.front_default,
                          hp: datos.stats[0].base_stat,
                          atk: datos.stats[1].base_stat,
                          def: datos.stats[2].base_stat
                        }
            

            setInfo(poke_objt)
            // console.log(datos)
        } else {
            navigate("/*")
        }
    }
    useEffect(() => {
        getInfo(nombre)        
    },)

    if (Info.length !== 0) {
        return (
          <div className="vh-100 d-flex align-items-center justify-content-center">
          <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Info.img} />
            <Card.Body>
              <Card.Title>{Info.name}</Card.Title>
              <Card.Text>
              
                 <li>Vida:  {Info.hp}</li>
                 <li>Ataque:  {Info.atk}</li>
                 <li>Defensa:  {Info.def}</li>
               
              </Card.Text>
              <Button variant="danger" onClick={volver}>Volver</Button>
            </Card.Body>
          </Card>
          </div>
          </div>
        )
    }
    else {
        return (
            <>
            <Loading/>
            </>
        )
    }
}