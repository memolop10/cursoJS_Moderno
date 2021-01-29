const usuario = true;
const puedePagar = false;

if(usuario && puedePagar){
    console.log('Si puedes comprar')
}else if(!usuario && !puedePagar){
        console.log('No no puedes Pagar')
}else if(!usuario){
    console.log('Inicia Sesion o saca una cuenta')
}else if(!puedePagar){
    console.log('Saldo insuficiente')
}