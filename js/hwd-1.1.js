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
      /*start component products slider*/
      var ancMenu = $('.menu figure a');
      var attr;
      ancMenu.each(function(indice, elemento) {
         $(elemento).click(function(){
          attr = $(this).attr('href');
        //$('.active').removeClass( "active" ).addClass( "inactive" );
        
        $('.active').animate({
          opacity: 0,
          'z-index':20,
        },500, function(){
          $('.active').removeClass( "active" ).addClass( "inactive" );
          $(attr).animate({
            opacity:1,
            'z-index':30,
          });
          $(attr).removeClass( "inactive" ).addClass( "active" );
        });
          
       });
      });


});

      /*end component products slider*/
      var desp = new Array;
      $('.direccion legend a').each(function(indice, elemento){
        desp[indice] = 0;
         $(elemento).click(function(){
          var pd1 = $(elemento).parent();
          var pd2 = $(pd1).parent();
          if(desp[indice]==0){
            $(pd2).animate({
              height: '250px',
            },500,function(){
              desp[indice]=1;
            });
          }
          else if(desp[indice]==1){
             $(pd2).animate({
              height: '20px',
            },500,function(){
              desp[indice]=0;
            });
          }
          return false;
        });
      });
