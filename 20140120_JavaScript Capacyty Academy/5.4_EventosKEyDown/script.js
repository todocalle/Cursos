document.onkeydown=keyHit;

var fotoMostrada=0;
function keyHit(evt)
{
	var arrImagenes=new Array("imagenes/joaquinfrancisco1.jpg","imagenes/joaquinfrancisco2.jpg","imagenes/joaquinfrancisco3.jpg","imagenes/joaquinfrancisco4.jpg","imagenes/joaquinfrancisco5.jpg","imagenes/joaquinfrancisco6.jpg","imagenes/joaquinfrancisco7.jpg");	
	var counterImg=arrImagenes.length-1;
	var flechaDer=39;
	var flechaIzq=37;
	var teclaPresionada;

	if(evt)
	{
		teclaPresionada=evt.which;
	}
	else
	{
		teclaPresionada=window.event.keyCode;
	}

	if (teclaPresionada==flechaIzq)
	{
		cambiarSlide(-1);
	}
	else
	{
		if (teclaPresionada=flechaDer)
		{
			cambiarSlide(1);
		}
	}
	return false;

	function cambiarSlide(ruta)
	{
		fotoMostrada =fotoMostrada+ruta;
		if (fotoMostrada>counterImg)
		{
			fotoMostrada=0;
		}
		if(fotoMostrada<0)
		{
			fotoMostrada=counterImg;
		}
		document.getElementById("myPicture").src=arrImagenes[fotoMostrada];
	}
}