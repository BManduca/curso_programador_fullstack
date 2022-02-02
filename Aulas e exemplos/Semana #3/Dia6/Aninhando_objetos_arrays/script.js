// let spaceship = {
//     name: "Supernova",
//     type: "Batalha",
//     crew: ["Capitão Silva", "Ana Júlia", "Thiago"]
// }

// //adicionando mais um membro ao crew da Supernova
// spaceship.crew.push("Tenente Fernanda")

// console.log(spaceship)
// console.log(spaceship.crew)

// let spaceships = [
//     { name: "Elemental", crewQuantity: 10 },
//     { name: "Puller", crewQuantity: 14 },
//     { name: "Colossus", crewQuantity: 8 },
//     { name: "Helmet", crewQuantity: 12 }
// ]


// spaceships.forEach(spaceship => {
//     console.log("A " + spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes")
// })



let spaceship = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Brunno Manduca",
        age: 29
    }
}

console.log("Capitão: " + spaceship.captain.name + "\nIdade: " + spaceship.captain.age + " anos")