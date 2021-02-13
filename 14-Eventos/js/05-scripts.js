window.addEventListener('scroll', () =>{

    const premium = document.querySelector('.premium');
    //me dice a que distancia se en cuentras el elemento
    const ubicacion = premium.getBoundingClientRect();

    const btn = document.querySelector('.btn-mi-viaje');
    if (ubicacion.top > 500) {
        console.log('El elemento ya es visible');
        btn.style.color = 'blue'
    } else {
        console.log('Aun no es visible');
        btn.style.color = 'black'
    } 
});