let hitchedSpaceships = [["Fênix",7],["Helmet",13],["Golias",10],["Elemental",4]]


for (let x = 0; x < hitchedSpaceships.length; x++) {
    
    var lengthX = hitchedSpaceships[x].length;

    for (let y = 0; y < lengthX; y++) {

        // console.log("Espaçonave [" + y + "] ===> possui " + hitchedSpaceships[x][y] + " passageiros");
        console.log("Posição [" + x + "]" + "[" + y + "]" + " = " + hitchedSpaceships[x][y]);

    }
    console.log("\n");
}

hitchedSpaceships.forEach(function(printer) {

});