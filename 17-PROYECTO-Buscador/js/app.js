const resultado = document.querySelector('#resultado');

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAuto();    
})

function mostrarAuto(){
    autos.forEach(auto => {
        const {  marca, modelo, year, puertas,transmision,precio,color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent =`
         ${marca} - ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}
        `;

        //Insertar en el html
        resultado.appendChild(autoHTML);
    })
}