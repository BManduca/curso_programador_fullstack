alert("Sistema de navegação de uma nave interagindo com Usuário!")

let nome_piloto = prompt("Insira o nome do Piloto:");

let velocity = 0;

newVelocity = prompt("A que velocidade gostaria de acelerar a nave?");

let confirm_velocity = confirm("Você confirma a escolha de acelerar a nave em " + newVelocity + " km/s ?");

if (confirm_velocity) {
    velocity = newVelocity;
}

if (velocity >= 100) {
    console.log("Velocidade perigosa. Controle automático forçado.");
} else if(velocity >= 80 && velocity < 100) {
    console.log("Velocidade alta. Considere diminuir.");
} else if(velocity >= 40 && velocity < 80) {
    console.log("Parece uma boa velocidade para manter.");
} else if(velocity >= 0 && velocity < 40) {
    console.log("VocÊ esta devagar, podemos aumentar mais.");
} else if(velocity < 0) {
    console.log("Nave está parada. Considere partir e aumentar a velocidade.")
}

alert("Nome Piloto: " + nome_piloto + "\nVelocidade Atual: " + velocity + " km/s");