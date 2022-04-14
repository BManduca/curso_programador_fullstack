// let spaceship = {
//     name: "Colossus",
//     crewQuantity: 10, 
//     isHitched: false
// }

// let { name: spaceshipName, crewQuantity } = spaceship

// let spaceshipName = spaceship.name
// let crewQuantity = spaceship.crewQuantity

// console.log(spaceshipName, crewQuantity)

let spaceships = ["Colossus", "Artemis", "Fênix", "Puller"]


/*
    desestruturação funciona,quando é pego a variável colossus, que 
    está no índice de desestruturação 0 e esta mapeando no índice 0 de spaceships que é Colossus
    e faz o mesmo com Ártemis

    ao colocar na desestruturação elementos que tem a mais do que no índice do array original, 
    não ocasiona erro, porém, retorna valor undefined

    com objeto funciona da mesma forma 
*/
let [colossus, artemis, fenix, puller] = spaceships

// let colossus = spaceships[0]
// let artemis = spaceships[1]

// console.log(colossus, artemis, fenix, puller)


//fazendo atraves de function

function printSpaceships([colossus, artemis, fenix, puller]) {
    console.log(colossus, artemis, fenix, puller)
}

printSpaceships(spaceships)