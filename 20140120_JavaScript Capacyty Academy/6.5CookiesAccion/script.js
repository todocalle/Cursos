window.onload = inicio;

function inicio() {
	var ahora = new Date();
	var ultimaVisita = new Date(cookieValor("visitaPagina"));
	var fechaExpiracion = new Date();
	fechaExpiracion.setMonth(fechaExpiracion.getMonth()+6);

	document.cookie = "visitaPagina=" + ahora + ";path=/;expires=" + fechaExpiracion.toGMTString();
	var todosLibros = document.getElementsByTagName("p");

	for (var i=0; i<todosLibros.length; i++) {
		if (todosLibros[i].id.indexOf("New-") != -1) {
			verNovedades(todosLibros[i],todosLibros[i].id.substring(4));
		}
	}

	function verNovedades(verLibro,dtString) {

		var yyyy = parseInt(dtString.substring(0,4),10);
		var mm = parseInt(dtString.substring(4,6),10);
		var dd = parseInt(dtString.substring(6,8),10);
		var ultimaFecha = new Date(yyyy,mm-1,dd);

		if (ultimaFecha.getTime() > ultimaVisita.getTime()) {
			if (verLibro.className == "") {
				verLibro.className = "nuevaImg";
			}
			else {
				verLibro.className =  "nuevaImg " + verLibro.className;
			}
		}
	}
}

function cookieValor(nombreCookie) {
	var miCookie = document.cookie.split("; ");

	for (var i=0; i<miCookie.length; i++) {
		if (nombreCookie == miCookie[i].split("=")[0]) {
			return miCookie[i].split("=")[1];
		}
	}
	return "1 January 1970";
}
