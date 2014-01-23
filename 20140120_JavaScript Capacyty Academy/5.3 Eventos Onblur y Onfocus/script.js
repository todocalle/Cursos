window.onload=inicioFormulario;


function inicioFormulario()
{
	var todoTags=document.getElementsByTagName("*");
	for (var i=0; i<todoTags.length;i++)
	{
		if(todoTags[i].className.indexOf("req")>-1)
		{
			todoTags[i].onblur=revisarCampo;
		}
	}

}

function revisarCampo()
{
	if(this.value== "")
	{
		this.style.backgroundColor= "#FFFF99";
		this.focus();
	}
	else
	{
		this.style.backgroundColor="#FFFFFF";
	}
}