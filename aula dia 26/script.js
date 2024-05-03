let contador = 0;
let res = document.querySelector('section#cliques');

function contar(){
    contador ++;
    res.innerHTML =`<p>${contador}</p>`;
}

function zerar() {
    contador = 0;
    res.innerHTML=null;
}