window.onload=iniciarImagenes;
function iniciarImagenes()
{
	for (var i = 0; i <document.images.length; i++) 
	{
		document.images[i].ondblclick=nuevaVentana;
	}
}

function nuevaVentana ()
{
	var nombreImg="imagenes/"+ this.id+".jpg";
	var ventanaImg=window.open(nombreImg, "Ventana Imagen", "width=320, height=380, scrollbars=no");
}
