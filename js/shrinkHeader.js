window.onscroll = function () {shrinkHeader()};
var header, headerHeight, logo, main;
header = document.getElementById("header")
main = document.getElementById("main")
logo = document.getElementsByClassName("logo")[0];
headerHeight = header.offsetHeight.toString();
//main.style.paddingTop = headerHeight + "px"; // Hardcoding padding for fixed header fixes
											   // issue with uneeded padding on mobile.

function shrinkHeader() {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		logo.classList.add("shrinks-on-scroll");
	} else {
		logo.classList.remove("shrinks-on-scroll");
	}
	
	var headerHeight = header.offsetHeight.toString();	
}