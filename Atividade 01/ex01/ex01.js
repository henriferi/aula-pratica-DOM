/* 1)      Criar página HTML e JS para que quando o usuário entrar na página:
a)       Exibir na tela os nomes de 5 capitais da região Nordeste do Brasil em letras maiúsculas.
b)      Criar função e usar o evento onload. 
*/

function capitais(){
    let cidades = ["Ceará","Bahia","Maceió","Aracaju","Recife"]
    cidades = cidades.join(" ")
    cidades = cidades.toUpperCase()
    cidades = cidades.split(" ")
    let cap = document.getElementsByTagName("p");
    for(let n = 0; n < cap.length; n++){
        cap[n].innerHTML = cidades[n];
    }
} 