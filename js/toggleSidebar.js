function toggleSidebar() {
	var sideBars = document.getElementsByClassName("l-fixed-sidebar");
	for (i = 0; i < sideBars.length; i++) {
		if (sideBars[i].classList.contains("is-responsive")) {
			sideBars[i].classList.remove("is-responsive");
		} else {
			sideBars[i].className += " is-responsive";
		}
	}
}