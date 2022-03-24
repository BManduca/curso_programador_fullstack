class Spaceship {
    constructor(name) {
        //apesar de velocity não ser instanciada no objeto
        //a colocamos aqui pois, toda nave criada começara com 0
        this.name = name
        this.velocity = 0
    }

    speedUp(acceleration) {
        this.velocity += acceleration
    }

}

let artemis = new Spaceship("Artemis")

console.log(artemis)

artemis.speedUp(10)
artemis.speedUp(15)

console.log(artemis)