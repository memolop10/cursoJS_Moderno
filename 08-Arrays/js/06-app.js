//const carrito = [];

//definir un producto
const producto = {
    nombre:"Monitor",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 8000
}

const producto3 = {
    nombre: 'Teclado',
    precio: 480
}

//forma declarativa
// let resultado = [...carrito,producto];
//     resultado = [...resultado,producto2];
//     resultado = [producto3, ...resultado];

// console.table(resultado);


const word = 'Hello';
const letters = [...word];
console.log(letters);

const mainCharacters = ['Zelda','Link','Ganon'];
const allCharacters = ['Navy',...mainCharacters,'Saria','Deku tree'];

console.log(allCharacters);

greetFullName = (name, lastName) =>{ 
    return `Hello ${name} ${lastName}`;
}

const args = ['Memo','Lopez'];
console.log(greetFullName(...args));

                    //REst operator
massGreeter = (greet, ...names) =>{
   return names.map(name => `${greet}! ${name}`);
}
                                                       //Spred operator                     
console.log(massGreeter('Hello','Memo','Luke','Lalito',...allCharacters));