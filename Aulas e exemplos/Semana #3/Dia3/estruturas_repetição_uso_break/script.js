alert('Uso do break em estrutura de repetição ===> DoWhile');

let spaceshipName = 'Supernova';

for (let i = 0; i < spaceshipName.length; i++) {
    if (spaceshipName[i] == "o") {
        break;
    } else {
        console.log(spaceshipName[i]);
    }
}