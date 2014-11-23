$(document).ready(function() {

	var lang = window.navigator.language || window.navigator.userLanguage;

	var rus = lang.match('ru');
	if (rus) {
		$('p.web').text('ВЕБ');
		$('p.web').attr('data-glitch','ВЕБ');
		$('p.terror').text('ТЕРРОР');
		$('p.terror').attr('data-glitch', 'ТЕРРОР');
		$('.main-view-wtlabel').text('ВЕБ ТЕРРОР');
		$('.main-view-contacts .phone').text('+7 909 6952723');
	}

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