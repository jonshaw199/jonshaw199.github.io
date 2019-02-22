$(document).ready(function(){
	
	$('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	// Add slideUp animation to Bootstrap dropdown when collapsing.
	$('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});
});

$(function () {
    $(document).on('scroll', function () {
		if ($(this).scrollTop() == 0) {
			$('#nav-logo, #nav-logo-wide').removeClass('shrunk-logo');
			$('#nav-logo, #nav-logo-wide').addClass('enlarged-logo');
			$('nav.navbar').addClass('no-transition');
			$('nav').removeClass('opaque-nav');			
			$('nav').addClass('solid-nav');
			$('nav.navbar').removeClass('no-transition');
		} else {
			$('#nav-logo, #nav-logo-wide').removeClass('enlarged-logo');
			$('#nav-logo, #nav-logo-wide').addClass('shrunk-logo');
			$('nav').removeClass('solid-nav');
			$('nav').addClass('opaque-nav');
		}
    });
	
});