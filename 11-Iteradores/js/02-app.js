// for (let i = 0; i <= 10; i++) {
//         if (i === 5) {
//             console.log('Cinco');
//             continue;
//         }
//         console.log(`Numero: ${i}`)
//     }
    
const carrito = [
    { nombre:'Monitor 27 pulgadas', precio: 400 },
    { nombre:'Television', precio:100, descuento:true},
    { nombre:'Audifonos',precio:600, descuento:true },
    { nombre:'Celular',precio:450}
]

for(let i = 0; i < carrito.length; i++){
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}