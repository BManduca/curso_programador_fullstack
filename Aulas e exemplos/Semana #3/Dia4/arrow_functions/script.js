const doubleVelocity = (velocity) => {
    return velocity * 2;
}

let velocity = prompt("Insira o valor da velocidade em km/s: ");

console.log("Velocidade final é de: " + doubleVelocity(velocity) + " km/s");