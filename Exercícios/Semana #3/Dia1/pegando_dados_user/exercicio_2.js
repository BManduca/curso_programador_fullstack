alert("Bem-vindo! A seguir pediremos que informa alguns dados.");
let informar_nome = prompt("1 - Insira o seu nome:");
let informar_idade = prompt("2 - Insira a sua idade:");
let confirmar_idade = confirm("Sua idade é " + informar_idade + " anos?");

// alert("Nome: " + informar_nome);
// alert("idade: " + informar_idade + " anos");
// alert("Idade confirmada: " + confirmar_idade);

alert("Nome: " + informar_nome + "\nIdade: " + informar_idade + " anos" + "\nIdade confirmada: " + confirmar_idade);