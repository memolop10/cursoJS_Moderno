
const enlace = document.createElement('A');
//agregando texto
enlace.textContent = 'Nuevo Enlace';

//añadiendo href
enlace.href = '/nuevo-enlace';

enlace.setAttribute('data-enlace','nuevo-enlace');
enlace.classList.add('alguna-clase');

enlace.target = "_blank";

console.log(enlace);

//Seleccionar la navegacion
const navagecion = document.querySelector('.navegacion');
// navagecion.appendChild(enlace);

navagecion.insertBefore(enlace,navagecion.children[1]);

//Crear un card de forma dinamica
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria' , 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Baby Metal';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//Crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);


