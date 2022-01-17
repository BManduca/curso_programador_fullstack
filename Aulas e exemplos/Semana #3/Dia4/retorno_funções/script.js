alert("Calculando a velocidade!")

let velocity_initial = parseFloat(prompt("Insira a velocidade inicial da nave: "));
let aceleration_initial = parseFloat(prompt("Insira a aceleração inicial da nave: "));

function speedUp(velocity, aceleration) {
    let resultVelocity = velocity + aceleration;
    return resultVelocity;
}

console.log("Velocidade inicial: " + velocity_initial)

newVelocity = speedUp(velocity_initial, aceleration_initial);

console.log("Velocidade atual: " + newVelocity);