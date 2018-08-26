AOS.init({
  duration: 1000,
  anchorPlacement: 'center-bottom'
});
$(window).on('load', AOS.refresh);

let navbarHeight;

// check if window is below threshold of navbar-expand-md (767px)
function checkWidth() {
	// toggle between nav heights depending on if navbar is deployed or not
	if ($(window).width() <= 767) {
		navbarHeight = -176 + "px";
		$(".anchor").css("top", navbarHeight);
	} else {
		navbarHeight = -57 + "px";
		$(".anchor").css("top", navbarHeight);
	}
}
checkWidth();

// check width again if window is resized
$(window).on("resize", () => {
	checkWidth();
});

// listen for toggler button in nav being clicked using boolean variable
let navDeployed = false;

$("#toggler").on("click", () => {
	navDeployed = !navDeployed;
	// adjust top of body to compensate for navbar differential
	// transition so it moves at the same speed as navbar
	if (navDeployed) {
		$("body").css({
			"padding-top": "176px",
			"transition": "0.35s ease"
		});
	} else {
		$("body").css({
			"padding-top": "57px",
			"transition": "0.35s ease"
		});
	}
});