

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



/*SLIDER */
const images = ["url('images/img1.png')", "url('images/img2.png')", "url('images/img3.png')"];
let currentSlide = 0;


function afterSlide() {

    currentSlide = (currentSlide + 1) % images.length;
    cargarSlide();
}

function beforeSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    cargarSlide();
}

function cargarSlide() {
    const slider = document.querySelector('.slider');
    const contentBox = document.querySelector('.content-box');

    const textos = document.querySelectorAll('.content-box > div');
    textos.forEach(text => {
        text.style.display = 'none';
    });

    const currentText = document.querySelector(`.text-${currentSlide + 1}`);
    currentText.style.display = 'block';



    slider.style.opacity = 0;
    setTimeout(() => {
        slider.style.backgroundImage = images[currentSlide];
        slider.style.opacity = 1;
    }, 500);
}

cargarSlide();

/* EASTER */

function msgEaster(event) {
    event.preventDefault();
    const cv = document.getElementById('cv');
    alert('Oops! Este apartado está en proceso, inténtalo más tarde ;)');
}
