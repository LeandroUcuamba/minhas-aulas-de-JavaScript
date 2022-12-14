



function ativarContagem(){
   // document.getElementById("tempo").innerHTML = "Começou a contagem!!!";
   tempo = setInterval(function(){ //esta variavel é para fazer parar o tempo;
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) - 1;

        if(soma === 0){
            document.getElementById("tempo").innerHTML = "tempo esgotado!";
            pararContagem();
        }else{
            document.getElementById("tempo").innerHTML = soma;
        }

    }, 1000);
}

function pararContagem(){
    clearInterval(tempo);
}