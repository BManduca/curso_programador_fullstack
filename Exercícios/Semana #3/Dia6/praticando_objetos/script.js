/*
    1 - Nave deve partir da velocidade 0 km/s
    2 - Menu deve ser exibido para o usuário perguntando se ele quer acelerar ou parar a nave

        * Se ele quiser parar, uma mensagem deve ser exibida com as características
        da nave(nome e tipo) e em que velicidade ele estava
        * Se ele quiser acelerar, deve ser exibido um prompt para que ele informe quanto ele 
        quer acelerar e este valor será incrementado na velocidade
    3 - Quando a velocidade for incrementada, deve se fazer uma verificação para 
        ver se a nave está acima da velocidade máxima dela.

        * se ela estiver, uma mensagem deve ser exibida informando a velocidade da nave
        e a velocidade máxima permitida.

*/



let spaceship = {
    //propriedades que não são funções e contêm tipos de dados normais => atríbutos 
    velocity: 0,
    //propriedade que é uma função => método
    speedUp: function(acceleration) {
        //aqui usarei o this, para acessar a propriedade velocity, presente 
        //em spaceship, pois referencia o objeto em si
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    //esse spaceship referencia nossa nave, pois como ela esta no index, ela tem um escopo global
    spaceship.name = prompt("Insira o nome da Nave: ")
    spaceship.type = prompt("Insira o tipo da Nave: ")
    //forçando o valor recebido em maxVelocity ser um valor númerico
    spaceship.maxVelocity = Number(prompt("Insira a velocidade máxima(km/s) que a Nave pode alcançar: "))
}

function accelerate() {
    let acceleration = Number(prompt("Qual será a aceleração aplicada? (km/s)"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!" + 
              "\nVelocidade da Nave: " + spaceship.velocity + " km/s" + 
              "\nVelocidade máxima que a nave pode alcançar: " + spaceship.maxVelocity + " km/s")
    }
}

function stop(){
    alert("Nome: " + spaceship.name + 
          "\nTipo: " + spaceship.type + 
          "\nVelocidade da nave: " + spaceship.velocity + "km/s" +
          "\nVelocidade máxima da nave: " + spaceship.maxVelocity + "km/s")
    spaceship.velocity = 0
}

function showMenu() {
    let choosenOption
    do {
        choosenOption = prompt("Você deseja: \n1 - Acelerar a nave\n2 - Parar a nave")
        switch (choosenOption) {
            case "1":
                accelerate()
                break;
            case "2":
                stop()
                break;
            default:
                alert("Opção inválida")
        }
    } while (choosenOption != "2")
}

registerSpaceship()

showMenu()