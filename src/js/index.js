/*
objetivo n1- usuario clicar no botao de ver o traleir, devemos abrir a modal com o video
    passo1- dar um jeito de pegar o elemento que representa o botão na tela usando o js
    passo2- dar um jeito de identificar  quando o usuario clicar no botão
    passo3- dar um jeito de pegar o elemento da modal no js
    passo4- abrir a modal na tela
objtv n2- qnd usuario clicar no X, devemos fechra a modal

        -passo1 - dar um jeito de pegar o elemnto de fechar modal usando o js
        -passo2- dar um jeito de identificar quando o user clicar no X
        -passo3- fechar a modal
 */

        console.log('mostrar o document' ,document);

        console.log(document.querySelector(".botao-trailer"));

const botaoTrailer =  document.querySelector(".botao-trailer");
const botaoFecharModal =document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.scr;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click",() => {  
  alternarModal();
  video.setAttribute("scr", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})

