alert("Conteúdo sobre operações lógicas");

let spaceship = "Elemental";
let velocity = 20;

//tabela verdade do E(AND)

// alert("Resultado da operação: " + (spaceship.length == 9 && velocity > 15)); // V e V => V

// alert("Resultado da operação: " + (velocity > 10 && velocity < 19)); // V e F => F

// alert("Resultado da operação: " + (velocity < 17 && spaceship == "Elemental")); // F e V => F

// alert("Resultado da operação: " + (spaceship == "Golias" && velocity > 21)); //F e F => F


//tabela verdade do OU(OR)

// alert("Resultado da operação: " + (spaceship.length == 9 || velocity > 15)); // V ou V => V

// alert("Resultado da operação: " + (velocity > 10 || velocity < 19)); // V ou F => V

// alert("Resultado da operação: " + (velocity < 17 || spaceship == "Elemental")); // F ou V => V

// alert("Resultado da operação: " + (spaceship == "Golias" && velocity > 21)); //F ou F => F


//tabela verdade do NÃO(NO)

// alert("Resultado da operação: " + !(velocity > 19)); // NÃO V => F

// alert("Resultado da operação: " + !(spaceship == "Golias")); // NÃO F => V

alert("Resultado da operação: " + !(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length + 1 > 15))
// V || (V && F) => V