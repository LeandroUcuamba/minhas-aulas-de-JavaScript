function eventoClique(){
    alert("acionou um evento de clique");
    document.body.style.backgroundColor = "yellow";
}

function eventoCliqueDuplo(){
    alert("acionou um evento de clique duplo");
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red ";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

/*
function adicionaTexto(){
    let p = document.getElementById("teste");
    p.append("O mouse moveu<br>");
} */

function limpaTexto(){
    document.getElementById("campoTexto").value="";
}

function mudou(){
    alert("mudou");
}

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);

}