spaceshipName = prompt("Insira o nome da espaçonave: ");

alert("Iniciando computador de bordo da " + spaceshipName);

let velocity = prompt("Insira a velocidade em km/s: ");
let desaceleration = prompt("Insira a aceleração em km/s: ");

function slowDown(velocity, desaceleration, printer) {
    
    while (velocity > 0) {
        printer(velocity)
        velocity -= desaceleration;
    }
    console.log("\nA nave " + spaceshipName + " se encontra parada! As Comportas podem ser abertas!");
}

//função de callback(HOF)
slowDown(velocity, desaceleration, velocity => {
    console.log("Velocidade atual da " + spaceshipName + ": " + velocity + " km/s");
});