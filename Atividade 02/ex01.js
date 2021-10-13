/* a) 2 campos de texto (input). Esses campos só podem aceitar números, elas devem ter rótulos (label).
b) Sempre que o usuário digitar um valor, deverá validar se o valor é maior que o valor mínimo que é 2 ou menor que o valor máximo 10.
c) A página HTML deverá ter um botão que deve somar os dois valores digitados.
d) Exibir em uma div a informação da soma dos valores. */

function soma(){  
    let numero1V = document.getElementById("numero1");
    let numero1 = document.getElementById("numero1").value;
    let numero2V = document.getElementById("numero2");
    let numero2 = document.getElementById("numero2").value;
    if(numero1 < 2){
        numero1V.value = 2
        numero1 = 2
    }else if(numero1 > 10){
        numero1V.value = 10
        numero1 = 10
    }else{
        console.log("ok")
    }
    if(numero2 < 2){
        numero2V.value = 2
        numero2 = 2
    }else if(numero2 > 10){
        numero2V.value = 10
        numero2 = 10
    }else{
        console.log("ok")
    }
}
function res(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)
    let resultado = document.getElementById("resultado").innerHTML = numero1 + numero2;
}