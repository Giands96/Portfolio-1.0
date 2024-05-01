

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


/* DESLIZAMIENTO PORTFOLIO*/

/* VENTANA MODAL*/
window.onload = () => {
    const btnCerrarModal = document.querySelector('#cerrar-modal')
    const modal = document.querySelector('#modal')
    modal.showModal();


    btnCerrarModal.addEventListener('click', () => {
        modal.style.transition = "transform 1s ease";
        modal.style.transform = "translateY(-1000px)";

        modal.addEventListener('transitionend', () => {
            modal.close();
        });
    });

}

