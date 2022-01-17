// let hitchedSpaceships = ["Supernova", "Elemental", "Helmet"];

//outra forma de criar um array
let hitchedSpaceships = new Array("Supernova", "Elemental", "Helmet", "Colossus");

// console.log("A espaçonave " + hitchedSpaceships[0] + " presente neste array, é uma informação do tipo ===> " + typeof(hitchedSpaceships[0]));

// console.log(typeof(hitchedSpaceships[0]))

// for (let i = 0; i < hitchedSpaceships.length; i++) {
//     console.log("===================================================================================================================================================")
//     console.log("A espaçonave " + hitchedSpaceships[i] + " presente neste array, na posição["+ i +"] \n É uma informação do tipo ===> " + typeof(hitchedSpaceships[i]));
//     console.log("===================================================================================================================================================\n")
// }

console.log("Array antes do push => " + hitchedSpaceships);

hitchedSpaceships.push("Fênix");
hitchedSpaceships.push("Andrômeda");

console.log("\nArray depois do push e antes do pop => " + hitchedSpaceships);

let removedshipPop = hitchedSpaceships.pop()

console.log("\nArray depois do pop => " + hitchedSpaceships + "\nNave removida pela função pop() => " + removedshipPop);

hitchedSpaceships.push("Alpha1");
let removedshipShift = hitchedSpaceships.shift();

console.log("\nArray depois do shift => " + hitchedSpaceships + "\nNave removida pela função pop() => " + removedshipPop + "\nNave removida pela função shift() => " + removedshipShift);

let addshipUnshift = hitchedSpaceships.unshift("Pégasus");

console.log("\nArray depois da função unshift() => " + hitchedSpaceships + "\nNave adicionada => " + hitchedSpaceships[0] + "\nTamanho do array => " + hitchedSpaceships.length);

let helmetPos = hitchedSpaceships.indexOf("Helmet");

console.log("Nave " + hitchedSpaceships[2] + " esta na posição " + helmetPos);