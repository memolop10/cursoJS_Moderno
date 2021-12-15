const producto = 'Monitor 20 pulgadas';

// console.log(producto);
// console.log(producto.replace('pulgadas','"'));
// console.log(producto.replace('Monitor','Monitor Curvo'));

//.slice para cortar
console.log(producto.slice(0,10));
// console.log(producto.slice(8));
// console.log(producto.slice(2,1));//no retornara nada, si el primer numero es mayor


//Alternativa a slice
// console.log(producto.substring(0,10));
// console.log(producto.substring(4,3));//subtring si trata de hacer algo

//Obtener la primera letra del nombre de un usuario
const usuario = 'MEMO';
// console.log(usuario.substring(0,1));
// console.log(usuario.charAt(0));