

//Comando base para pegar datas;
let data = new Date();
console.log(data);

//Para obter o ano;
let ano = data.getFullYear(); 
console.log(ano);

//Para obter o mes; de 0 a 11 (janeiro ádezembro)
let mes =  data.getMonth(); 
console.log(mes);

//pegar o dia do mes; de 1 até 31
let diaMes = data.getDate();
console.log(diaMes);

//pegar o dia da semana; de 0 até 6
let diaSemana = data.getDay();
console.log(diaSemana);

//pegar hora; de 0 - 23
let hora = data.getHours();

//pegar os minutos; de 0 - 59
let minutos = data.getMinutes();
console.log(minutos);

//pegar os segundos; de 0 até 59
let segundos = data.getSeconds();

