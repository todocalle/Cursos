window.onload = inicializar;

function inicializar() {
	var todosLinks = document.getElementsByTagName("a");
	
	for (var i=0; i<todosLinks.length; i++) {
		if (todosLinks[i].className.indexOf("menuLink") > -1) {
			todosLinks[i].onclick = toggleMenu;
		}
	}
}

function toggleMenu() {
	var startMenu = this.href.lastIndexOf("/")+1;
	var stopMenu = this.href.lastIndexOf(".");
	var nombreMenu = this.href.substring(startMenu,stopMenu);

	var miMenu = document.getElementById(nombreMenu).style;
	if (miMenu.display == "block")  {
		miMenu.display = "none";
	}
	else {
		miMenu.display = "block";
	}

	return false;
}