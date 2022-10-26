import React, { useState, useEffect } from "react";
import GrayImage from "../shared/gray_image";
import DescriptionWithLink from "../shared/description_with_link";
import Form from "./form"

// o useParams é um hook
import { useParams } from 'react-router-dom'

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data
}


const Planet = () => {

  const [satellites, setSatellites] = useState([]);
  const [planet, setPlanet]  = useState({});

  //essa chamada traz um object com todos os params
  // quando faz a chamada assim através dos {} e 
  // tem um object dentro, somente essa info será retornada
  let { id } = useParams();

  useEffect(() => {
    getPlanet(id).then(data => {
      setSatellites(data['satellites'])
      setPlanet(data['data'])
    })
  }, [])

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite])
  }

  let title;
  if (planet.title_with_underline) {
    title = (
      <h2>
        {" "}
        <u> {planet.name} </u>{" "}
      </h2>
    )
  } else {
    title = <h4> {planet.name} </h4>;
  }

  return (
    <div>
      {title}
      <DescriptionWithLink description={planet.description} link={planet.link} />
      <GrayImage image_url={planet.image_url} gray={planet.gray} />
      <h4>Satélites</h4>
      <hr />
      <Form addSatellite={addSatellite} />
      <hr />
      <ul>
        {satellites.map((satellite, index) => 
          <li key={ index }>
            {satellite.name}
          </li> 
        )}
      </ul>
      <hr/>
    </div>
  )
}

export default Planet;
