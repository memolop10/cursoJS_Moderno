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

    //Text area donde el usuario escribe 
     const tweet = document.querySelector('#tweet').value;
     
     //validacion
     if (tweet === '') {
         mostrarError('no puede ir vacio')
         return;// evita que se ejecuten mas lineas de codigo
     }

     console.log('Agregando tweet')
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