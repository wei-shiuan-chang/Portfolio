$(document).ready(function(){

	

	// close hamburger menu after click a
	$( '.menuList li a' ).on("click", function(){
	  $('#hcheck').click();
	});

	var typed = new Typed(".typed", {

		strings: ["Luck favors ^1000 the prepared.^2000", "Love pain, ^1000 love gain.^2000", "Work hard, ^1000 play harder.^2000"],
		typeSpeed: 60,
		loop: true,
		startDelay: 3000,
		showCursor: false,
		

	});

	var typed = new Typed(".typed-ct", {

		strings: ["Work hard, play harder!"],
		typeSpeed: 60,
		loop: true,
		startDelay: 1000,
		showCursor: false,
		

	});

	

});

