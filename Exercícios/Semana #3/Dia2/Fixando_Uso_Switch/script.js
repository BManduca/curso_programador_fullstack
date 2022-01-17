alert("Seja bem vindo ao conversor de Anos-luz!!");

let dist_anos_luz = prompt("Insira a distância em anos-luz: ");

let opcaoConversao = prompt("Escolha uma das opções de unidades abaixo, para aplicar a conversão: \n\n 1 - Parsec(pc)\n 2 - Unidade astronômica(AU)\n 3 - Quilômetros(km):\n");

/*

    1 l.y = 0.306601pc
    1 l.y = 63241.1 AU
    1 l.y = 9.5 * 10^12 => Math.pow(10,12)

*/

let opcaoSelecionada;
let dist_convertida;

switch (opcaoConversao) {
    case "1":
        opcaoSelecionada = " Parsec(pc)";
        dist_convertida = dist_anos_luz * 0.306601;
        // alert("O valor da conversão é: " + dist_convertida + opcaoSelecionada);
        break;
    case "2":
        opcaoSelecionada = " Unidade astronônima(AU)";
        dist_convertida = dist_anos_luz * 63241.1;
        // alert("O valor da conversão é: " + dist_convertida + opcaoSelecionada);
        break;
    case "3":
        opcaoSelecionada = " Quilômetros(km)";
        dist_convertida = dist_anos_luz * (9.5 * Math.pow(10,12));
        // alert("O valor da conversão é: " + dist_convertida + opcaoSelecionada);
        break;
    default:
        opcaoSelecionada = " Unidade não identificada";
        dist_convertida = " Conversão fora do escopo.";
}


alert(" A distância em ano luz: " + dist_anos_luz + "\n A distância em" + opcaoSelecionada + ": " + dist_convertida)