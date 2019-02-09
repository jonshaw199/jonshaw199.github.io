$(document).ready(function(){
	var folder = "images";

	$.ajax({
		url : folder,
		success: function (data) {
			$(data).find("a").attr("href", function (i, val) {
				if( val.match(/\.(jpe?g|png|gif)$/) ) { 
					$("#tile-grid").append( "<div class=\"grid-item\"><img src='"+ folder + val + "'></div>" );
				} 
			});
		}
	});
	
	var $grid = $('.grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
		// options
		  itemSelector: '.grid-item',
		  columnWidth: 200,
		  fitWidth: true
	  });
	});
});