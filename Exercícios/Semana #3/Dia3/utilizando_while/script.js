let warpCount = 0;
let chosenOption = "";

let name_spaceship = prompt("Insira o nome da espaço-nave: ");

chosenOption = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")

while (chosenOption == "1") {
    warpCount += 1;
    chosenOption = prompt("Deseja realizar a proxíma dobra?\n1 - Sim\n2 - Não")
}

alert("Nave: " + name_spaceship + "\nQuantidade de dobras: " + warpCount);

