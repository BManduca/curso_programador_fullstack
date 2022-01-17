// let spaceshipName = prompt("Insira o nome da espaçonave: ");

// function changeSpaceshipName() {
//     spaceshipName = "Elemental";
// }

// console.log("Before function ====> " + spaceshipName);

// changeSpaceshipName();

// console.log("After function ====> " + spaceshipName);

// function startSpaceshipVelocity() {
//     let spaceshipVelocity = 0;
// }

// startSpaceshipVelocity();


// /*
//     como a spaceshipVelocity foi criada dentro do escopo da função startSpaceshipVelocity, 
//     podemos afirmar que ela tem um escopo local, desta forma, ela so existe ou pode ser acessada 
//     dentro da função 
// */
// console.log(spaceshipVelocity);

function setSpaceshipDetails() {
    let velocity = 50;

    if (velocity == 50) {
        velocity = 60;

        var spaceshipName = "Elemental";
        let spaceshipType = "Discovery"
    }

    console.log(velocity);
    console.log(spaceshipName);
    console.log(spaceshipType);
}

setSpaceshipDetails();