let timeoutId = setTimeout(() => {
    console.log("setTIMEOUT ====> Executando após 2 segundos")
}, 2000)

clearTimeout(timeoutId)

let seconds = 0
let timeintervalId = setInterval(() => {
    seconds += 2
    console.log(`SETINTERVAL ====> Executando após ${seconds} segundos`)
    if (seconds >= 10) {
        clearInterval(timeintervalId)
        console.log("saindo da function")
    }
}, 2000)