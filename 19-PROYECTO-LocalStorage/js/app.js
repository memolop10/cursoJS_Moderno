//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

//Event Listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit',agregarTweet);
}

//Funciones

 function agregarTweet(e){
     e.preventDefault()

    //Text area donde el usuario escribe 
     const tweet = document.querySelector('#tweet').value;
     
     //validacion
     if (tweet === '') {
         mostrarError('no puede ir vacio')
         return;// evita que se ejecuten mas lineas de codigo
     }

     const tweetObj = {
         id: Date.now(),
         tweet
     }

    //Agregando al arreglo de tweets
    tweets = [...tweets, tweetObj];
  
    //Crea HTML
    crearHTML()

    //Reiniciar el formulario
    formulario.reset();
 }

 //Mostrar mensaje de error
 function mostrarError(error) {
     const mensajeError = document.createElement('p');
     mensajeError.textContent = error;
     mensajeError.classList.add('error');

     //Insertar en contenido
     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeError);

     //Elimina el mensaje de Error despues de 4 segundos
     setTimeout(() => {
        mensajeError.remove();
     },4000);
 }

 //Muestra Listado de los Tweets
function crearHTML() {

    limpiarHTML()

    if (tweets.length > 0) {
        tweets.forEach( tweetEl => {
            //Crear HTML
            const li = document.createElement('li');

            //Añadir texto
            li.textContent = tweetEl.tweet;

            //Insertarlo en el HTML
            listaTweets.appendChild(li);
        })
    }
} 

//limpia el HTML
function limpiarHTML(){
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}