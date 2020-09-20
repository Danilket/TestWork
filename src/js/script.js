@@include('jquery-3.5.1.min.js');
@@include('jquery.ddslick.min.js');

$(document).ready(function () {

	$('.header-top__icon').click(function (event) {
		$(this).toggleClass('active');
		$('.header-top__nav').toggleClass('active')
		if ($(this).hasClass('active')) {
			$('body').data('scroll', $(window).scrollTop());
		}
		$('body').toggleClass('lock');
		if (!$(this).hasClass('active')) {
			$('body,html').scrollTop(parseInt($('body').data('scroll')));
		}
	});


})
