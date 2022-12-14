/*  Maior parte dos operadores funcionam como nas outras linguagens */

var valor1, valor2, total;

valor1 = 8;
valor2 = "8";

total1 = (valor1==valor2); //saída: true ou false;
/* Na instrução acima é verdadeiro, porque ele não liga o tipo mas a escrita */

total = (valor1===valor2) // já aqui a saida será falsa;

alert(total);

/////////////////////////////////////////////////////////////////////////////

var idade, eleitor;
idade = 17;
eleitor = (idae < 18)? "Nao, é eleitor":"Sim, é eleitor";
alert("A resposta é:" + eleitor + "a idade dela é: " + idade);