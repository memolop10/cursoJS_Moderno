const producto = 'Monitor 20 pulgadas'

// .repeat te va a permitir repetir una cadena de texto
const texto = 'en Promocion '.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split, dividir un string y lo convierte en un array
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split("",12));

const hobbies = 'leer, caminar,escuchar musica,escribir'
console.log(hobbies.split(","));

const tweet = "Aprendiendo Javascript JSModerno#ConMEMO";
console.log(tweet.split("#"));