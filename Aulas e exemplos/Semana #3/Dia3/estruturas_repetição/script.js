// let velocity = 50;

// let aceleration = 5;

// while (velocity <= 100) {
//     console.log("Acelerando: Estamos a " + velocity + " km/s");
//     velocity += aceleration; // incrementando a velocidade em cada interação com a aceleração
// }

let constellation = "Andromeda";

let position = 0;

let constellationLength = constellation.length

while (position < constellationLength){
    if (constellation[position] == "a" || constellation[position] == "A") {
        console.log(position);
    }
    position += 1;
}