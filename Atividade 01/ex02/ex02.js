/* 2)      Criar página HTML e JS  para que quando o usuário entrar na página:
a)       Exibir na tela a tabuada de 9.
b)      Criar função e usar o evento onload. */

function tabuada(){
    let tab = [];
    let paragrafos = document.getElementsByTagName("p");
    for(let n = 1; n <= 10; n++){
        tab.push(n*9)
        for(let i = 0; i < paragrafos.length; i++){
            paragrafos[i].innerHTML = tab[i]
        }
    }
}