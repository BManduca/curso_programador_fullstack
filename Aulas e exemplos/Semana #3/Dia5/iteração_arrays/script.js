let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fênix", "Puller"]

/*
    Documentacao
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/* 

    forEach() => função que irá percorrer o array e para cada elemento será chamado o callback
    que será declarado

*/

// hitchedSpaceships.forEach(function(currentSpaceships, index) {
//     console.log("Nave[" + index + "] ===> " + currentSpaceships + "\n")
// })

// hitchedSpaceships.forEach((currentSpaceships, index) => {
//     console.log("Nave[" + index + "] ===> " + currentSpaceships + "\n")
// })

// hitchedSpaceships.forEach(function upperArray(currentSpaceships, index) {
//     let uppercase = currentSpaceships.toUpperCase();
//     console.log("Nave[" + index + "] ===> " + uppercase + "\n")
// })

/* 
    map() => função que modifica os elementos de um array um a um 
    sem alterar o array original, percorrendo assim cada elemento,
    alterando esse elemento pelo retorno que é colocado no callback e 
    por fim, retornar o novo array que foi gerado
*/

// let uppercaseShips = hitchedSpaceships.map(function(currentSpaceships) {
//     let uppercase = currentSpaceships.toUpperCase();
//     return uppercase;
// })

// let uppercaseShips = hitchedSpaceships.map(currentSpaceships => {
//     return currentSpaceships.toUpperCase();
// })

// console.log(uppercaseShips);

// console.log("Modo lowerCase\n\n");

// hitchedSpaceships.map(function lowerArray(currentSpaceships, index) {
//     console.log("Nave[" + index + "] ===> " + currentSpaceships + "\n");
// })

// console.log("\n\nModo upperCase\n\n");

// hitchedSpaceships.map(function upperArray(currentSpaceships, index) {
//     let upperCase = currentSpaceships.toUpperCase();
//     console.log("Nave[" + index + "] ===> " + upperCase + "\n");
// })


/*
    filter() => função para filtrar os elementos do array e essa função
    aguarda um retorno booleano do callback, para saber se o elemento 
    passou no filtro ou não.

    se resposta == true, o elemento é inserido no array, 
    caso contrário, não.
*/

// let with7Chars = hitchedSpaceships.filter(element => {
//     return element.length >= 7;
// })

// console.log("Novo array: [" + with7Chars + "]");


/*
    find() => função bem parecida com a filter(), mas a diferença é que para a função
    find(), so irá retornar o primeiro elemento que satisfazer a condição lógica repassada e também
    o filter() retorna um novo array, já o find(), retorna somente o elemento em si
*/

let with7Chars = hitchedSpaceships.find(element => {
    return element.length >= 7;
})

console.log(with7Chars);

