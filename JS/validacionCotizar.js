

const botonCotizar = document.getElementById ('botonCotizar');
const formulario = document.getElementById ('formularioCotizar');




formulario.addEventListener('submit', evento  =>{
        evento.preventDefault();
 const operacion1 = document.getElementById('gridRadios1')
 const operacion2 = document.getElementById('gridRadios2')
 const ubicacion = document.getElementById('specificSizeSelect1').value
 const propiedad = document.getElementById('specificSizeSelect2').value
 const nombre = document.getElementById('nombre').value.trim()
 const email = document.getElementById('inputEmail3').value.trim()
 
 const errorOperacion = document.getElementById('errorOperacion')
 const errorUbicacion = document.getElementById('errorUbicacion')
 const errorPropiedad = document.getElementById('errorPropiedades')
 const errorNombre = document.getElementById('errorNombre')
 const errorMail = document.getElementById('errorMail')
 

 
 let formularioValido = true;
/*
 if (operacion1.checked || operacion2.checked){
     formularioValido = true
}   else{
    errorOperacion.classList.remove('d-none')
    formularioValido = false
}
*/
const $seleccion = document.formulari.gridRadios.value

if($seleccion !==''){
    formularioValido = true
}   else{
    errorOperacion.classList.remove('d-none')
    formularioValido = false
}


if (ubicacion === 'Ubicacion...'){
    errorUbicacion.classList.remove('d-none')
    formularioValido = false
}   else{
    errorUbicacion.classList.add('d-none')
}

if (propiedad === 'Tipo de propiedad...'){
    errorPropiedad.classList.remove('d-none')
    formularioValido = false
}   else{
    errorPropiedad.classList.add('d-none')
}

if (nombre === ''){
    errorNombre.classList.remove('d-none')
    formularioValido = false
}   else{
    errorNombre.classList.add('d-none')
}

const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

if (!emailRegex.test(email)){
    
    errorMail.classList.remove('d-none')
    formularioValido = false
}else{
    errorMail.classList.add('d-none')
}

if (formularioValido){
    alert ("Formulario enviado exitosamente");
}
    
})