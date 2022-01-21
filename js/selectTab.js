var i, tabsContent, tabBtns;
tabsContent = document.getElementsByClassName("tabs-content");
minHeight = Math.max(tabsContent)
for (i = 0; i < tabsContent.length; i++) {
	tabsContent[i].style.minHeight = minHeight;
}


function selectTab(evt, tabName) {
	for (i = 0; i < tabsContent.length; i++) {
		tabsContent[i].style.display = "none";
	}
	
	tabBtns = document.getElementsByClassName("tab-btn")
	for (i = 0; i < tabBtns.length; i++) {
		tabBtns[i].className = tabBtns[i].className.replace(" is-active", "");
	}
	
	document.getElementById(tabName).style.display = "inline";
	evt.currentTarget.className += " is-active";
}