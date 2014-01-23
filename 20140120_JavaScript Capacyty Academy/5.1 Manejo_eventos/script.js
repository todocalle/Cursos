cargar(inicio1);
cargar(inicio2);
cargar(inicio3);

function cargar(nuevaFuncion)
{
	var anterior=window.onload;

	if(typeof anterior =="function")
	{
		window.onload=function()
		{
			if(anterior)
			{
				anterior();
			}
			nuevaFuncion();
		}
	}
	else
	{
		window.onload=nuevaFuncion;
	}
}

function inicio1()
{
	document.getElementById("pageBody").style.backgroundColor =  "#0000FF";
	//document.getElementById("pageBody").style.backgroundColor =  "#0000FF";
	
}

function inicio2()
{
	document.getElementById("pageBody").style.color="#FF0000";
}

function inicio3()
{
	var todoslostags=document.getElementsByTagName("*");
	for (var i = 0; i < todoslostags.length; i++) 
	{
		if(todoslostags[i].nodeName=="H1")
		{
			todoslostags[i].style.border="10px red solid";
			todoslostags[i].style.padding="30px";
			todoslostags[i].style.backgroundColor="#FFFFFF";
		}
	}
}