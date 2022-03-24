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

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        console.log("Recolhendo armas e parando nave de batalha!")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        console.log("Recolhendo equipamento de amostras e parando nave de descobertas!")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fênix", 15, 230)

darwin.speedUp(13)

console.log(darwin)

fenix.speedUp(12)

console.log(fenix)
