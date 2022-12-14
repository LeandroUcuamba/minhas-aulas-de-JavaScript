
for(let i=0; i<=30; i++){
   document.getElementById("teste").innerHTML += i + ", ";
}


for(let i=1900; i<=2022; i++){
    document.getElementById("ano").innerHTML += "<option value=' " + i + " '>" +i+"</option>";
 }

for(let i=2022; i>=1900; i--){
   document.getElementById("ano1").innerHTML += "<option value=' " + i + " '>" +i+"</option>";
}

//Agora não é pratico o ano ser estatico, mas sim deve ser dinâmico!

var ano = new Date().getFullYear();

for(let i=ano; i>=1900; i--){
   document.getElementById("ano2").innerHTML += "<option value=' " + i + " '>" +i+"</option>";
}

//Agora vamos ver exemplo do laço em Array;

const carros=["Lexus", "Kia", "Hyunday", "Toyota", "Jetour"];

var tamanho = carros.length;

for(var i=0; i<tamanho; i++){
   document.getElementById("test").innerHTML += carros[i]+","
}