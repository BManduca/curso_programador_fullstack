let doubleSpeed = function(velocity) {
    return velocity * 2;
}

let velocity = prompt("Insira o valor inicial da velocidade: ");

let newVelocity = doubleSpeed(velocity);

console.log("A velocidade final ===> " + newVelocity + "km/h");