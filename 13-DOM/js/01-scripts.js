let elemento;

elemento = document;
// elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].classList;

elemento = document.links;
//te retorna las clases de ese elemento en un DOMTokenList
elemento = document.links[4].classList;
//te retorna las clases de ese elemento como string
elemento = document.links[4].className;



console.log(elemento)