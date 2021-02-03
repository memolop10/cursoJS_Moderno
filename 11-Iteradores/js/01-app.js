// for (let i = 0; i <= 10; i++) {
//     console.log(`Numero: ${i}`)
// }

// for (let i = 1; i <= 20; i++) {
//     if( i % 2 === 0 ){
//         console.log( `El numero ${i} es PAR`);
//     }else{
//         console.log(`El numero ${i} es Impar`)
//     }
// }

const carrito = [
    { nombre:'Monitor 27 pulgadas', precio: 400 },
    { nombre:'Television', precio:100},
    { nombre:'Audifonos',precio:600 },
    { nombre:'Celular',precio:450}
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}