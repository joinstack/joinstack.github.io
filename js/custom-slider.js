
var custom_slider = (function () {

    var slideContainer;
    var slideItems;
    var slider
    var slideWidth;
    var aktualSlide=0;
    var isMoving=false;
    var aktX=0;
    var lastX = 0;
    var moveX=0;
    var slidePostion =0;
    var lastPosition = 0;
    var slides =0;
    var starting=false;
    var allowXscrolll = true;
    var lastSlide = -1
    var direction = 'none';
    var lastNowSlide = 0;

    function init(){
        slider = $('.mobile-slider');
        slideContainer = $('.all_slides');
        slideItems = $('.mobile-slider .mobile-slider__item');
        slideWidth = slider.find('.mobile-slider__slides').width();
        slides=slideItems.length;

        for(var it=0; it <  slides ; it++){
            $('.mobile-slider__controlls').append('<a href="#" class="circle"></a>')
        }


        var a=0;
        slideItems.each(function(){
            $(this).css({'left':a*slideWidth+'px'});
            a=a+1;
        })

        $('.mobile-slider__controlls a').bind('click touchend',function(){
            //alert($(this).index());
            gotoSlide( $(this).index() );
            return false;
        })

        slider.on('touchstart', function(e) {
            //$('#slide-headline').text('aktX');
            starting = true;
            allowXscrolll = true;
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            //console.log(touch.pageY+' '+touch.pageX);
            aktY = touch.pageY
            aktX = touch.pageX;
            lastX = aktX;
            moveX = 0;
            //$('#slide-headline').text(aktX);
            isMoving=true;
            direction = 'none';
            lastNowSlide = lastSlide;

        });
        $(document).on('touchmove', function(e) {

            if(isMoving) {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                var dX = Math.abs(aktX - touch.pageX);

                if(starting){
                    var dY = Math.abs(aktY - touch.pageY);

                    starting = false;
                    if(dX>dY){
                        allowXscrolll=true;
                    }else{
                        allowXscrolll=false;
                    }
                }

                if(allowXscrolll === true) {

                   if(dX>1){
                       if(lastX>aktX){
                           direction = 'left';
                       }else{
                           direction = 'right';
                       }
                   }else{
                       direction = 'none';
                   }
                    //console.log(touch.pageY+' '+touch.pageX);
                    aktX = touch.pageX;
                    moveX = (lastX - aktX)* ( slideWidth / $(window).width() );
                    //$('#slide-headline').text(moveX);

                    lastPosition = (slidePostion - moveX);

                    TweenMax.to(slideContainer, 0.2, {
                        x: lastPosition,
                        ease: Power2.easeOut, onUpdate:function(){writeText();}
                    });
                    e.preventDefault();

                }

            }
        });


        $(document).on('touchend mouseup', function(e) {
            isMoving=false;
            gotoToNextSlide();
        });

        gotoSlide(aktualSlide);
    }

    function writeText(){
        //$('#slide-text').text( direction  );

        var toSlide = Math.round( ( (lastPosition)/slideWidth )*-1 );
        if(toSlide<0){
            toSlide=0;
        }
        if(toSlide>slides-1){
            toSlide=slides-1;
        }
        if(lastSlide!=toSlide){
            //change text
            lastSlide = toSlide;
            $('#slide-headline').text( $('.mobile-slider .mobile-slider__item:eq('+toSlide+') h3').text()  );
            $('#slide-text').text( $('.mobile-slider .mobile-slider__item:eq('+toSlide+') p').text()  );

            $('.mobile-slider__controlls a').removeClass('active');
            $('.mobile-slider__controlls a:eq('+toSlide+')').addClass('active');
        }
        //setSlideOpacity;
        var elm = $('.mobile-slider__txt')
        var opctLevel = 1-Math.abs(((lastPosition/slideWidth ) + toSlide ) *2);
        elm.css({'opacity':opctLevel});

    }

    function gotoToNextSlide(){
        var toSlide = Math.round( ( (lastPosition)/slideWidth )*-1 );

        if(direction==='left'){
            toSlide= lastNowSlide +1;
        }else if(direction==='right'){
            toSlide= lastNowSlide -1;
        }

        if(toSlide<0){
            toSlide=0;
        }
        if(toSlide>slides-1){
            toSlide=slides-1;
        }


        // $('#slide-headline').text(toSlide);

        //$('#slide-headline').text(toSlide);
        gotoSlide(toSlide);
    }

    function gotoSlide(nextSlide){
        slidePostion = 0-nextSlide*slideWidth
        lastPosition = slidePostion;
        TweenMax.to(slideContainer, 0.3, {
            x: slidePostion,
            ease: Power2.easeOut, onUpdate:function(){writeText();}
        });
        $('.mobile-slider__controlls a').removeClass('active');
        $('.mobile-slider__controlls a:eq('+nextSlide+')').addClass('active');
    }

    return {
        create: function (mobWidth) {
            if($('.mobile-slider').length>0){
                init();

            }
        }
    };


})();


$(document).ready(function () {
    custom_slider.create();
});