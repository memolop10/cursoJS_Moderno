
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

//lista los elementos hasta los espacios en blanco
// console.log(navegacion.childNodes);
//te listara los elementos reales   
// console.log(navegacion.children);


// console.log(navegacion.children[1].nodeName);//A
// tipo 1 Element_node
// console.log(navegacion.children[1].nodeType);//1

const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'Hola Nuevo Content';

// card.children[0].src = 'img/hacer2.jpg';
// console.log(card.children[0]);

//Traversing de hijo a padre

// console.log(card.parentNode);
// console.log(card.parentElement);

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:last-child');
// console.log(ultimoCard.previousElementSibling);