const automovil = {
    model: 'Camaro',
    year: 1969,
    motor: '6.0'
}

// for (let propiedad in automovil) {
//     console.log(`${automovil[propiedad]}`);
// }

for (let [key,value] of Object.entries(automovil)) {
    console.log(key);
    console.log(value);
}