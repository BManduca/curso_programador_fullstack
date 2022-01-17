alert('Aplicando uso do DoWhile!!');

let velocity = 50;
let aceleration = 5;

do {
    console.log('Acelerando: Estamos a ===> ' + velocity + ' km/s');
    velocity += aceleration;
} while (velocity <= 100);