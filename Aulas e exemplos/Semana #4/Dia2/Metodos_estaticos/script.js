class ResourceProcessorStation {
    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours) {
        //retornaremos a quantidade de processamento em um mês, 
        //divido por 720, que é a quantidade de horas que tem em um mês,
        //multiplicado ao final pelas horas
        return monthlyProcessing / 720 * hours
    }
}

//chamando um método static diretamente da classe e não um método
// let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6)

// console.log(totalProcessing)

let processor = new ResourceProcessorStation("Gaia", 2000)
//quando temos um método estatico, não conseguimos chamar ele diretamente do objeto
// processor.calculateProcessInHours(processor,10)

//para conseguir fazer essa 'chamada', podemos fazer da seguinte forma
// - chamando o metodo estatico calculateProcessInHours diretamente da classe e passando um atributo, que é uma instancia da classe
let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)

console.log(totalProcessed)

