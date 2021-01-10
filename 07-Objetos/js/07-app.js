const producto = {
    nombre : "Monitor 20 pulgadas",
    precio :300,
    disponible :true,
}

//Esto dara error
// const nombreProducto = 'Monitor';
// nombreProducto = 'Tablet';

producto.disponible = false;

delete producto.precio;

console.log(producto);