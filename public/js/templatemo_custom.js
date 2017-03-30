var switchbool = '';

function overlay(elem){
	if(elem === 'over'){
		$('.overlay0').fadeIn(1000);
	}else if(elem === 'over1'){
		$('.overlay1').fadeIn(1000);
	}
}

function showgesture(range1, range2, range3, range4){
    if(window.scrollY >= range1 && window.scrollY <= range2 && switchbool === '' && window.innerWidth < 1020){
        $('.hand-gesture').fadeIn(1000).delay(1000).fadeOut(1000);
        switchbool = true;
        console.log('xs-screen triggered');
    } else if(window.scrollY >= range3 && window.scrollY <= range4 && switchbool === '' && window.innerWidth > 1020){
		$('.hand-gesture').fadeIn(1000).delay(1000).fadeOut(1000);
        switchbool = true;
        console.log('lg-screen triggered');
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

		window.onscroll = function(){ showgesture(455, 475, 180, 210); };
		$('.first-nav').addClass('active');

	} else if(window.location.href === location + '/dj'){

		window.onscroll = function(){ showgesture(680, 700, 1130, 1150); };
		$('.second-nav').addClass('active');

	} else if(window.location.href === location + '/bartender'){
		$('.third-nav').addClass('active');
	} else if(window.location.href === location + '/bartender/about'){
		$('.fourth-nav').addClass('active');
	} else if(window.location.href === location + '/sweetsixteen'){
		window.onscroll = function(){ showgesture(1030, 1070, 1255, 1280); };
		$('.fifth-nav').addClass('active');
	} else if(window.location.href === location + '/contact'){
		$('.sixth-nav').addClass('active');
	}

	console.log(window.location.href, '\n', window.location.host);
}






