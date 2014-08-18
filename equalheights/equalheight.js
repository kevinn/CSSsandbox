//EQUAL HEIGHT SCRIPT
//by Kevin Navia

$(window).load(function(){

	//LOOP AT ALL ITEMS WITH .item
	var itemH = 0;
	
	$(".item").each(
		function(i){
			var iH = $(this).height();
			if (iH > itemH) {
				itemH = iH;
			}
		}
	);

	//SET ALL ELEMENTS WITH .item to the TALLEST height
	$(".item").css({"height":itemH});

});


function eqh(el) {

	//LOOP AT ALL ITEMS WITH .item
	var itemH = 0;
	
	$(el).each(
		function(i){
			var iH = $(this).height();
			if (iH > itemH) {
				itemH = iH;
			}
		}
	);

	//SET ALL ELEMENTS WITH .item to the TALLEST height
	$(el).css({"height":itemH});

}
