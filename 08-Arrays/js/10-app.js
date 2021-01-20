const carrito = [
    { nombre:'Monitor 27 pulgadas', precio: 400 },
    { nombre:'Television', precio:100},
    { nombre:'Audifonos',precio:600 },
    { nombre:'Celular',precio:450}
]

//MAP crea un nuevo array
const nuevoArray = carrito.map( function(producto){
    return`${producto.nombre} - precio ${producto.precio}`
});

//ForEach no te crea un nuevo array
const nuevoArray2 = carrito.forEach( function(producto){
  return`${producto.nombre} - precio ${producto.precio}`
});

console.log(nuevoArray);

console.log(nuevoArray2);