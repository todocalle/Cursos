window.onload = mostrarHora;

function mostrarHora() {
	var ahora = new Date();

	var lahora = mostrarLasHoras(ahora.getHours()) + mostrarZeroRelleno(ahora.getMinutes()) + mostrarZeroRelleno(ahora.getSeconds()) + mostrarAmPm();
	document.getElementById("mostrarHora").innerHTML = lahora;
	setTimeout("mostrarHora()",1000);
	
	function mostrarLasHoras(hora) {
		if (hora == 0) {
			return 12;
		}
		if (hora < 13) {
			return hora;
		}
		return hora-12;
	}
	
	function mostrarZeroRelleno(minutos) {
		if (minutos > 9) {
			return ":" + minutos;
		}
		return ":0" + minutos;
	}
	
	function mostrarAmPm() {
		if (ahora.getHours() < 12) {
			return " am";
		}
		return " pm";
	}
}
