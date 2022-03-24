class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        if (this.shotsLeft > 0) {
            console.log("BANG!")
            this.shotsLeft -= 1
        } else {
            throw new Error("Arma " + this.identifier + " sem munição!")
        }
    }

    reload() {
        this.shotsLeft = 5
    }

}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
} catch (error) {
    console.log(error.message)
    fenixWeapon.reload()
} finally {
    console.log("A arma deu bons tiros!!")
}


console.log(fenixWeapon)