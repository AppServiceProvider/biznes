// mixitup

        var container = document.querySelector('.mixitup');
        var mixer = mixitup(container, {
            selectors: {
                control: '[our-mix-control]'
            }
        });


//--------------JQ------------

$(document).ready(function(){


	

       

        //Owl brand logo
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        //Owl End
        
        
       
        //$('.top').scrollTop(0);
//$('.top_icon').animate({scrollTop: 500});
        
           //top scroll jq plugin
       $('.top').click(function(){
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
       });

       $('.top').hide();


       $(window).scroll(function(){
            var ourWindow = $(this).scrollTop();

            if(ourWindow<500) {
                $('.top').fadeOut();//hide
            } else {
                $('.top').fadeIn();//show
            };
             //top scroll jq plugin End

           
           
            // Menu Fixed
            if(ourWindow>100) {
            	$('body').addClass('fixed');
            } else {
            	$('body').removeClass('fixed');
            };
       });

        
    
    
       $('.navbar-nav li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});


       $('.navbar-nav a[href^="#"]').click(function(e){
       		e.preventDefault();

       		var target = this.hash;

       		$('html, body').animate({
       			scrollTop: $(target).offset().top - 75
       		}, 500);


       });




});

