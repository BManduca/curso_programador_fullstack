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

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
        //através da palavra super, estaremos invocando o constructor da classe super ou classe mãe
        super(name, maxCrew, maxRecommendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration) {
        acceleration /= 2
        console.log("Incrementando a velocidade em " + acceleration + " km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(210)
   
   
   
