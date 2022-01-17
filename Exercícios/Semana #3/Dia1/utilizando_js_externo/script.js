alert("informando a diferença de idade entre duas pessoas");

let nome_pessoa_mais_velha = prompt("1 - Insira o nome da pessoa mais velha:");
let idade_pessoa_mais_velha = prompt("2 - Insira a idade da pessoa mais velha:");
let nome_pessoa_mais_nova = prompt("3 - Insira o nome da pessoa mais nova:");
let idade_pessoa_mais_nova = prompt("4 - Insira a idade da pessoa mais nova:");

let diferenca_idade = (idade_pessoa_mais_velha - idade_pessoa_mais_nova);

alert(
    "Nome da pessoa mais velha: " + nome_pessoa_mais_velha + "\nIdade: " + idade_pessoa_mais_velha + " anos" + 
    "\n\n" + 
    "Nome da pessoa mais nova: " + nome_pessoa_mais_nova + "\nIdade: " + idade_pessoa_mais_nova + " anos" + 
    "\n\n" + 
    "A diferença de idade entre " + nome_pessoa_mais_velha + " e " + nome_pessoa_mais_nova + " é de: " + diferenca_idade + " ano(s). "
);