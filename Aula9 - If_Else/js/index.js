var hora = new Date().getHours;

if(hora < 12){
   alert("Bom dia");
}else if(hora < 18){
   alert("Boa tarde");
}else{
   alert("Boa noite");
}

// verifica se o campo esta vazio;
// se: estiver vazio exibe um texto de cor "vermelho";
// senão: exibe um texto de cor "verde";
function verificar(){
   let nome = document.getElementById("nome").value;

   if(nome == "" || nome == null){
      let p = document.getElementById("teste");
      p.innerHTML = "O campo não pode estar vazio!";
      p.style.color = "red";
   }else{
      let p = document.getElementById("teste");
      p.innerHTML = "Parabens pelo conteudo!";
      p.style.color = "green";
   }

}