// class TransportSpaceship {
//     constructor(name) {
//         this.name = name
//         this.currentVelocity = 0
//     }

//     /**
//      * @param {number} newVelocity
//      */
//     set velocity(newVelocity) {
//         if (newVelocity > 120) {
//             this.currentVelocity = 120
//         } else {
//             this.currentVelocity = newVelocity
//         }
//     }

// }

// let spaceship = new TransportSpaceship("Transportador")


// spaceship.velocity = 130

// console.log(spaceship)


class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    /*
        quando utilizamos o get, o metodo weeklyProcessedLoad
        será interpretado como uma variável e toda vez que 
        for chamar essa variável, será chamado o método 
        weeklyProcessedLoad e vai retornar o atríbuto
        passado no constructo acima, divido por 4
    */
    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }

}

let resourceProcessor = new ResourceProcessStation("Gaia", 500)

console.log(resourceProcessor.weeklyProcessedLoad)

resourceProcessor.monthlyProcessedLoad = 600

console.log(resourceProcessor.weeklyProcessedLoad)