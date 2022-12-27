
/* DOM */

/* Capturar nodos por nombre de etiqueta */
const buttonByTagName = document.getElementsByTagName('button');

/* Capturar nodos por nombre de clase */
const buttonByClassName = document.getElementsByClassName('menu-icon')

/* Capturar nodos por nombre de id ✅*/
const buttonById = document.getElementById('menu-button');

/* Capturar un nodo por una condicion (querySelector) ✅*/
const button = document.querySelector('#menu-button'); // Este es el menú hamburguesa

/* Capturar un nodo combinando selectores (querySelector) ✅*/
const title = document.querySelector('.header__info h1');

/* Capturar varios nodos por una condicion (querySelectorAll) ✅*/
const links = document.querySelectorAll('a');

const menu = document.querySelector('.menu-list');
/* Manipulacion del DOM (nodos) */
console.log(title);

// title.innerText = 'Hola a todos!';
// title.style.color = '#1c1c1c';

// button.style.backgroundColor = '#1c1c1c';
// button.style.transform = ' scale(1.2)';


/* __Eventos__ */

// nodo.addEventListener( "nombreDelEvento", function )

button.addEventListener( 'click', (e)=>{
    console.log('Click en el boton', e);
    console.log(menu.classList);
    menu.classList.toggle('menu-list--active');
})

