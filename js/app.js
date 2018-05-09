// check if window is below threshold of navbar-expand-md (767px)
function checkWidth () {
	// toggle between nav heights depending on if navbar is deployed or not
	if ($(window).width() <= 767) {
		$(".anchor").css("top", "-176px");
	} else {
		$(".anchor").css("top", "-57px");
	}
}
checkWidth();

// check width again if window is resized
$(window).on("resize", () => {
	checkWidth();
});