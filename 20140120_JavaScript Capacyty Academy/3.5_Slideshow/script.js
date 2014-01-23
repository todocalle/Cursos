window.onload=iniciar;
var mImagenes=new Array("imagenes/joaquinfrancisco1.jpg","imagenes/joaquinfrancisco2.jpg","imagenes/joaquinfrancisco3.jpg","imagenes/joaquinfrancisco4.jpg","imagenes/joaquinfrancisco5.jpg","imagenes/joaquinfrancisco6.jpg","imagenes/joaquinfrancisco7.jpg");
var imgActual=0;

function iniciar () 
{
	imgAleatoria=Math.floor((Math.random()* mImagenes.length));
	document.getElementById("img").src=mImagenes[imgAleatoria];
document.getElementById("prevLink").onclick=irPrevio;
document.getElementById("sgteLink").onclick=irSigte;
}

function irPrevio()
{
	if(imgActual==0)
	{
		imgActual=mImagenes.length;
	}
	imgActual--;
	document.getElementById("img").src=mImagenes[imgActual];
	return false;
}
function irSigte()
{
	imgActual++;
	if(imgActual==mImagenes.length)
	{
		imgActual=0;
	}
	document.getElementById("img").src=mImagenes[imgActual];
	return false;
}