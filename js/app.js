let navbarHeight;

// check if window is below threshold of navbar-expand-md (767px)
function checkWidth() {
	// toggle between nav heights depending on if navbar is deployed or not
	if ($(window).width() <= 767) {
		navbarHeight = -176;
		$(".anchor").css("top", "-176px");
	} else {
		navbarHeight = -57;
		$(".anchor").css("top", "-57px");
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
		})
	} else {
		$("body").css({
			"padding-top": "57px",
			"transition": "0.35s ease"
		})
	}
});

$(window).on("scroll", animateOnScroll);

// function for text animation to be triggered by scrolling
function animateOnScroll() {

	// set variable for top of user's view within window object
    let scrolled = $(window).scrollTop();

    $(".run-animation").each(function () {

        let offsetTop = $(this).offset().top;

    	if (scrolled + navbarHeight > offsetTop) {

        	if ($(this).data("timeout")) {
        		window.setTimeout(function(){
            		$(this).addClass("animated " + $(this).data("animation"));
        		}, parseInt($(this).data("timeout"), 10));
        	} else {
        		$(this).addClass("animated " + $(this).data("animation"));
        	}

    	}
    });
}

