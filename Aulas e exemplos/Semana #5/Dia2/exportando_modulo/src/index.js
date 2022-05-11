//nativo do JS acima da versao 6
// import moment from "moment/src/moment"

// alert(moment().format("HH:mm:ss"))

// function formatDate() { 
//     const date = new Date(); 
//     const formatDate = date.toLocaleString('br', { timeZone: 'UTC' }); 
//     return formatDate; 
// } 

// alert(formatDate())

const Planet = require('./planet')
const solarSystem = require('./solar_system')
//nao precisou colocar todo o caminho/diretorio, pois, o require
//ja considera o node_modules um diretorio padrão e por isso nao precisa colocar o path
const moment = require('moment')

const earth = new Planet("Terra", 50100000)
earth.rotate()

solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("Marte", 144800000))
solarSystem.planets.push(new Planet("Mercúrio", 74800000))
solarSystem.planets.push(new Planet("Saturno", 4270000000))

console.log(solarSystem)

console.log(moment().format("h:mm"))