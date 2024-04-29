

/* FUNCION SCROLL (VER PROYECTOS) */
function scrollDown() {
    window.scrollTo({
        top: window.scrollY + 900,
        behavior: 'smooth'
    });
}

/* LINK PROYECTO HOVER*/

function cambio1(link) {
    link.style.backgroundColor = "#6f6f6f";
    link.style.transition = 'background-color .3s ease'

}

function cambio2(link) {
    link.style.backgroundColor = "#363636";
    link.style.transition = 'background-color .3s ease'

}

/* MOVIMIENTO TARJETAS HABILIDADES */

function movimiento(card) {
    card.style.transform = 'translateY(-30px)';

}

function movimiento2(card) {
    card.style.transform = 'translateY(0px)';

}