import React, { useState, useEffect } from 'react';
import Planet from "./planet";

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json();
  return data;
}

const Planets = () => {

  const [ planets, setPlanets ] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])

  const removeLast = () => {
    let new_list_planets = [...planets];
    new_list_planets.pop();
    setPlanets(new_list_planets);
  }

  const duplicateLastPlanet = () => {
    let last_planet = planets[planets.length - 1];
    setPlanets([...planets, last_planet]);
  }

  return (
    <>
      <h3>Planet List</h3>
      {/* <button onClick={showMessage}>Show Message!</button> */}
      <button onClick={removeLast}>Remove Last!</button>
      <button onClick={duplicateLastPlanet}>Duplicate Last!</button>
      <hr />
      { planets.map((planet, index) => 
        <Planet
          id={planet.id}
          name={ planet.name }
          description={ planet.description }
          image_url={ planet.image_url }
          link={ planet.link }
          key={ index }
        />
      )}
    </>
  );

}


export default Planets;
