
//Constructors
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {

    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break        

        case '2':
            cantidad = base * 1.05;
            break 

        case '3':
            cantidad = base * 1.35;
            break 
        default:
            break;
    }

    //Leer el año
    const diferencia = new Date().getFullYear() - this.year;
    //Cada año que la diferencia es mayor, el costo va a disminuir un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;


    /*
        Si el seguro es basico se multiplicara por 30% mas
        Si el seguro es completo se multiplicara por 50% mas
    */
   if (this.tipo === 'basico') {
       cantidad += 1.30
   } else {
       cantidad += 1.50
   }

   return cantidad;
}

function UI() {}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
        min = max - 20;
    
    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option)
    }
}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if( tipo === 'error' ){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (total,seguro) => {

    const {marca, year, tipo} = seguro;

    let tipoMarca;
    switch (marca) {
        case '1':
            tipoMarca = 'Americano'
            break;
        case '2':
            tipoMarca = 'Asiatico'
            break;
        case '3':
            tipoMarca = 'Europeo'
            break;
        default:
            break;
    }

    //Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">TU RESUMEN</p>
        <p class="font-bold"> <span class="font-normal"> Marca: </span> ${ tipoMarca }  </p>
        <p class="font-bold"> <span class="font-normal"> Año: </span> ${ year }  </p>
        <p class="font-bold"> <span class="font-normal"> Tipo: </span> ${ tipo }  </p>
        <p class="font-bold"> <span class="font-normal"> Total: </span> $${ total }  </p>
    `;

    const divResultado = document.querySelector('#resultado');

    //Mostrar Spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; //se borra el spinner
        divResultado.appendChild( div ); // se muestra el resultado
    }, 3000);
}

//Instanciar UI
const ui = new UI()

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();// llena el select con los años
})


eventListeners()
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();
    //Leer la marca selecionada
    const marca = document.querySelector('#marca').value;

    //Leer año selecionado
    const year = document.querySelector('#year').value;
    
     //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === '' ){
        ui.mostrarMensaje('Todos los campos son obligatorios','error')
    }else{
        ui.mostrarMensaje('Cotizando','correcto')
    }

    //Ocultar las cotizaciones
    const resultados = document.querySelector('#resultado div');
    if ( resultados ) {
        resultados.remove();
    }


    //Instanciar seguro
    const seguro = new Seguro(marca, year, tipo)
    const total = seguro.cotizarSeguro();

    //utilizar el prototype que va a cotizar
    ui.mostrarResultado(total,seguro);

}

