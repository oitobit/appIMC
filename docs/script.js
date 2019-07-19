function calcIMC () {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var quadrado = altura * altura;
    var calcular = peso / (quadrado);

    if (calcular <= 18) {
        document.getElementById("resultado").innerHTML = Math.round(calcular) + "<br>" + " IMC Abaixo do peso";
    }
    else if (calcular >= 18 && calcular <= 25) {
        document.getElementById("resultado").innerHTML = Math.round(calcular) + "<br>" + " IMC normal";
    }
    else if (calcular >= 25 && calcular <= 29 ) {
        document.getElementById("resultado").innerHTML = Math.round(calcular) + "<br>" + " IMC sobrepeso";
    }
    else if (calcular >= 30 && calcular <= 34) {
        document.getElementById("resultado").innerHTML = Math.round(calcular) + "<br>" + " IMC Obesidade grau 1";
    }
    else if (calcular >= 35 && calcular <= 39) {
        document.getElementById("resultado").innerHTML = Math.round(calcular) + "<br>" + " IMC Obesidade grau 2";
    }
    else if (calcular >= 40) {
        document.getElementById("resultado").innerHTML = Math.round(calcular) + "<br>" + " IMC Obesidade grau 3";
    }
}
