//PORTWINDOW SCRIPT by Kevin Navia
//CSS http://www.pixelpush.org
//FEEL FREE TO CREDIT, COPY, IMPROVE AND USE

$(document).ready(function(){



	//SHOULD LOOP EVERY IMAGE WITH THE CLASS "PORT"
	$("img.port").each(
		function(makePort) {
			var imgAlt = $(this).attr("alt");  
			var imgTitle = $(this).attr("title");
			$(this).wrap("<div class=\"portwin\"></div>");
			$(this).parent().append("<div class=\"inner\"></div>");
			$(this).siblings(".inner").css("opacity","0.9").append("<b>"+imgAlt+"</b>").append("<p>"+imgTitle+"</p>");
		}
	);
	
	
	
	
	
});
