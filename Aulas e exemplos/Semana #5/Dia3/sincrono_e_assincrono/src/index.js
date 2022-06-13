function step02() {
    console.log("Passo 02")
}

console.log("Passo 01")

step02()

console.log("Passo 03")

console.log("Passo 04")

//assíncrono
setTimeout(() => {
    console.log("Passo 05")
}, 1000)

console.log("Passo 06")
