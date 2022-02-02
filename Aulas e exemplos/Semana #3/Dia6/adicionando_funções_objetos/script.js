let spaceship = {
    //propriedades que não são funções e contêm tipos de dados normais => atríbutos 
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    //propriedade que é uma função => método
    turnOn: function() {
        alert("Preparando propulsão...")
        alert("Ligando computador de bordo!")
    }
}

spaceship.velocity = 0



spaceship.speedUp = function(acceleration) {
    //através do this, podemos acessar a propriedade velocity presente na spaceship
    //o this ele referencia o proprio objeto, que no caso, é o spaceship
    this.velocity += acceleration
}

console.log(spaceship.velocity)

spaceship.speedUp(10)

console.log(spaceship.velocity)

// spaceship.turnOn()