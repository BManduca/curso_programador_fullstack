class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) { 
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            console.log("VELOCIDADE ULTRAPASSOU O VALOR MÁXIMO PERMITIDO!!\nDiminua ou poderá provocar danos a nave!")
        }
    }

}

//sobrescrevendo método speedUp
class TransportSpaceship extends Spaceship{
    speedUp() {
        console.log("Naves de transporte só aumentam a velocidade em 1 km/s")
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)
/*
    em JS não tem parâmetro obrigatório, então não é feito validação,
    se por exemplo o método speedUp tem parâmetro ou se foi enviado...
    A única coisa que é feito, é que o JS pega tudo que for enviado entre ()
    e coloca na mesma ordem de chamada do método, da declaração do método...
    
    O JS ele busca por nome do método, ele não leva em consideração os valores 
    no momento de fazer essa ligação entre o método que estamos chamando e o método
    que esta declarado.

*/
transportSpaceship.speedUp()

console.log(transportSpaceship)