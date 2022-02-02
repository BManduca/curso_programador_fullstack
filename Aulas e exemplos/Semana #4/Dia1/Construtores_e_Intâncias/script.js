class SpacialStation {
    constructor(name, platformQuantity) {
        this.name = name
        this.platformQuantity = platformQuantity
    }
}

let observatory = new SpacialStation("Observatório", 40)

console.log(observatory)

class Spaceship {
    constructor(name, type = "Descoberta") {
        this.name = name
        this.type = type
    }
}

// ao instanciar um objeto, passando somente uma informação como parâmetro
// e analisarmos que o construtor da classe instanciada tem duas informações
// como parâmetro, podemos afirmar que a informaçao vira de maneira Default
// e se caso, passarmos realmente duas informações, como no exemplo, 
// o valor default será sobrescrito
let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Batalha")

console.log(helmet)