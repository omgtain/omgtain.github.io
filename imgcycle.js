$(document).ready(function() {
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	 
	$("#image_list a").click(function(evt) {
		// swap image
		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);
				

	    evt.preventDefault();  
	});
	
	$("li:first-child a:first-child").focus();
}); 