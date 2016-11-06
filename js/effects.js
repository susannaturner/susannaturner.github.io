// new script

		    	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
		    $('.navbar-fixed-top').addClass("sticky");
		  }
		  else{
		    $('.navbar-fixed-top').removeClass("sticky");
		  }
		});

		$(function(){

	     $('a[href*=#]').click(function() {

	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	         && location.hostname == this.hostname) {

	             var $target = $(this.hash);

	             $target = $target.length && $target || $("[name=' + this.hash.slice(1) +']");

	             if ($target.length) {

	                 var targetOffset = $target.offset().top;

	                 $('html,body').animate({scrollTop: targetOffset}, 1000);

	                 return false;

	            }

	       }

	   });

	});

	$('.goTop').click(function()  {
	            $('html,body').animate({scrollTop:'0px'}, 500);return false;
	      }
	);

	$(document).ready(function () {
	  $(".navbar-nav li a").click(function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });
	});

// Animation while scrolling

	$(window).scroll(function() {
			if ($(this).scrollTop() > 100){  
			    $('.animated').addClass("fadeInLeftBig");
			  }
			  else{
			    $('.animated').removeClass("fadeInLeftBig");
			  }
			});

