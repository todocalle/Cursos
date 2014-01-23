window.onload = inicializar;

var actualImg = 0;
var descTexto = new Array(
	"Probando el Dev Alpha Device con BB10.",
	"Ejecutando mi primer App en BB10.",
	"Tomando un break luego de muchos talleres.",
	"Jugando con los entusiastas.",
	"Figureando en el Porsche Blackberry.",
	"Posando para el poster.",
	"En el bus disponible para el desahogo de shopping.",
	"Compartiendo con la cafetera del evento."
	
)

function inicializar() {
	document.getElementById("imgTexto").innerHTML = descTexto[0];
	document.getElementById("prevLink").onclick = verPrevio;
	document.getElementById("sigteLink").onclick = verSiguiente;
}

function verPrevio() {
	cambiarSlide(-1);
}

function verSiguiente() {
	cambiarSlide(1);
}

function cambiarSlide(direccion) {
	var imgCt = descTexto.length;

	actualImg = actualImg + direccion;
	if (actualImg < 0) {
		actualImg = imgCt-1;
	}
	if (actualImg == imgCt) {
		actualImg = 0;
	}
	document.getElementById("slideshow").src = "imagenes/jam" + actualImg + ".jpg";
	document.getElementById("imgTexto").innerHTML = descTexto[actualImg];
}
