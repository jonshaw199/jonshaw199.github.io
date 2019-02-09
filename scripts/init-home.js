$(document).ready(function(){
	window.addEventListener('scroll', loseFocus());
	$('.smooth').on('click', function() {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top - $('#nav').height()
			}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			});
		} // End if
	});
	var flipCards = document.querySelectorAll(".flip-card");

	for (var i = 0; i < flipCards.length; i++) {
		flipCards[i].addEventListener('click', function() {
			//this.style.webkitTransform = 'rotate('+180+'deg)'; 
			//this.style.mozTransform    = 'rotate('+180+'deg)'; 
			//this.style.msTransform     = 'rotate('+180+'deg)'; 
			//this.style.oTransform      = 'rotate('+180+'deg)'; 
			//this.style.transform       = 'rotate('+180+'deg)';
			$(this).toggleClass("hovered");
		}, false);
	}
});

function loseFocus() {
	$('.hovered').blur();
}