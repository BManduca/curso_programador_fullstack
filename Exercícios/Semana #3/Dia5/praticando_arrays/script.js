/*
    com base no array, nós queremos:

    - Filtrar o nome das naves que tem mais de 9 tripulantes => ok
    - Informar o número da plataforma em que está a primeira 
    nave que ainda está com o engate pendente
        -- utilizar a função findIndex, que é bem parecido com o find,
        mas retorna o índice de um filtro em vez do elemento do Array
    - Destacar o nome de todas as navez colocando-as em caixa Alta e exibindo
    - Exibir um alerta com todas essas informações


    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join

*/

const hitchedSpaceships = [
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let with9CrewMembers = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => { return spaceship[0] })

let ongoingHitchPlataform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

/* 
    with9CrewMembers.join(", ") -> vai retornar o array resultante e entre cada elemento vai colocar a string ", " ,
    ou seja, retornando assim uma string com todos os elementos concatenados e separados por ", "
*/

let message = "Espaçonaves com mais de nove tripulantes: " + with9CrewMembers.join(", ")

//aqui faremos o ongoingHitchPlataform + 1, pois o índice de engate dela é o índice da plataforma que ela se encontra + 1
message += "\nPlataforma com processo de engate ainda pendente: " + (ongoingHitchPlataform + 1)

message += "\nEspaçonaves destadas: " + highlightedSpaceships.join(", ")

alert(message)
