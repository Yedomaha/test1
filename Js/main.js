$(document).ready(function(){
	$('.slick-slider').slick({
		dots: true,
		autoplay: true,   
    	autoplaySpeed: 4000
	});
});

 $(document).ready(function(){
    $(".qqq").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

 $(document).ready(function(){
 var grid = $('.portfolio__gallery').isotope({
   itemSelector: '.portfolio__gallery-item',
   layoutMode: 'masonry',
   masonry: {
       horizontalOrder: true
   }
});

$('.portfolio__navbar-item').click(function() {
   var filterValue = $( this ).attr('data-filter');
   grid.isotope({ filter: filterValue });
   $(".portfolio__navbar-item").removeClass("active-filter");
   $(this).addClass("filter");
});
});