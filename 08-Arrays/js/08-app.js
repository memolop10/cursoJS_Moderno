const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponile: true
}

const { nombre } = producto;

console.log(nombre);

//Destructuring con arreglos
const numeros = [10,20,30,40,50];

const [primero, ...segundo] = numeros;

console.log(primero);
console.log(segundo);