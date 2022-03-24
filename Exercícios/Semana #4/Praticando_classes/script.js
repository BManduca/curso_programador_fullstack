



class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entranceDoorsOpen = false
    }

    hitch() {
        this.isHitched = true
        this.entranceDoorsOpen = true
    }

}

function registerSpaceship() {
    let spaceshipName = prompt("Insira o nome da Nave: ")
    let spaceshipCrewQuantity = prompt("Insira a quantidade de tripulantes: ")
    let spaceship = new Spaceship(spaceshipName, spaceshipCrewQuantity)
    return spaceship
}


function showMenu() {
    let choosenOption

    while (choosenOption != "1" && choosenOption != "2" && choosenOption != "3") {
        choosenOption = prompt("O que deseja fazer?\n" + 
                               "1 - Realizar engate da Nave\n" + 
                               "2 - Imprimir Naves\n" + 
                               "3 - Sair do programa")
    }
    return choosenOption
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + " - " + spaceship.name + " (" + spaceship.crewQuantity + " tripulantes)\n"
    });
    alert(spaceshipList)
}


let hitchedSpaceships = []

let option

while (option != 3) {
    option = showMenu()
    switch (option) {
        case "1":
            let spaceshipToAdd = registerSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break;
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    
        default:
            break
    }
}