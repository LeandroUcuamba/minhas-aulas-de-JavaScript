
const carro = {
   marca: "Fiat",
   modelo: "Uno",
   ano: 2001
};

let texto = JSON.stringify(carro); // converte o objecto para texto;

document.getElementById("area").innerHTML = texto;

let obj = JSON.parse(texto); // converte o texto para objecto;

console.log(obj.modelo);