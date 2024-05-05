/* MODAL CONTACTO*/


var datos = document.getElementById('datos')
const enviar = document.getElementById('send')

datos.style.display = "none"



function mostrarModal() {

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    datos.innerHTML = `<h1>¿Sus datos son correctos?</h1>
            <div class="datos-text">
            <span style="">Nombre: ${nombre}</span>
            <span>Apellido: ${apellido}</span>
            <span>Correo: ${email}</span>
            <span>Teléfono: ${telefono}</span>
            <span>Mensaje: ${mensaje}</span>
            <button id="aceptarBtn">Aceptar</button>
            </div>`;

    if (nombre === "" || apellido === "" || email === "" || telefono === "" || mensaje === "") {
        alert('Completa todos los formularios');
        return;  // Detener la ejecución de la función si algún campo está vacío
    } else {
        datos.style.display = "flex";
    }

    document.getElementById('aceptarBtn').addEventListener('click', function () {
        datos.style.display = "none";
    });




}




