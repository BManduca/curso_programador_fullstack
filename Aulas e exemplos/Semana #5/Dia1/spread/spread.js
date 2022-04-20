function greetCrew(message,...names) {
  names.forEach(name => console.log(`${message}, ${name}`))
}

//greetCrew("Seja bem-vindo", ["Arthur", "Jake", "Melissa"])
//o message passa a receber a mensagem e o ...names, 
// passa a receber todo o restante da function 
greetCrew("Seja bem-vindo", "Arthur", "Jake", "Melissa")