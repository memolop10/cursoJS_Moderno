
const enlace = document.createElement('A');
//agregando texto
enlace.textContent = 'Nuevo Enlace';

//añadiendo href
enlace.href = '/nuevo-enlace';

enlace.target = "_blank";

console.log(enlace);
