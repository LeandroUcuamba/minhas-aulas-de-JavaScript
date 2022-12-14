/*
Os objectos em javascript são diferentes de como são nas lingugens OO.
Aqui os objectos têm propriedades, e podem ter funções.
EX: Objecto-> Pessoa,  Propriedades-> nome, sexo, idade, etc;
*/

//uma boa pratica e comum, é declarar os objectos como "const".

const carro = {
    marca:"ford", 
    modelo:"ka", 
    ano:2022, 
    placa:"ABC-1234",
    buzina: function(){ alert('Biibiiiiiiiiiii') },
    completo: function(){
       return "A marca é:"+this.marca+"e o modelo é:"+this.modelo;
    }
};

console.log(carro);

console.log(carro.placa); // para apresentar um elemento do objecto;

