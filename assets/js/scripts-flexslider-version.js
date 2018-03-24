$(window).load(function(){ });

$(document).ready(function(){
    $('.slider,.flexslider').flexslider({
    	animation: 'fade',
    	slideshowSpeed: 3000,
    	slideshow: false,
    	controlNav: false,
    	directionNav: false,
    	start: function(slider){
    		slider.slides.eq(slider.currentSlide).addClass('active');
    		console.log('first loaded: '+slider.currentSlide);
    	},
    	before: function(slider){
    		
    		slider.slides.eq(slider.currentSlide).removeClass('active');

	        slider.slides.eq(slider.animatingTo).delay(1000);
  //  		slider.slides.eq(slider.currentSlide).delay(6000).addClass('active');

    		console.log('current: '+slider.currentSlide);
    		console.log('going: '+slider.animatingTo);

    	},
    	after: function(slider){
    		slider.slides.eq(slider.currentSlide).addClass('active').delay(3000);

    		console.log('loaded: '+slider.currentSlide);
    	}
    });
//    $('.modalWindow').fancybox();
    //$('textarea').autosize();
    //$('.datepciker').datepicker('option','dateFormat','DD, d MM, yy');
    //$('#videoCurrent').fitVids();
});
