//Object literal
const producto = {
    nombre : "Monitor 20 pulgadas",
    precio :300,
    disponible :true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`); 
    }
}

//Object Producto

function Producto(nombre, precio, disponible = true){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor 24 pulgadas', 500, false);
console.log(producto2);

const producto3 = new Producto('Television', 450);
console.log(producto3);