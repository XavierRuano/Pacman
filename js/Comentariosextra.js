function init (){
document.getElementById("btncomentar").onclick = function (){
crear_comentario ();
limpiar ();
//contar_comentarios ();
}
}

function limpiar (){
document.getElementById("textnombre").value="";
document.getElementById("selectbasic").value="";
document.getElementById("textcontenido").value="";
document.getElementById("correo").value="";
}

function crear_comentario (){
var contenedor = document.getElementById("Comentarios");
var nombre = document.getElementById("textnombre").value;
var  tipo = document.getElementById("selectbasic").value;
var correo = document.getElementById("correo").value;
var mensaje = document.getElementById("textcontenido").value;
var f = new Date ();
var fecha = f.getDate () + "/" +(f.getMonth()+1) + "/" + f.getFullYear ();
//creamos primer div
var comentario = document.createElement("div");
comentario.setAttribute ("class","panel panel-default");

var panel = document.createElement ("div");
panel.setAttribute("class","panel-body");

var contenidopanel = document.createTextNode (nombre);

var contenido2 = document.createTextNode (mensaje);

var fcorreo = document.createElement("div");

fcorreo.setAttribute("style","float:right; margin:-20px auto; display: inline-block;");

var vercorreo = document.createTextNode (correo);
fcorreo.appendChild(vercorreo);

var fnegrita = document.createElement("div");

fnegrita.setAttribute("style","float:right;");

var verfecha = document.createTextNode(fecha);

fnegrita.appendChild (verfecha);

var ftipo=document.createElement("div");
ftipo.setAttribute("style","float:left; margin:-20px auto; display: inline-block;");

var vertipo = document.createTextNode (tipo);
ftipo.appendChild(vertipo);

var texto1 = document.createElement("div");
texto1.setAttribute("class","panel-footer");

panel.appendChild(contenidopanel);
panel.appendChild(fnegrita);
panel.appendChild(ftipo);
panel.appendChild(fcorreo);

texto1.appendChild(contenido2);

comentario.appendChild(panel);
comentario.appendChild(texto1);


//ejercicio1
//ejercicio2

document.getElementById("Comentarios").appendChild(comentario);
}
window.onload = function () {
document.formularioContacto.nombre.focus();
document.formularioContacto.addEventListener('submit', validarFormulario);
}
 
function validarFormulario(evObject) {
evObject.preventDefault();
var todoCorrecto = true;
var formulario = document.formularioContacto;
for (var i=0; i<formulario.length; i++) {
                if(formulario[i].type =='text') {
                               if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
                               alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
                               todoCorrecto=false;
                               }
                }
                }
}
window.onload = init;
