const encabezado = document.querySelector('h1');
console.log(encabezado.style);

// encabezado.style.backgroundColor='red';

// encabezado.style.fontFmaily='Arial';

const card = document.querySelector(".card");
card.classList.add('nueva-clase', 'segunda-clase');
console.log(card.classList);