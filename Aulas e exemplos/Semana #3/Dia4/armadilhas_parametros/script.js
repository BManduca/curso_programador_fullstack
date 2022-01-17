alert("Armadilhas com parâmetros!")

let velocity_initial = parseFloat(prompt("Insira a velocidade inicial da nave: "));
let aceleration_initial = parseFloat(prompt("Insira a aceleração inicial da nave: "));
let spaceshipUnity = prompt("Insira a unidade: ")


function speedUp(velocity, aceleration, unit = "km/s") {
    let newVelocity = velocity + aceleration;
    alert("Velocidade inicial: " + velocity_initial + "\naceleração inicial: " + aceleration_initial + "\nUnidade: " + spaceshipUnity);
    alert("Velocidade final da nave ===> " + newVelocity + " " + unit);
}

speedUp(velocity_initial, aceleration_initial, spaceshipUnity)
