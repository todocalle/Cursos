window.onload = mostrarDias;

function mostrarDias() {
	var todosTags = document.getElementsByTagName("*");
	
	for (var i=0;i<todosTags.length; i++) {
		if (todosTags[i].className.indexOf("diasFaltantes") > -1) {
			todosTags[i].innerHTML = mostrarDiasHasta(todosTags[i].id);
		}
	}
	
	function mostrarDiasHasta(fecha) {
		var losDias;
		
		switch(fecha) {
			case "aniversario":
				losDias = diasFaltantes(10,7);
				break;
			case "cumple":
				losDias = diasFaltantes(9,10);
				break;
			case "navidad":
				losDias = diasFaltantes(12,25);
				break;
			default:
		}
		return losDias + " ";
	}

	function diasFaltantes(mm,dd) {
		var ahora = new Date();
		var iDate = new Date(ahora.getFullYear(),mm-1,dd);

		if (iDate.getTime() < ahora.getTime()) {
			iDate.setYear(ahora.getFullYear()+1);
		}

		return (Math.ceil(diasResta(iDate) - diasResta(ahora)));
	}

	function diasResta(iTime) {
		return (iTime.getTime() / (1000 * 60 * 60 * 24));
	}
}
