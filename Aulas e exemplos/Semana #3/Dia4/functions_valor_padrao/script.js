alert("Aplicando funções com valores padrões!!")

let namePilot = prompt("Insira o nome do piloto: ");

let message = prompt("Insira a mensagem: ");


function greetPilot(name, messagePilot = "Olá") {
    console.log(messagePilot + ", " + name);
}

greetPilot(namePilot, message);