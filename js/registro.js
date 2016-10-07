window.onload = function () {
document.formularioContacto.nombre.focus();
document.formularioContacto.addEventListener('button', validarFormulario);
}
 
function validarFormulario(evObject) {
evObject.preventDefault();
var todoCorrecto = true;
var formulario = document.formularioContacto;
if (isNaN(formulario.edad.value)==true || /^[1-9]\d$/.test(formulario.edad.value)==false ) {alert ('Edad no valida'); todoCorrecto=false;}
if (isNaN(formulario.altura.value)==true || formulario.altura.value<=0 || formulario.altura.value>=2.50) {
alert ('Altura no valida'); todoCorrecto=false;}
if (todoCorrecto ==true) {formulario.submit();}
}