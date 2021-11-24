// main manu js

const navMenu = document.getElementById('nav-menu'),
	toggleMenu = document.getElementById('nav-toggle'),
	closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
	navLink.forEach(n => n.classList.remove('active'));
	this.classList.add('active');
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// client logo slider seciton
$(document).ready(function(){

  	$('.our-client-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		autoplay: false,
		slidesToShow: 6,
		slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
  	});

	$('.service-slider-active').slick({
		dots: false,
		infinite: true,
		speed: 3000,
		autoplay: true,
		slidesToShow: 5,
		slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
  	});


	  $('.popup-slider-client').slick({
		dots: false,
		infinite: true,
		speed: 3000,
		arrows:false,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
  	});


	$('.testimonial-active').slick({
		dots: false,
		infinite: true,
		speed: 3000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
  	});

	$('.project-location-slider').slick({
		dots: true,
		infinite: true,
		speed: 3000,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
  	});

	  $('.testimonial-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
  	});
});


// about slider 

(function($) {

	"use strict";
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	//Side Content Toggle
	if($('.main-header .outer-box .nav-btn').length){
		//Show Form
		$('.main-header .outer-box .nav-btn').on('click', function(e) {
			e.preventDefault();
			$('body').addClass('side-content-visible');
		});
		//Hide Form
		$('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('side-content-visible');
		});
		//Dropdown Menu
		$('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
			$(this).next('ul').slideToggle(500);
		});
	}

	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		$('.hidden-bar').mCustomScrollbar({
		    theme:"dark"
		});
	}

	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			animateOut: 'slideOutDown',
		  	animateIn: 'zoomIn',
			loop:true,
			margin:0,
			nav:true,
      		fade: true,
			smartSpeed: 300,
			autoplay: 7000,
			navText: [ '<span class="arrow-left"></span>', '<span class="arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});  		
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}
	
	//Default Masonary
	function defaultMasonry() {
		if($('.masonry-items-container').length){
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth :2
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			winDow.on('resize', function(){
				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	defaultMasonry();

	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
		});
	}

	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.05,            
			  factorLg: 0.05,          
			  type: 'foreground',    
			  direction: 'horizontal'
		});
	}

	if($('.timer').length){
	   	$(function(){
		    $('[data-countdown]').each(function() {
				var $this = $(this), finalDate = $(this).data('countdown');
				$this.countdown(finalDate, function(event) {
					$this.html(event.strftime('%D days %H:%M:%S'));
				});
		 	});
		});

	   $('.cs-countdown').countdown('').on('update.countdown', function(event) {
		  	var $this = $(this).html(event.strftime('<div class="count-col"><span>%m</span><h6>Months</h6></div> <div class="count-col"><span>%D</span><h6>days</h6></div> <div class="count-col"><span>%H</span><h6>Hours</h6></div> <div class="count-col"><span>%M</span><h6>Minutes</h6></div> <div class="count-col"><span>%S</span><h6>Seconds</h6></div>'));
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      
			animateClass: 'animated', 
			offset:       0,          
			mobile:       true,       
			live:         true      
		  }
		);
		wow.init();
	}

	$(window).on('scroll', function() {
		headerStyle();
	});
	
	$(window).on('load', function() {
		handlePreloader();
		defaultMasonry();
	});	

})(window.jQuery);

// video gallary section js 

$('.venobox_custom').venobox({
    framewidth : '100%',                        
    frameheight: '100vh',                       
    border     : '2px',                           
    bgcolor    : 'var(--first-color)',                        
    titleattr  : 'data-title',                      
    numeratio  : true,                              
    infinigall : true,                               
    share      : ['facebook', 'twitter', 'download'] 
});

//project-gallary

$('.project-gallary-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	fade: true,
	asNavFor: '.project-gallary-slider-nav'
});

$('.project-gallary-slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.project-gallary-slider',
	dots: true,
	autoplay: true,
	focusOnSelect: true
});


$(".main-slider-active").slick({
	infinite: true,
	autoplay:true,
	autoplaySpeed:5000,
	fade:false,
	arrows:true,
	responsive: [{
  
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  infinite: true
		}
  
	  }, {
  
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  dots: true
		}
  
	  }, {
  
		breakpoint: 300,
		settings: "unslick" 
  
	  }]
  });




// srroll smooth 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

// scroll btn top to bottom

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// navbar fixd

$(document).ready(function() {

	$(window).scroll(function () { 
		console.log($(window).scrollTop())
	  if ($(window).scrollTop() > 280) {
		$('#nav_bar').addClass('navbar-fixed');
	  }
	  if ($(window).scrollTop() < 281) {
		$('#nav_bar').removeClass('navbar-fixed');
	  }
	});
  });





// sr.reveal(`.main-navbar-section`)

sr.reveal(` .project-contant`,{origin: 'left'})
sr.reveal(` .project-images`,{origin: 'right'})
sr.reveal(` .about-left-side-contant`,{origin: 'left'})
sr.reveal(` .about-right-side-images`,{origin: 'right'})
sr.reveal(` .contact-information-section`,{origin: 'left'})
sr.reveal(` .contact-submit-form`,{origin: 'right'})
sr.reveal(` .brands-items-box .brands-items`,{origin: 'left'})
sr.reveal(` .brands-items-box .brand-left-side`,{origin: 'right'})
sr.reveal(` .blog-information-section`,{origin: 'left'})
sr.reveal(` .blog-sidebar-section`,{origin: 'right'})
sr.reveal(` .project-gallary`,{origin: 'left'})
sr.reveal(` .project-achievements`,{origin: 'right'})
sr.reveal(` .company-gallary`,{origin: 'left'})
sr.reveal(` .company-achievements`,{origin: 'right'})
sr.reveal(`	.service-section-contant`,{interval: 100})
sr.reveal(`	.project-location`,{interval: 100})
sr.reveal(`	.blog-information-box`,{interval: 100})
sr.reveal(`	.our-clinet-section .section-contant`,{interval: 100})
sr.reveal(`	.testimonial-item-box`,{interval: 100})


// slider animation 

for(x=0; x<40;x++) {
	var board = document.createElement('div');
	board.className = "particle";
	document.getElementById('particles').appendChild(board);
}