window.onload = inicializar;

function inicializar() {
	var todosLinks = document.getElementsByTagName("a");
	
	for (var i=0; i<todosLinks.length; i++) {
		if (todosLinks[i].className.indexOf("menuLink") > -1) {
			todosLinks[i].onclick = retFalse;
			todosLinks[i].onmouseover = toggleMenu;
		}
	}
}

function toggleMenu() {
	var startMenu = this.href.lastIndexOf("/")+1;
	var stopMenu = this.href.lastIndexOf(".");
	var nombreMenu = this.href.substring(startMenu,stopMenu);

	document.getElementById(nombreMenu).style.display = "block";

	this.parentNode.className = nombreMenu;
	this.parentNode.onmouseout = toggleDivOff;
	this.parentNode.onmouseover = toggleDivOn;	
}

function toggleDivOn() {
	document.getElementById(this.className).style.display = "block";
}

function toggleDivOff() {
	document.getElementById(this.className).style.display = "none";
}

function retFalse() {
	return false;
}