alert("Seja bem vindo ao exercitando funções!!");

spaceshipName = prompt("Insira o nome da espaçonave: ");
spaceshipVelocity = 0;
spaceshipVelocity = parseFloat(prompt("Insira a velocidade da nave: "));
let chooseOption;

function showMenu() {
    let option;
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("Escolha uma das opções abaixo, para prosseguir com o programa: \n\n" + 
                        "1 - Acelerar a nave em 5 km/s\n" + 
                        "2 - Desacelerar a nave em 5 km/s\n" + 
                        "3 - Imprimir dados de bordo\n" + 
                        "4 - Sair do Programa"
                    );
    }
    return option;
}

function speedUp(velocity) {
    let resultVelocity = velocity + 5;
    return resultVelocity;
}

function slowDown(velocity) {
    let resultVelocity = velocity - 5;
    if (resultVelocity < 0) {
        resultVelocity = 0;
    }
    return resultVelocity;
}

function printSpaceshipBoardData(spaceshipName, velocity) {
    alert("Espaçonave ===> " + spaceshipName + "\nVelocidade ===> " + velocity + " km/s");
}

do {
    chooseOption = showMenu();

    switch (chooseOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity);
            break;
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity);
            break;
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVelocity);
        break;
        default:
            alert("Encerrando o programa de bordo!");
            break;
    }

} while (chooseOption != "4");
