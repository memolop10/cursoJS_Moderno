
const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);


//Si en el CSS - visibility:hidden no va a encontrar el elemento
// console.log(encabezado.innerText);
//si lo va a encontrar
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML);//se trae el HTML

// const nuevoHeading = 'Hola MEMO'
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';