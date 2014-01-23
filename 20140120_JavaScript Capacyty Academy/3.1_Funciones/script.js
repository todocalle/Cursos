window.onload=plataforma;
function iniciar () 
{
	document.getElementById("redireccionar").onclick=manejarClick;

}
function manejarClick()
{
	alert("Intentando redireccionar a un enlace..");
	return true;
}

function plataforma()
{
	switch (navigator.plataform)
	{
		case "Win64":alert("Su SO es Windows");
		break;

		case "MacIntel":alert("No se soporta su sistema operativo");
		break;

		default:
		alert("Su SO es: " +navigator.plataform+" el cual NO es soportado.");
		break;
	}
}