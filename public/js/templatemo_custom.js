function overlay(elem){
	if(elem === 'over'){
		$('.overlay0').fadeIn(1000);
	}else if(elem === 'over1'){
		$('.overlay1').fadeIn(1000);
	}
}
$(document).ready(function(){
	$('.overlay0 .glyphicon.glyphicon-remove').on('click', function(){
		$('.overlay0').fadeOut(1000);
	});

	$('.overlay1 .glyphicon.glyphicon-remove').on('click', function(){
		$('.overlay1').fadeOut(1000);
	});
});