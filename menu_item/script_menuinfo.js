var comando = localStorage.getItem("comando")
var titulo = localStorage.getItem("titulo")
var explicacao = localStorage.getItem('explicacao')
var exemplo = localStorage.getItem('exemplo')

let cabeca = document.querySelector('div.cabeca');
let corpo = document.querySelector('div.corpo')

let textotitulo = document.querySelector('h1.nome')
let textocomando = document.querySelector('p.comando') 
let textoexplicacao = document.querySelector('p.explicacao')
let textoexemplo = document.querySelector("p.exemplo")

function init(){
    textotitulo.innerHTML = titulo
    textocomando.innerHTML = comando
    textoexplicacao.innerHTML = explicacao
    textoexemplo.innerHTML = exemplo + '<br><br>'

    
}   
init()