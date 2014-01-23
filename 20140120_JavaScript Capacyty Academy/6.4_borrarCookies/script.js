window.onload = borrarCookies;

function borrarCookies() {
	var cookieCounter =0;
	if(document.cookie != "" && confirm("Desea eliminar estos cookies?"))
	{
		var miCookie = document.cookie.split("; ");
		cookieCounter = miCookie.length;
		
		var fechaExpiracion = new Date();
		fechaExpiracion.setDate(fechaExpiracion.getDate() -1);
		
		for(var i=0; i<cookieCounter;i++)
		{
			var nombreCookie = miCookie[i].split("=")[0];
			document.cookie = nombreCookie + "=;path=/;expires="+ fechaExpiracion.toGMTString();
		
		}
	}
	document.getElementById("cookieData").innerHTML = "Numero de cookies borrados: " + cookieCounter;

}
