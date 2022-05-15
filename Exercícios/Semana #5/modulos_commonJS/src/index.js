const Planet = require('./planet')

/*
    dist em au dos planetas
    mercurio -> 0.39
    terra -> 1
    Vênus -> 0.72
    Marte -> 1.52
    Júpiter -> 5.2
    Saturno -> 9.53
    Urano -> 19.1
    Netuno -> 30
*/

const planetOperations = require('./planet_operations')

let planets = [
    new Planet("Mércurio", 0.39),
    new Planet("Vênus", 0.72),
    new Planet("Terra", 1),
    new Planet("Marte", 1.52),
    new Planet("Júpiter", 5.2),
    new Planet("Saturno", 9.53),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30)
]

planets.forEach(planet => {
    /*
        planetOperations.convertAuToKm retornara um valor com várias casas
        decimais, desta forma, usaremos o toFixed para corrigir o valor somente
        mostrando duas casas decimais e este valor será retornado como uma string
    */
    distanceFromSun = planetOperations.convertAUtoKm(planet.distAuToSun).toFixed(2)
    console.log(`${planet.name}: `)
    console.log(`Distância em AU: ${planet.distAuToSun}AU | Distância em KM: ${distanceFromSun}Km`)
    console.log(` `)
})