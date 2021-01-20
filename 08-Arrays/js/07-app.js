const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);



//Veamos como Eliminar elementos de un arreglo... 
//con un objeto solo se utiliza delete,
//los arreglos también son sencillos de manipular

// Eliminar el primer elemento...
// carrito.shift();

// Eliminar el ultimo elemento...
//carrito.pop();

//agarra el elmento en posicion 1 y elimina un elemento
carrito.splice(1,2);

console.table(carrito);