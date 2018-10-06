jQuery(function($) {
    "use strict";
    //Подключение слайдера slick
    $('.header-slider').slick({
    	infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
  	});

    //Выпадающие окна в секции About    
    $('.about-quests-quest').on('click', function(){  
        $('.about-quests-answer').slideUp(300);
        if($(this).hasClass("active")){
            $(this).next().slideUp(300);
            $(this).removeClass("active");            
        }else{
            $(this).next().slideDown(300);
            $('.about-quests-quest').removeClass("active"); 
            $(this).addClass("active");
        }
    })

    $('.about-items-item').on('click', function(){
        $(".about-items-item img").removeClass("active");
        $(this).children("img").addClass("active"); 
        
    })
})