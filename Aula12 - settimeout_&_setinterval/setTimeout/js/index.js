
function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contagem!!!";
    tempo = setTimeout(function(){ //esta variavel é para passar no parametro abaixo;
        document.getElementById("tempo").innerHTML = "Executou o setTimeout...";
        document.body.style.background = "red";
    }, 5000);
}

function pararContagem(){
    clearTimeout(tempo);
}