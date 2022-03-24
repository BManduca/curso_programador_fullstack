class Spaceship {

    //simulando uma variável estática, usando método get estático
    static get desaccelerationRate() {
        return 0.15
    }

    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.desaccelerationRate))
    }

}

let spaceship = new Spaceship("Apollo")

spaceship.speedUp(100)

console.log(spaceship)