function calcIMC () {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var quadrado = altura * altura;
    var calcular = peso / (quadrado);
    
    document.getElementById("resultado").innerHTML = Math.round(calcular);
}
