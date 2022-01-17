let spaceshipNames = ["Elemental", "Darwin", "Artemis", "Supernova"]

// console.log("Antes do splice ==> " + spaceshipNames);

// let removedSpaceships = spaceshipNames.splice(1, 2, "Démeter", "Puller", "Gólias");

// console.log("\nDepois do splice ==> " + spaceshipNames + "\nEspaçonaves removidas: " + removedSpaceships);

let extractedNames = spaceshipNames.slice(1,3);

console.log(extractedNames);