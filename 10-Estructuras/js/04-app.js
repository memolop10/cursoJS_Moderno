
const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque =false;
//se ejecuta la prime condicion que se cumpla
//Las demas no se ejecutaran
if (dinero >= totalAPagar) {
    console.log('Si podemos pagar')
}else if(cheque){
    console.log('Si tengo un cheque')
}else if(tarjeta){
    console.log('Si podemos pagar por que tengo la tarjeta')
} else {
    console.log('No podemos pagar')
}