//Declarar Variables
const menuButton= document.querySelector('#menu-button');
const menuList= document.querySelector('.menu-list');

//Declarar Funciones



//Agregar Eventos
menuButton.addEventListener('click', ()=>{
    menuList.classList.toggle('menu-list--active')
})


//Ejecuciones inmediatas*