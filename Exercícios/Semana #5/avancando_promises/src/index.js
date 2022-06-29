import "core-js"
import "regenerator-runtime"

import Spaceship from "./spaceship";
import spaceshipEngine from "./spaceship_engine";

const sophia = new Spaceship("Sophia", 10, 5, 70)
const amsterda = new Spaceship("Amsterdã", 14, 10, 40)
const dwafStar = new Spaceship("Estrela-Anã", 20, 4, 80)

const sophiaengine = new spaceshipEngine(sophia)
const amsterdaengine = new spaceshipEngine(amsterda)
const dwarfStarengine = new spaceshipEngine(dwafStar)

sophiaengine.turnOn()
amsterdaengine.turnOn()
dwarfStarengine.turnOn()

console.log("Promises")