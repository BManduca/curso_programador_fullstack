import Spaceship from "./spaceship";
import armamentKind from "./armaments";
import { laserDef } from './defenses'
import basicDefenses from './defenses'

const spaceship = new Spaceship("USS Enterprise","James Tiberius Kirk", armamentKind.laser, laserDef)
const basicSpaceship = new Spaceship("Nave básica", "Astronauta Zin", [], basicDefenses)

console.log(spaceship)
console.log(basicSpaceship)
