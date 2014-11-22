$(document).ready(function() {

	$('.wrapper').animate({
		opacity : 1
	}, 3000);

	// $('body').on('click', '.title', function() {
	setTimeout(function() {

	// })
		$('body').off('click', '.title');
		$('.error-screen').css({
			display : 'block'
		})
		makeRects(200, 300);
		startGlitching(40, 40);
		screenOff();
	}, 2500);
})