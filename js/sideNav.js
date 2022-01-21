var primaryNav, opaqueOverlay;
primaryNav = document.getElementsByClassName("nav--primary")[0];
opaqueOverlay = document.getElementsByClassName("opaque-overlay")[0];

function openNav() {
	primaryNav.className += " is-responsive";
	opaqueOverlay.style.display = "block";
	opaqueOverlay.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	primaryNav.classList.remove("is-responsive");
	opaqueOverlay.style.display = "None";
	opaqueOverlay.style.display = "white";
}

