const carrito = [
    { nombre:'Monitor 27 pulgadas', precio: 400 },
    { nombre:'Television', precio:100},
    { nombre:'Audifonos',precio:600 },
    { nombre:'Celular',precio:450}
]





// for(let i = 0; i < carrito.length; i++){
//     console.log(`${carrito[i].nombre} - precio ${carrito[i].precio}`);
// }


carrito.forEach( function(producto){
    console.log(`${producto.nombre} - precio ${producto.precio}`)
})