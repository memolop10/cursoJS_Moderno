//Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click',eliminarCurso);

    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = [];

       limpiarHTML();
    })
}

//Fuctions
function agregarCurso(e){
    e.preventDefault();
    //Me dice cual fue el elmento clickeado y
    //y sus 2 padres directos
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;//accesa a toda la card
        leerDatosCurso(cursoSeleccionado)
    }
  
}

//Lee el contenido de HTML y extrae la info del curso clickeado
function leerDatosCurso(cursoSeleccionado){

    //Crear un objeto con el contenido del curso actual
    //Curso quye trata de agrgarse
    const infoCurso = {
        imagen: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //REvisa si un elemento ya existe en el carrito
                                            //curso en carrito  //curso que se trata de agregar
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id) {
              curso.cantidad++;
              return curso; //retorna el objeto actualizado
            } else {
               return curso; //retorna los objetos que no son los duplicados
            }
        })
        articulosCarrito = [...cursos];
    } else {
        //Agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];

    }

    console.log(articulosCarrito);
    carritoHTML();  
}

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );
        console.log(articulosCarrito);
        carritoHTML()//Iterar sobre el carrito y mostrar su HTML
    }
}


// Muestra el carrito de compras en el HTML
function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();

    //recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => { 
        const {imagen,titulo,precio,cantidad, id} = curso
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> <img src="${imagen}" width="100" ></td>
        <td>
           ${titulo}
        </td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

function limpiarHTML(){
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

