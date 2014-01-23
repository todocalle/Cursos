window.onload=setNombre;

function setNombre ()
 {
	if (document.cookie != "")
	{
		document.getElementById("nombre").innerHTML="Saludos, " + document.cookie.split("=")[1];
	}
}