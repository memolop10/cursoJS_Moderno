const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// let total =0;

// carrito.forEach(producto => total += producto.precio );
// console.log(total);

//reduce  //total valor anterior en el cual se acumulara todo
let resultado = carrito.reduce((total, producto) => 
total + producto.precio , 0);//0 valor en el que inicia
console.log(resultado);