function calcIMC () {
    var altura = parseInt(document.getElementById("altura").value);
    var peso = parseInt(document.getElementById("peso").value);
    var res = altura * altura / peso;

    document.getElementById("resultado").innerHTML = res;
}