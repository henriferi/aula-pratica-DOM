/* 2)      Criar página HTML e JS para que o usuário digite nome e idade em um formulário:
a)       Usar o evento onchange para transformar o nome digitado em maiúsculo.
b)      Exibir o nome em maiúsculo na tela.
c)       Usar o evento onchange para somar a idade com 10.
d)      Exibir a mensagem Daqui a 10 anos você terá ___ anos na tela.
Obs.: Onde tem ____ , você deverá colocar o valor da idade mais 10. */

function nomeF(){
    let nome = document.getElementById("nome").value;
    nome = nome.toUpperCase()
    let titulo = document.getElementById("nomePessoa").innerHTML = nome;
}
function idadeF(){
    let idade = document.getElementById("idade").value;
    idade = parseInt(idade);
    let paragrafo = document.getElementById("texto").innerHTML = "Daqui a 10 anos você terá "+ (idade + 10) +" anos"
}