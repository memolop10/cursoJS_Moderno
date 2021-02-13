const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',validarForm);

function validarForm(e){
    //e.preventDefault();
    console.log('Buscando ...');

    console.log(e.target.method);

}