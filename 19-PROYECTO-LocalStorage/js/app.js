//variables
const formulario = document.querySelector('#formulario');
const listatweets = document.querySelector('#lista-tweets');

let tweets = [];

//Event Listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit',agregarTweet);
}

//Funciones

 function agregarTweet(e){
     e.preventDefault()

     console.log('agregar Tweet');
 }