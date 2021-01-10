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

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio: 480
}

carrito.unshift(producto3);

console.table(carrito);