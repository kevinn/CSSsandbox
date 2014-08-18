//JQUERY SCRIPT copyright by by Kevin Navia
//FEEL FREE TO USE, CREDIT ME OR SEND ME AN E-MAIL

jQuery.preloadImages = function()
{
  for(var i = 0; i<arguments.length; i++)
  {
    jQuery("<img>").attr("src", arguments[i]);
  }
}

$(document).ready(function(){

	$.preloadImages('baby.gif', 'baby2.gif','pika.gif');
	$('body').append('<img src="baby2.gif" alt="" class="pika" style="width: 0px; height: 0;" />');

	//ASSIGN PRELIM CSS CHANGES VIA JS
	$('p a').css({'display':'inline-block','padding':'5px','color':'inherit','text-decoration':'none'});
	$('.pika').attr('src','baby2.gif');

	//PIKACHU CHOOSES MACIEK
	$().mousemove(function(e){
		$('p.blah').html("X Axis : " + e.pageX + " | Y Axis " + e.pageY);
		var w = $(window).width();
		var r = (((e.pageX)*-1)+(w-60))+'px';
		var t = (e.pageY)+10+'px';
		$('.pika').css({'position':'absolute','right':r,'top':t,'z-index':'999','width':'auto','height':'auto'});
	});
	
	// WHAT TO DO WHEN HOVERING
	$('p a').hover(
		function(){
		$('.pika').attr('src','pika.gif').fadeOut('100');
		setTimeout(function(){
			$('.pika').attr('src','baby.gif').fadeIn('slow');
		},400);
		},
		function(){
		$('.pika').attr('src','baby.gif').fadeOut('100');
		setTimeout(function(){
			$('.pika').attr('src','pika.gif').fadeIn('slow');
		},400);
		}
	);
	$('p a').hover(
		function(){$(this).css({'color':'#f4aa05','background':'#f1f1f1'});},
		function(){$(this).css({'color':'inherit','background':'#fff'});}
	);
});	