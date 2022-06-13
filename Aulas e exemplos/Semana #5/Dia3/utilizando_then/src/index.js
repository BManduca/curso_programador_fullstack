let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 0
}


const velocityAfter2Seconds = (velocity, acceleration) => {
    //resolve -> encerrado com sucesso
    //reject -> encerrada com falha
    //ao utilizar promises em vida real, nao se usa setTimeout
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(acceleration > 0) {
                velocity += acceleration * 2
                console.log(`Nova velocidade:${velocity}`)
                resolve(velocity)
            } else {
                console.log("aceleração inválida")
                reject("Não possui aceleração")
            }
        }, 1000)
    })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(velocity => {
    komodoShip.velocity = velocity
    console.log("Depois de acelerar: \n", komodoShip)
}).catch(message => {
    console.log(`Komodo: ${message}`)
})

console.log("Execução de Promises!")
console.log(komodoShip)