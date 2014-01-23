window.onload=iniciaFormulario;

function iniciaFormulario () 
{
	// body...
	for(var i=0; i<document.forms.length; i++)
	{
		document.forms[i].onsubmit=function(){return validaFormulario();}
	}
	document.getElementById("personal").onclick=personasSet;
}	

function validaFormulario()
{
	var todoOK= true;
	var totalTags=document.getElementsByTagName("*");
	for(var i=0; i<totalTags.length; i++)
	{
		if(!validarTag(totalTags[i]))
		{
			todoOK=false;
		}
	}
	return todoOK;
	
	function validarTag(actualTag)
	{
		var sobreClase="";
		var totalClases=actualTag.className.split(" ");

		for (var j = 0; j < totalClases.length; j++) 
		{
			sobreClase+=validarTipoClase(totalClases[j])+" ";
		}

		actualTag.className=sobreClase;
		
		if(sobreClase.indexOf("invalido")>-1)
		{
			invalidoLabel(actualTag.parentNode);
			actualTag.focus();
			if (actualTag.nodeName=="INPUT") 
			{
				actualTag.select();
			}
			return false;
		}
		return true;

		function validarTipoClase(actualClase)
		{
			var claseRetorno="";
			switch (actualClase)
			{
				case "":
				case "invalido":
					break;
				case "req":
				if (todoOK && actualTag.value=="") 
				{
					claseRetorno="invalido";
				}
				claseRetorno+=actualClase;
					break;
				case "radio":
				if (todoOK && !radioElejido(actualTag.name)) 
					{
						claseRetorno+=actualClase;
					}
					break;


				default:
				if (todoOK && !crossCheck(actualTag,actualClase)) 
				{
					claseRetorno="invalido";
				}
					claseRetorno += actualClase;
			}
			return claseRetorno;
		}

		function crossCheck(tag,campoID)
		{
			if (!document.getElementById(campoID)) 
			{
				return false;
			}
			return (tag.value==document.getElementById(campoID).value);
		}

		function radioElejido(radioNombre)
		{
			var radioSet="";
			for (var k = 0; k <document.forms.length; k++) 
			{
				if (!radioSet) 
				{
				radioSet=document.forms[k][radioNombre];
				}
			}

			if (!radioSet)return false;
			for (var k = 0; k < radioSet.length; k++) 
			{
				if (radioSet[k].checked) 
				{
					return true;
				}
			}
			return false;
		}

		function validaEmail(email)
		{
			var charsInvalido=" /:,:";
			if (email=="") 
			{
				return false;
			}
			for (var k =0; k<charsInvalido.length;k++) 
			{
				var charMalo=charsInvalido.charAt(k);
				if(email.indexOf(charMalo)>-1)
				{
					return false;
				}
			}

			var atPos=email.indexOf("@",1);
			if(atPos==-1)
			{
				return false;
			}
			if(email.indexOf("@",atPos+1)!= -1)
			{
				return false;
			}
			var puntosPos=email.indexOf(".", atPos);
			if(puntosPos==-1)
			{
				return false;
			}
			if(puntosPos+3> email.length)
			{
				return false;
			}
			return true;
		}

		function invalidoLabel(parentTag)
		{
			if (parentTag,nodeName=="LABEL")
			{
				parentTag.className+="invalido";
			}
		}

	}
	
}

function personasSet()
{
	if(this.checked)
	{
		document.getElementById("dosPersonas").checked=true;
	}
}