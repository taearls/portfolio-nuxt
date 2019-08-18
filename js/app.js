// init animate on scroll scripts
AOS.init({
  duration: '1400',
  anchorPlacement: 'center-bottom'
});
window.onload = () => {
	AOS.refresh();
};

// check if window is below threshold of navbar-expand-md (767px)
let navbarHeight;
var checkWidth = function() {
	// toggle between nav heights depending on if navbar is deployed or not
	var anchors = document.querySelectorAll(".anchor");
	if (window.outerWidth <= 767) {
		navbarHeight = -176 + "px";	
	} else {
		navbarHeight = -57 + "px";
	}
	for (let i = 0; i < anchors.length; i++) {
		anchors[i].style.top = navbarHeight;
	}
};

// check width again if window is resized
window.addEventListener("resize", () => {
	var anchors = document.querySelectorAll(".anchor");
	if (window.outerWidth <= 767) {
		navbarHeight = -176 + "px";	
	} else {
		navbarHeight = -57 + "px";
	}
	for (let i = 0; i < anchors.length; i++) {
		anchors[i].style.top = navbarHeight;
	}
});

// listen for toggler button in nav being clicked using boolean variable
let navDeployed = false;
document.getElementById("toggler").onclick = () => {
	navDeployed = !navDeployed;
	// adjust top of body to compensate for navbar differential
	// transition so it moves at the same speed as navbar
	if (navDeployed) {
		document.body.style.cssText = `
			padding-top: 176px;
			transition: 0.35s ease;
		`;
	} else {
		document.body.style.cssText = `
			padding-top: 57px;
			transition: 0.35s ease;
		`;
	}
};

(function addCopyright() {
	var copyrightDiv = document.getElementById("copyright");
	var year = new Date().getFullYear();
	copyrightDiv.innerHTML = "&copy; " + year + " Tyler Earls";
}());