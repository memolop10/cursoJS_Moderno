const carrito = [];

//definir un producto
const producto = {
    nombre:"Monitor",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 8000
}

const producto3 = {
    nombre: 'Teclado',
    precio: 480
}

//forma declarativa
let resultado = [...carrito,producto];
    resultado = [...resultado,producto2];
    resultado = [producto3, ...resultado];

console.table(resultado);