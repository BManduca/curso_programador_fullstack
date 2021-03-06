let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 10
}


const velocityAfter2Seconds = (velocity, acceleration) => {
    //resolve -> encerrado com sucesso
    //reject -> encerrada com falha
    new Promise(function(resolve, reject) {
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

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)

console.log("Execução de Promises!")