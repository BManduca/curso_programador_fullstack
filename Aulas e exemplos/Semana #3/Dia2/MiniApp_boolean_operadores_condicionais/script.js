let departureDataEntry = prompt("Insira a data da partida(formato DD/MM/YYYY): ");

let departureDate = moment(departureDataEntry, "DD/MM/YYYY");

let today = moment();

//tempo em ms desde que a nave partiu
let dateDiff = today - departureDate;

//escolha do usuário com relação ao tempo de partida
let choosenOption = prompt("Escolha de como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias");

if (choosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000);
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos");
} else if (choosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
    alert("Tempo de vôo: " + minutesOfDeparture + " minutos");
} else if (choosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
    alert("Tempo de vôo: " + hoursOfDeparture + " horas");
} else if (choosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
    alert("Tempo de vôo: " + daysOfDeparture + " dias");
} else {
    alert("Opção inválida!");
}