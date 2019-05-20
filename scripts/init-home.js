$(document).ready(function(){
	var smoothScrollButtons = document.querySelectorAll(".smooth");
	
	for (var i = 0; i < smoothScrollButtons.length; i++) {
		smoothScrollButtons[i].addEventListener('click', function(event) {
			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;
				
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
				});
			} // End if
		});
	}
	
	var flipCards = document.querySelectorAll(".flip-card");
	var cancelEvent = false;

	for (var i = 0; i < flipCards.length; i++) {
		flipCards[i].addEventListener("click", clickFlip);
	}
	for (var i = 0; i < flipCards.length; i++) {
		//flipCards[i].addEventListener('mouseover', hoverFlip);
	}
	/*
    $(document).on('scroll', function () {
		inView.is(document.querySelector('#first-card'));
		$('#first-card').toggleClass("hovered");
	});
	*/
});

var flipEventCancelled = false;

function hoverFlip() {
	//console.log(event.toString);
	//event.preventDefault();
	if (! flipEventCancelled) {
		var flipCards = document.querySelectorAll(".flip-card");
		for (var i = 0; i < flipCards.length; i++) {
			flipCards[i].removeEventListener("click", clickFlip);
		}
		flipEventCancelled = true;
	}
	$(this).toggleClass("hovered");
}

function clickFlip() {
	//console.log(event.toString);
	//event.preventDefault();
	if (! flipEventCancelled) {
		var flipCards = document.querySelectorAll(".flip-card");
		for (var i = 0; i < flipCards.length; i++) {
			flipCards[i].removeEventListener("hover", hoverFlip);
		}
		flipEventCancelled = true;
	}
	$(this).toggleClass("hovered");
}

function flip() {
	$(this).toggleClass("hovered");
}