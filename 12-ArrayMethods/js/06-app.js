const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//con .every se tiene que cumplir la 
//condicion en todos los elementos
const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado);

//con .some por lo menos 1
const resultado2 = carrito.some(producto => producto.precio > 800);
console.log(resultado2);