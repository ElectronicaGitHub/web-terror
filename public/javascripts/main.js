$(document).ready(function() {

	$('.wrapper').animate({
		opacity : 1
	}, 3000);

	// var dot_size = '2px',
	// 	animation_time = 1000;
	// var s = skrollr.init();

	// $('body').on('click', '.dot-middle', function() {
	// 	$('.second-scene').addClass('rect-transform')
	// })

	$('body').on('click', '.title', function() {
		console.log('clicked')
		$('body').off('click', '.title');
		$('.error-screen').css({
			display : 'block'
		})
		makeRects(200, 300);
		startGlitching(40, 40);
		screenOff();

	// 	console.log('transition start');
	// 	// делаем чтобы было по центру
	// 	$('.title').animate({
	// 		'height' : dot_size,
	// 		'line-height' : dot_size 
	// 	}, {
	// 		duration : animation_time,
	// 		easing : 'easeInOutBack'
	// 	});
	// 	// уменьшаем надпись
	// 	$('.web, .terror').animate({
	// 		'font-size' : dot_size,
	// 		'line-height' : dot_size
	// 	}, {
	// 		duration : animation_time,
	// 		easing : 'easeInOutBack'
	// 	});
	// 	// выносим сцену на передний план чтоб можно было тыкнуть
	// 	$('.main-scene').addClass('dot-scene-activate');
	// 	// увеличиваем точку
	// 	$('.centrifyer').addClass('dot-big');
	})
})