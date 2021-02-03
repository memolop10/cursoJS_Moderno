// Fizz buzz - 100

//multiplos de 3 ... fizz
//multiplos de 5 ... buzz
//multiplos de 5 y 3 ... FIZZBUZZ

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} FIZZBUZZ`)  
    }else if (i % 3 === 0) {
        console.log(`${i} fizz`);
    }else if(i % 5 === 0){
        console.log(`${i} buzz`);
    }else{
        console.log(`${i} no es multiplo de 3 ni de 5`)
    }
}