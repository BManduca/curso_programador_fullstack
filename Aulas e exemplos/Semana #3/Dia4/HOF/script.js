function doubleVelocity(velocity, printer) {
    console.log("Entrando em doubleVelocity");
    let newVelocity = velocity * 2;
    printer(newVelocity);
    return newVelocity;
}

// let printVelocity = velocity => {
//     console.log("Nova velocidade: " + velocity + "km/s");
// }

let velocity = prompt("Insira a velocidade em km/s: ");

// let newVelocity = doubleVelocity(velocity, printVelocity)

// console.log(newVelocity);

let anotherVelocity = doubleVelocity(velocity, velocity => {
    console.log("Nova velocidade: " + velocity + " km/s");
})