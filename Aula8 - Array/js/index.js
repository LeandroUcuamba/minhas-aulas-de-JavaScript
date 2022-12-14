
/* 
Dentro de um array para alem de variaveis eu posso ter 'objecto' e função.
*/

const listaDeCompra = ["arroz", "feijao", "macarrão", "leite"];

//ou também podemos construir assim:

const lista = [];
lista[0] = "arroz";
lista[1] = "feijao";
lista[2] = "macarrão";
lista[3] = "leite";

//ou também podemos construir assim:

const listaDeCompra1 = new Array("arroz", "feijao", "macarrão", "leite");

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const pessoa = ["Leandro","Ucuamba",23];

alert(pessoa[pessoa.length - 1]); //apresenta um alert com o valor da ultima posição: 30;

pessoa.push("brasileiro"); // este metodo adicionará "brasileiro" na ultima posição;
console.log(pessoa);

Array.isArray(pessoa); //a saída é: true ou false;
alert(Array.isArray(pessoa));

document.getElementById("texto").innerHTML=pessoa;
document.getElementById("texto").innerHTML=pessoa.join(" * "); // ele adiciona este caracter separando os elementos;

////////////////////////////////////////////////////

/*
  delete pessoa[0]; -> remove a primeira posição, mas não muda a posição
  aquela passa a ser indefinida "undefined"! 
*/
// pessoa.pop(); -> remove o ultimo do array;
// pessoa.push("Ucuamba") -> adiciona Ucuamba na ultima posição do array.
// pessoa.shift(); -> remove o primeiro do array;
// pessoa.unshift("Ucuamba"); -> adiciona Ucuamba na primeira posição do array;
// pessoa.splice(1,0,"item add1","item add2"); -> 1->posição, 0->não apagar o elemento que esta na pos 1;

////////////////////////////////////////////////////////////////////////////

const lista1 = ["Arroz", "Feijão", "leite", "macarrão"];
const lista2 = ["suco", "refrigerante", "carne"];

const superLista = lista1.concat(lista2);
// saída: ["Arroz", "Feijão", "leite", "macarrão", "suco", "refrigerante", "carne"];

////////////////////////////////////////////////////////////////

const jogadores = ["Leandro", "João", "José", "Gustavo", "Oliver"];
const craques = jogadores.slice(2); //saída: Gustavo, Oliver;
const craques1 = jogadores.sort(); //saída: em ordem alfabetica;
const craques2 = jogadores.reverse; // é o contrario;

//////////////////////////////////////////////////////////////////

const numeros = [40, 100, 1, 5, 25, 10];
numeros.sort(); // saída: 1,10,100,25,40,5

//para ordener os numeros:
numeros.sort(function(a,b){ return a - b }); //saída: 1,5,10,25,40,100

//para desordenar os numeros:
numeros.sort(function(a,b){ return b - a }); //saída: 100,40,25,10,5,1

function maiorNumero(array){
    return Math.max.apply(null, array);
}

function menorNumero(array){
    return Math.min.apply(null, array);
}

///////////////////////////////////////////////////////////

const maior20 = numeros.filter(filtragem);

alert(maior20);

function filtragem(value, index, array){
    return value>20;
}