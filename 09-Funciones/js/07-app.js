iniciarApp();
function iniciarApp(){
    console.log('Iniciando app...');
    segundaFuncion();
}


function segundaFuncion(){
    console.log('desde la segunda Funcion')
    usuarioAutenticado('MEMO');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`)
}