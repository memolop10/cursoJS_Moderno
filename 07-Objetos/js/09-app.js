"use strict";

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio :300,
    disponible :true,
}

//Con seal no se puede agregar ni eliminar propiedades de un objecto
//pero si se pueden modificar las existentes
Object.seal( producto );

producto.disponible = false;

// delete producto.precio;//no se puede hacer
// producto.imagen = "imagen.jpg";

console.log(producto);
console.log(Object.isSealed(producto));