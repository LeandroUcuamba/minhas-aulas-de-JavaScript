
function buscarCEP(){
    let input = document.getElementById("cep").Value;
}

  const ajax = new XMLHttpRequest();
  ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
  ajax.send();

  ajax.onload = function(){
     document.getElementById("texto").innerHTML = this.responseText;
  };