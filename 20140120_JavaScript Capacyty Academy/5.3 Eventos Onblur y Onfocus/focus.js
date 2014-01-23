window.onload=iniciarFormulario;

function iniciarFormulario()
{
	var todotags=document.getElementsByTagName("*");
	for(var i=0; todotags.length; i++)
	{
		if (todotags[i].readOnly)
		{
			todotags[i].onfocus=saltarCampo;
		}
	}
}

function saltarCampo()
{
	this.blur();
}