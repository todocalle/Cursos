window.onload=iniciarFecha;

function iniciarFecha()
{
	var dias = new Array("Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado");
	var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
	
	var ahora = new Date();
	var esteMes = ahora.getMonth() + 1;
	
	var dtString = "Hoy es " + dias[ahora.getDay()] + ", y la fecha puede desplegarse asi:<ul><li>";
	dtString += meses[ahora.getMonth()] + " " + ahora.getDate() + ", " + ahora.getFullYear() + "</li><li>";
	dtString += ahora.getDate() + " " + meses[ahora.getMonth()] + " " + ahora.getFullYear() + "</li><li>";
	dtString += esteMes + "-" + ahora.getDate() + "-" + ahora.getFullYear() + "</li><li>";
	dtString += ahora.getDate() + "-" + esteMes + "-" + ahora.getFullYear() + "</li></ul>";

	document.getElementById("campoFecha").innerHTML = dtString;
	
}