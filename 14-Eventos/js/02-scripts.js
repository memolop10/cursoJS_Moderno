const nav = document.querySelector('.navegacion');

//Registrar Evento
// nav.addEventListener('click', () => {
//     console.log('click en nav')
// })

nav.addEventListener('mouseup', () => {
    console.log('Entrando en nav');
    nav.style.backgroundColor = 'white' 
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo en nav');
    nav.style.backgroundColor = 'transparent' 
})

// mousedown - similar a click
//click
//dblclick - doble click
//mouseuo - cuando sueltas el mouse