alert('Efetuando revisão do uso de repetições');

let spaceshipName = prompt('Insira o nome da espaçonave: ');
let invertedName = "";

caracterSensivel = "e";

console.log('\nNome original da nave ===> ' + spaceshipName);
for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == caracterSensivel) {
        break;
    }
    invertedName += spaceshipName[i];
    console.log('\nNome após a ocultação ===> ' + invertedName);
}

alert('Nome original da nave ===> ' + spaceshipName + '\nNome após a ocultação ===> ' + invertedName);