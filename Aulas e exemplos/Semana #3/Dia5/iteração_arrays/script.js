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

let uppercaseShips = hitchedSpaceships.map(currentSpaceships => {
    return currentSpaceships.toUpperCase();
})

console.log(uppercaseShips);