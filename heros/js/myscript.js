function mudarFrase() {
    var elemento = gebi("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "white";
    elemento.innerHTML = "<img src=\'img/gatos.jpg\' />"
}
function trocarTexto(){
    var elemento = gebi("frase")
    var nova = gebi("novaFrase").value
    elemento.innerHTML = nova
}

function gebi(id){
    return document.getElementById(id)
}
