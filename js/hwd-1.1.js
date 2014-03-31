 jQuery(document).ready(function($) {
          
          $('#banner-slide').bjqs({
            animtype      : 'slide',
            height        : 486,
            width         : 1280,
            responsive    : true,
            showmarkers : false,
            randomstart   : true
          });
           $('#addprod').click(function(){
	        	$('.cart_detail').css('display','block');
	      		//$('.window').css('visibility', 'visible');
	      		$('.cart_detail').animate({
	      			opacity: 1,
	      			right: 0,
	      		}, 600);
	      		
      		});
        });