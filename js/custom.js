/*
  * @package 
  * @subpackage template name HTML
  * 
  * Template Scripts
  * Created by themeturn
  
  1. Fixed header
  2. Site search
  3. Main slideshow
  4. Owl Carousel
      a. Testimonial
      b. Clients
      c. Team
  5. Back to top
  6. Skills
  7. BX slider
      a. Blog Slider
      b. Portfolio item slider
  8. Isotope
  9. Animation (wow)
  10. Flickr
  
*/


jQuery(function($) {
  "use strict";

   $('.navigation').singlePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        offset: 0,
        filter: ':not(.external)',
        easing: 'swing',

    });

    $.noConflict();
     $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });


    $("#arrow-up").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
     });

     $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
            $('#arrow-up').fadeIn();
        } else {
            $('#arrow-up').fadeOut();
        }
    });

    

})

random = Math.floor(Math.random() * 2)
var backgrounds = ['bg.png', 'bg1.png'];
var bg = './images/' + backgrounds[ random ];
$( '#section-banner' ).fadeIn('slow', function() {
	$( this ).css('background-image', 'url("'+ bg +'")')
});



document.addEventListener('DOMContentLoaded',function(event){

    jQuery('.overlay-loader').remove();
	// array with texts to type in typewriter
	var dataText = [ "PHP DEVELOPER"];
	
	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {
		// chekc if text isn't finished yet
		if (i < (text.length)) {
		// add next character to h1
		document.querySelector("#typing").innerHTML = text.substring(0, i+1) +' <span aria-hidden="true"></span>';

		// wait for a while and call this function again for next character
		setTimeout(function() {
			typeWriter(text, i + 1, fnCallback)
		}, 100);
		}
		// text finished, call callback if there is a callback function
		else if (typeof fnCallback == 'function') {
		// call callback after timeout
		setTimeout(fnCallback, 700);
		}
	}
	// start a typewriter animation for a text in the dataText array
	function StartTextAnimation(i) {
		if (typeof dataText[i] == 'undefined'){
			setTimeout(function() {
			StartTextAnimation(0);
			}, 20000);
		}
		// check if dataText[i] exists
		if (i < dataText[i].length) {
		// text exists! start typewriter animation
		typeWriter(dataText[i], 0, function(){
		// after callback (and whole text has been animated), start next text
		StartTextAnimation(i + 1);
		});
		}
	}
	// start the text animation
	StartTextAnimation(0);
});