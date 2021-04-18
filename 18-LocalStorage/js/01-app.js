localStorage.setItem('nombre',1);

const producto = {
    nombre:"Xbox series x",
    precio: 500
}

const productoString = JSON.stringify( producto );
console.log(productoString)

localStorage.setItem('producto',productoString);