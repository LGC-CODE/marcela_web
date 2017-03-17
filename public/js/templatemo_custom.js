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

  $('.owl-carousel').owlCarousel({
	    rtl:false,
	    autoplay: true,
	    loop:true,
	    margin:0,
	    nav:false,   
    	autoplayTimeout:3500,
    	autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
});

function getinfo(){
	var name = document.getElementById('f-name').value;
	var message = document.getElementById('f-message').value;
	var form = document.getElementById('form');

	if(!name || !message){
		alert('please fill out all fields');
		return;
	}

	var subject = encodeURIComponent('I would like more information about your bartending service');
	var body = encodeURIComponent(message);

		var link = "mailto:luisconstante@yahoo.com?subject=";
		link += subject;
		link += '&body=';
		link += body;

		window.open(link);

}





