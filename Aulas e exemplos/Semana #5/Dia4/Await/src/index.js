import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
  shotsPerSecond: 30,
  currentPosition: [30, 45, 70],
  firing: false
}

async function adjustPosition(x, y, z) {
  //retornando erro de uma async function
  if (z > 90) {
    return Promise.reject("Ângulo z inválido para a arma!!")
  }
    laserGun.currentPosition = [x, y, z]
    return [x, y, z]
}

async function fire(x, y, z) {
    laserGun.firing = true
    return [x, y, z]
}

function loadAmmo(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Arma carregada")
    }, 2000)
  })
}

async function moveAndFire(x, y, z) {
  try {
    const adjustPositionPromise = adjustPosition(x, y, z)
    const loadAmmoPromise = loadAmmo()

    /*
      o await vai retornar o 'return' de uma promise
      e no promiseResult teremos um array, que na posição 0 
      teremos o retorno(resolve) de adjustPositionPromise e na 
      posiçao 1 teremos o retorno(resolve) de loadAmmoPromise
    */
    let promiseResult = await Promise.all([
      adjustPositionPromise,
      loadAmmoPromise
    ])

    let newCoordinates = promiseResult[0]

    console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)
    let fireCoordinates = await fire(...newCoordinates)
    console.log(`Começando a atirar nas coordenadas (${fireCoordinates[0]}, ${fireCoordinates[1]}, ${fireCoordinates[2]})`)
  } catch(error) {
    console.log(error)
  }
}

moveAndFire(20, 40, 89)
