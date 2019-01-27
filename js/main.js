$(document).ready(function(){

	// nice scroll library
	$("body").niceScroll({
		cursorcolor:"#d34848",
		cursorwidth:"10px",
		cursorborder:"1px solid #d34848"
	});

	// scroll to features
	$('.header .arrow i').click(function(){

		$('html,body').animate({

			scrollTop: $('.features').offset().top

		}, 1000);
	});
	 // show hidden items from work
	 $('.show-more').click(function(){

		$('.our-work .hidden').fadeIn(1000);
		$(this).css({"cursor":"not-allowed","background":"#eee","color":"#000"});
	});

	// check testimonials
	var leftArrow = $('.testim .fa-chevron-left'),

			rightArrow = $('.testim .fa-chevron-right');

	function checkClient() {

		// short if condition
		$('.client:first').hasClass('active') ? leftArrow.hide() : leftArrow.show();

		$('.client:last').hasClass('active') ? rightArrow.hide() : rightArrow.show();

	}

	checkClient();

	$('.testim i').click(function(){

		if ($(this).hasClass('fa-chevron-right')) {

			$('.testim .active').fadeOut(100,function () {

				$(this).removeClass('active').next('.client').addClass('active').fadeIn();

				checkClient();

			});

		}else {
			// if the class is : fa-chevron-left
			$('.testim .active').fadeOut(100,function () {

				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();

				checkClient();

			});

		}

	});

	// scroll to our team
	$('.hire').click(function(){
		
		$('html,body').animate({
			
			scrollTop: $('.contact').offset().top
			
		}, 1000);
		
	});
	
	// scroll to our work
	$('.work').click(function(){

		$('html,body').animate({

		scrollTop: $('.our-work').offset().top

		}, 1000);

	});

	// scroll to top button
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 1000)  {
			$('.scroll-up').show();
		}else{
			$('.scroll-up').hide();
		}
	});

	$('.scroll-up').click(function(){
		$('html,body').animate({
			scrollTop : 0
		},1000);
	});

});