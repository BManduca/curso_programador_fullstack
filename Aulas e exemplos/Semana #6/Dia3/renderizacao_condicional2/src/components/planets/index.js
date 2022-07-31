import React from "react";
import Planet from "./planet";

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}

class Planets extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      planets: [
        // {
        //   name: "Mercúrio",
        //   description: "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas.",
        //   image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
        //   link:"https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        // },
        // {
        //   name: "Plutão",
        //   description: "Plutão é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper, uma região de corpos além da órbita de Netuno. Como outros membros do cinturão de Kuiper, Plutão é composto primariamente de rocha e gelo e é relativamente pequeno, com aproximadamente um quinto da massa da Lua e um terço de seu volume. ",
        //   image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/600px-Pluto_in_True_Color_-_High-Res.jpg",
        //   link:"https://pt.wikipedia.org/wiki/Plutão"
        // },
        // {
        //   name: "Vênus",
        //   description: "Vénus (português europeu) ou Vênus (português brasileiro) é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras.",
        //   image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/600px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg",
        //   link:"https://pt.wikipedia.org/wiki/Vénus_(planeta)"
        // }
      ]
    }
  }



  componentDidMount() {
    getPlanets().then(data => {
      this.setState(state => ({
        planets: data['planets']
      }))
    })
  }

  removeLast = () => {
    let new_list_planets = [...this.state.planets]
    new_list_planets.pop()
    this.setState(state => ({
      planets: new_list_planets
    }))
  }

  duplicateLastPlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1]
    this.setState(state => ({
      planets: [...this.state.planets, last_planet]
    }))
  }

  render() {
    return (
      <>
        <h3>Planet List</h3>
        {/* <button onClick={showMessage}>Show Message!</button> */}
        <button onClick={this.removeLast}>Remove Last!</button>
        <button onClick={this.duplicateLastPlanet}>Duplicate Last!</button>
        <hr />
        { this.state.planets.map((planet) => 
          <Planet
            name={ planet.name }
            description={ planet.description }
            image_url={ planet.image_url }
            link={ planet.link }
          />
        )}
      </>
    );
  }


}


export default Planets;
