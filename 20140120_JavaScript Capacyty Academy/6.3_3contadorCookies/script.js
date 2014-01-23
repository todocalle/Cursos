window.onload = initPage;

function initPage() {
	var fecha = new Date();
	fecha.setMonth(fecha.getMonth()+6);

	var hitCt = parseInt(cookieVal("pageHit"));
	hitCt++;

	document.cookie = "pageHit=" + hitCt + ";path=/;expires=" + fecha.toGMTString();
	document.getElementById("pageHits").innerHTML = "Ha visitado esta pagina " + hitCt + " veces.";
}

function cookieVal(Nombrecookie) {
	var miCookie = document.cookie.split("; ");

	for (var i=0; i<miCookie.length; i++) {
		if (Nombrecookie == miCookie[i].split("=")[0]) {
			return miCookie[i].split("=")[1];
		}
	}
	return 0;
}
