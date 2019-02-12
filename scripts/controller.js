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
			$('#nav-logo').removeClass('shrunk');
			$('#nav-logo').addClass('enlarged');
		} else {
			$('#nav-logo').removeClass('enlarged');
			$('#nav-logo').addClass('shrunk');
		}
    });
});