let spaceship = {
    name: "Fênix",
    crewQuantity: 7,
    type: "Battle"
}

//CRIANDO UM OBJETO VAZIO
let spaceship2 = new Object()

//console.log("Name => " + spaceship.name);
console.log(spaceship);

spaceship.isHitched = false
spaceship["shieldLevel"] = 100

console.log("\nA Plataforma se encontra com processo de engate pronto? " + spaceship["isHitched"])
console.log("\nNível do escudo: " + spaceship.shieldLevel + "%")
