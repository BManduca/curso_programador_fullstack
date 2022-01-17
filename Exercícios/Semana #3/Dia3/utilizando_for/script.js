alert('Seja bem vindo ao exercício de ocultador de Nome!');
let name_nave = prompt('Insira o nome da espaçonave: ');
let new_name_nave = "";

let caracter = prompt('Qual caracter presente no nome da espaçonave deseja substituir?');

let caracter_subst = prompt('Qual caracter irá substituir o caracter escolhido anteriormente?');

for (let i = 0; i < name_nave.length; i++) {
    if (name_nave[i] == caracter) {
        new_name_nave += caracter_subst;
    } else {
        new_name_nave += name_nave[i]
    }
}

alert('O novo nome da nave é: ' + new_name_nave);