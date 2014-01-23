window.onload=setNombre;

function setNombre()
{
	var nombreUsuario="";

	if(document.cookie!= "")
	{
		nombreUsuario=document.cookie.split("=")[1];
	}

	document.getElementById("nombre").value=nombreUsuario;
	document.getElementById("nombre").onblur=setCookie;

}

function setCookie()
{
	var fechaExpiracion=new Date();
	fechaExpiracion.setMonth(fechaExpiracion.getMonth()+10);

	var	nombreUsuario=document.getElementById("nombre").value;
	document.cookie="nombreUsuario="+nombreUsuario+";path=/; expires="+fechaExpiracion.toGMTString();
}