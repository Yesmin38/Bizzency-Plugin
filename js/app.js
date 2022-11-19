$(function(){


  //scrollTotop

  $(window).scroll(function() {     
       if ($(this).scrollTop() > 600) {     
           $(".scrollup").fadeIn();     
       } else {     
           $(".scrollup").fadeOut();     
       }     
      })

      $(".scrollup").click(function() {
          
              $("html, body").animate({
          
                  scrollTop: 0
          
              }, 600);
          
              return false;
          
          })

  //progessbar
  $('.progessline1').rProgressbar({
    percentage: 90
  });
  $('.progessline1').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#2a4896',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
    height: '10px',
    width: '100%'
    
  });
          $('.progessline2').rProgressbar({
            percentage: 85
          });
          $('.progessline2').rProgressbar({
            percentage: 85,
            fillBackgroundColor: '#5d3b15',
            backgroundColor: '#EEEEEE',
            borderRadius: '10px',
            height: '10px',
            width: '100%'
            
          });
          $('.progessline3').rProgressbar({
            percentage: 75
          });
          $('.progessline3').rProgressbar({
            percentage: 75,
            fillBackgroundColor: '#344a1f',
            backgroundColor: '#EEEEEE',
            borderRadius: '10px',
            height: '10px',
            width: '100%'
            
          });
          $('.progessline4').rProgressbar({
            percentage: 80
          });
          $('.progessline4').rProgressbar({
            percentage: 80,
            fillBackgroundColor: '#392960',
            backgroundColor: '#EEEEEE',
            borderRadius: '10px',
            height: '10px',
            width: '100%'
            
          });
    
          
         
        
              
      //s;ider pluggin
    $('.service-slider').slick({
        
  slidesToShow: 3,
  dots:true,
  prevArrow:"#service .pre-arrow",
      nextArrow:"#service .next-arrow",
    });

    $('.port-ctn').slick({
    
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:"#port .pre-arrow",
      nextArrow:"#port .next-arrow",
    });

    $('.auto-play').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:"#testimonial .pre-arrow",
      nextArrow:"#testimonial .next-arrow",
    });

    new VenoBox({
      selector: ".veno-box",
      
      
  });
  new VenoBox({
    overlayClose:true,
    share:true,

  });


  AOS.init();
})