

class Carro{

    constructor(valor1,valor2,valor3){
       this.marca = valor1;
       this.modelo = valor2;
       this.ano = valor3;
    }

    buzina(){
        return this.modelo + "Bizinou: Biiiiiiiiiiiiii";
    }
}


const uno = new Carro("Fiat","Uno",2001);
const gol = new Carro("volkswagen","gol",2013);
console.log(gol);
gol.ano = 2014;
console.log(gol);