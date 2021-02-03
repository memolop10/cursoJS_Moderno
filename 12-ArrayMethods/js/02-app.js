const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes,i) => {
    if (mes === 'Abril') {
        console.log(`Encontrado en el indice ${i}`)
    }
})

//encontrar el indice de Abril
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);

//encontar indice en el objeto
//findIndex extrae la primera coincidencia
const indiceObj = carrito.findIndex( producto => producto.nombre === 'Teclado');
console.log(indiceObj);