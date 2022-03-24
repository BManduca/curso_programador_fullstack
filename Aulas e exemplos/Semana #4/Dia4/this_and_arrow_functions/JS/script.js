testingArrow = {
    name: "Escola de JavaScript",
    normalFunction: function() {
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}