var rus;
var works = [ 
	{ 
		label : 'TVOYKOSMOS',
		background_url : '/images/tk_preview.jpg',
		url : 'http://tvoykosmos.ru',
		size : 1
	}, 
	{
		label : 'CASTMAG',
		background_url : '/images/castmag_preview.jpg',
		url : 'http://castmag.ru',
		size : 2
	},
	{
		label : 'HAIR-REPAIR',
		background_url : '/images/hr_preview.jpg',
		url : 'http://hair-repair.ru',
		size : 1
	}, 
	{ 
		label : 'IPKINO',
		background_url : '/images/ipk_preview.jpg',
		url : 'http://ipkino.ru',
		size : 1
	}, 
	{ 
		label : 'BLOCK2BLOCK',
		background_url : '/images/b2b_preview.jpg',
		url : 'https://itunes.apple.com/us/app/block2block/id939837863?ls=1&mt=8',
		size : 1
	}
],
	worksArray = [];

$(document).ready(function() {

	var lang = window.navigator.language || window.navigator.userLanguage;

	rus = lang.match('ru');
	if (rus) {
		$('p.web').text('ВЕБ');
		$('p.web').attr('data-glitch','ВЕБ');
		$('p.terror').text('ТЕРРОР');
		$('p.terror').attr('data-glitch', 'ТЕРРОР');
		$('.main-view-wtlabel').text('ВЕБ ТЕРРОР');
	}

	$('.title').animate({
		opacity : 1
	}, 3000);
	
	setTimeout(function() {

		$('body').off('click', '.title');
		$('.error-screen').css({
			display : 'block'
		});
		makeRects(200, 300);
		startGlitching(40, 40);
		screenOff();
	}, 2500);

	$('body').on('click', '.back', function() {
		hideWorks();	
	})

	$('body').on('click', '.works', function() {
		try {
			window.yaCounter27477693.reachGoal('works');
		} catch(e) {
			console.log('again yandex api error.')
		}
		// console.log('works pressed')
		// segue controller
		var headerSegue = document.createElement('DIV');
		var bodySegues = []; stripesN = 10;
		for (var i=0;i < stripesN;i++) {
			bodySegues[i] = document.createElement('DIV');
			$(bodySegues[i]).css({
				left : i * 10 + '%',
				// + 1 because of overlap bug
				width : i == (stripesN - 1) ? '10%' : stripesN + 1 + '%'
			});
			$('body').append(bodySegues[i]);

			(function(i) {
				$(bodySegues[i])
					.addClass('bodySegue')
					.delay(i * 60)
					.animate({
						height : '100%'
					}, 300);
			})(i);
		}

		var wtLogoAndBack = document.createElement('SPAN');
		var wt = document.createElement('P');
		var back = document.createElement('P');
		wtText = rus ? 'ВЕБ ТЕРРОР' : 'WEB TERROR';
		$(wt).text(wtText).css({
			opacity : 0,
			'font-size' : '35px',
			'line-height': '40px'
		});
		backText = rus ? 'Вернуться' : 'Back'
		$(back).text(backText).addClass('back').css({
			opacity : 0,
			'font-size' : '15px',
			'line-height' : '20px',
			'padding-top' : '5px',
			'cursor' : 'pointer'
		});
		$(wtLogoAndBack).addClass('wtLogoAndBack');
		$(headerSegue).addClass('headerSegue').delay(300).animate({
			height: '100px',
			'line-height' : '100px'
		}, 600);
		
		setTimeout(function() {
			$(wt).animate({
				opacity : 1
			}, 400);
			$(back).animate({
				opacity : 1
			}, 700);
			makeWorks();
		}, 800);

		$('body').append(headerSegue);
		$(headerSegue).append(wtLogoAndBack);
		$(wtLogoAndBack).append(wt);
		$(wtLogoAndBack).append(back);
	})

	makeWorks = function() {
		var worksCanvas = document.createElement('DIV');
		$(worksCanvas).addClass('worksCanvas').css({
			'padding-top' : '100px'
		});
		$('body').append(worksCanvas);
		
		for (i in works) {
				worksArray[i] = document.createElement('DIV');
				$(worksArray[i]).addClass('eachWork').css({
					'background-image' : 'url( ' + works[i].background_url + ' )',
					// width : works[i].size == 1 ? '50%' : '100%',
					width : '100%',
					// height : works[i].size == 1 ? '350px' : '500px',
					height : '550px',
					// 'line-height' : works[i].size == 1 ? '350px' : '500px'
					'line-height' : '550px'
				});

				var fader = document.createElement('DIV');
				$(fader).addClass('fader');

				var label = document.createElement('SPAN');
				$(label).text(works[i].label);

				$(worksArray[i]).append(fader);
				$(fader).append(label);
				$(worksCanvas).append(worksArray[i]);
			(function(i) {
				$(worksArray[i]).delay(200*i).animate({
					opacity : 1
				}, 400);
				$(worksArray[i]).bind('click', function() {
					window.open(works[i].url, '_blank');
				});
			})(i);
		}
	}

	hideWorks = function() {
		$('.eachWork').each(function(n, el) {
			(function(i) {
				$(el).animate({
					opacity : 0
				}, i * 200, function() {
					$(el).remove();
					$('.worksCanvas').remove();
				});
			})(n);
			$('.bodySegue').each(function(n, el) {
				(function(i) {
					$(el).delay(i*60).animate({
						height : 0
					}, 300, function() {
						$(el).remove();
					});
				})(n);
			});
			$('.headerSegue').animate({
				height : 0
			}, 300, function() {
				$('.headerSegue').remove();
			});
		});
	}
});