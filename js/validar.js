function validar(){
	var nombre, pais, correo, comentario, expresion;
	nombre = document.getElementById("textnombre").value;
	pais= document.getElementById("selectbasic").value;
	correo= document.getElementById("Correo").value;
	comentario= document.getElementById("textcontenido").value;
	
	if(nombre ==="" || pais === "" || correo === "" || comentario ===""){
		alert("Hay un campo vacio");
		return false;
		}
}