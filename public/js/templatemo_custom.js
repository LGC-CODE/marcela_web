var switchbool = '';

function overlay(elem){
	if(elem === 'over'){
		$('.overlay0').fadeIn(1000);
	}else if(elem === 'over1'){
		$('.overlay1').fadeIn(1000);
	}
}

function showgesture(range1, range2){
    if(window.scrollY >= range1 && window.scrollY <= range2 && switchbool === ''){
        $('.hand-gesture').fadeIn(1500).delay(2500).fadeOut(1500);
        switchbool = true;
    }
}

$(document).ready(function(){

	setActive(); //set nav item to active

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
    $('#slider').owlCarousel({
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
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});
	$('#djslider').owlCarousel({
	    rtl:false,
	    autoplay: true,
	    loop:true,
	    margin:0,
	    nav:true, 
	    dots: true,
	    dotsContainer: 'mydots',
	    navText: true,  
    	autoplayTimeout:3500,
    	autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});
});

function getinfo(messageId, nameId, customServiceName){

	var name = document.getElementById(nameId).value;
	var message = document.getElementById(messageId).value;
	var form =  document.getElementById('form');

	if(!name || !message){
		alert('please fill out all fields');
		return;
	} else {
		var subject = encodeURIComponent('I would like more information about your ' + customServiceName + ' service');
		var body = encodeURIComponent(message);

		var link = "mailto:luisconstante@yahoo.com?subject=";
		link += subject;
		link += '&body=';
		link += body;
		form.reset();

		window.location.href = link;
	}

}

function setActive(){
	var host = window.location.host;
	var location = 'http://' + host;

	if(window.location.href === location + '/'){

		window.onscroll = function(){ showgesture(455, 475); };
		$('.first-nav').addClass('active');

	} else if(window.location.href === location + '/dj'){

		window.onscroll = function(){ showgesture(680, 700); };
		$('.second-nav').addClass('active');

	} else if(window.location.href === location + '/bartender'){
		$('.third-nav').addClass('active');
	} else if(window.location.href === location + '/bartender/about'){
		$('.fourth-nav').addClass('active');
	}

	console.log(window.location.href, '\n', window.location.host);
}






