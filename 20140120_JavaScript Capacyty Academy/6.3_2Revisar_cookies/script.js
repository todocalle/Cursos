window.onload=mostrarCookies;

function mostrarCookies ()
 {
 	var outMsg="No hay cookies";
	if (document.cookie != "")
	{
		outMsg="No hay cookies";
	}
	else
	{
		var miCookie=document.cookie.split("; ");
		for (var i =0; i <miCookie; i++) 
		{
			outMsg+="Nombre del Cookie es '"+miCookie[i].split("=")[0];
			outMsg+="' , y el valor es '"+miCookie[i].split("=")[i]+"'<br />";
		}
	}
	document.getElementById("cookieData").innerHTML=outMsg;
}