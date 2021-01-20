const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponile: true
}

const { nombre,precio } = producto;

console.log(nombre,precio);

//Destructuring con arreglos
const numeros = [10,20,30,40,50];

const [primero,segundo, ...tercero] = numeros;

console.log(primero);
console.log(segundo);
console.log(tercero);