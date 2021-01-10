const producto = {
    nombre : "Monitor 20 pulgadas",
    precio :300,
    disponible :true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`); 
    }//this busca la referencia dentro del objeto
}

producto.mostrarInfo();