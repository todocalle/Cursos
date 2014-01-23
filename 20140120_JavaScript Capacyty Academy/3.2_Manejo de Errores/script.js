window.onload=divicion;
function raiz () 
{
	var resultado=prompt("Introduzca un numero entero", "");
	
	try
	{
		if(resultado <0 || isNaN(resultado) || !resultado)
		{
			throw new Error("Este es un muemro incorrecto");
		}
		alert("La raiz del numero: "+resultado+" es igual a : " +Math.sqrt(resultado));
		// body...
	}
	catch(msgError)
	{
		alert(msgError.message);
	}
}

function divicion()
{
	var res1=prompt("Introdusca dividendo", "");
	var res2=prompt("Introdusca divisor", "");
	//alert(res1/res2);
	try
	{

		if (isNaN(res1) || isNaN(res2) || !res1|| !res2|| res2 ==0)
		{
			throw new Error("Alguno de los numeros esta incorrecto!");
		}
		
		var total=res1/res2;
		alert(total);
	}
	catch (errMg)
	{
		alert(errMg.massage);
	}

}