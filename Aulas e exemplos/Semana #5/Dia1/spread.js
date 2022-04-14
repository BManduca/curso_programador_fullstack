// let spaceships = ["Colossus", "Artemis", "Fênix"]

// console.log(...spaceships)

let spaceships = ["Colossus", "Artemis", "Fênix"]

let newSpaceships = [...spaceships, "Puller"]

console.log(newSpaceships)

function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

let spaceshipAcceleration = [60, 10]

let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)