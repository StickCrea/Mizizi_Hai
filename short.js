// Seleccionar elementos
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Agregar evento de clic al menú hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
