let velocity = 80;

// if (velocity < 40) {
//     console.log("Velocidade considerada baixa!!")
// } else if (velocity <= 100) {
//     console.log("Cuidado! Proxímo a velocidade de risco!");
// } else {
//     console.log("Velocidade de Risco!");
// }

//operador ternário => so é recomendado quando as situações de avaliação e blocos de código são pequenos..
//código macarronico => código muito díficil de estudar e compreender por outros devs

(velocity >= 100 ) ? console.log("Cuidado! Velocidade considerada de risco!") : console.log("Velocidade menor que 100!");