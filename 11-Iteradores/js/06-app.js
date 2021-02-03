
//forEach

const pendientes = ['Tarea','Comer','Estudiar Javascript'];

pendientes.forEach((pendiente) => {
    console.log(pendiente);
})


const carrito = [
    {nombre:'Monitor 27 Pulgadas', precio: 500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet',precio:200},
    {nombre:'Audifonos',precio:300},
    {nombre:'Teclado',precio:400},
    {nombre:'Celular',precio:700}
]

//no crea nuevo arreglo
const nuevoArreglo = carrito.forEach(
    producto => producto.nombre);

//map si crea un nuevo arreglo
const nuevoArreglo2 = carrito.map(
    producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);