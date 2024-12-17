

const botonCotizar = document.getElementById ('botonCotizar');
const formulario = document.getElementById ('formularioContacto');




formulario.addEventListener('submit', evento  =>{
        evento.preventDefault();

 const nombre = document.getElementById('nombre').value.trim()
 const email = document.getElementById('inputEmail3').value.trim()
 const mensaje = document.getElementById('mensaje')
 const errorNombre = document.getElementById('errorNombre')
 const errorMail = document.getElementById('errorMail')
 const errorMensaje = document.getElementById('errorMensaje')


 let formularioValido = true;

if (nombre === ""){
    errorNombre.classList.remove('d-none')
    formularioValido = false
}   else{
    errorNombre.classList.add('d-none')
}

const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

if (!emailRegex.test(email)){
    errorMail.classList.remove('d-none')
    formularioValido = false
}
else{
    errorMail.classList.add('d-none')
}

if (mensaje.value.trim() === "") {
    errorMensaje.classList.remove('d-none')
    formularioValido = false
}   else{
    errorMensaje.classList.add('d-none')
}

if (formularioValido){
    alert ("Formulario enviado exitosamente");
}
})
