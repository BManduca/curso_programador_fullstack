// let namePilot = prompt("Insira o nome do piloto: ");

// function greetPilot() {
//     alert("Bom dia, Piloto " + namePilot + "!\n\n\nEncerrando programa!");
// }

// greetPilot()

alert("Função para calcular aceleração de uma nave!");

let velocity_initial = parseInt(prompt("Insira a velocidade inicial(km/s) da nave: "));
let aceleration_initial = parseInt(prompt("Insira a aceleração aplicada pela nave: "));


function speedUp(velocity, aceleration) {
    let newVelocity = velocity + aceleration;
    console.log("A velocidade atual da nave ====> " + newVelocity + " km/s");
}

speedUp(velocity_initial,aceleration_initial)

