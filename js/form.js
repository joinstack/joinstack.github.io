var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
};
  
PageInits = {
    wowjs: function() {
        var wow = new WOW({
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                scrollContainer: null,    // optional scroll container selector, otherwise use window,
                resetAnimation: true,     // reset animation on end (default is true)
            }
        );
  
        wow.init();
    },
  
    loadFooter: function(url) {
        $("#footer").load(url); 
    },
  
    videoModal: function() {
         
        $('.allpro .btn-play').click(function() {
            $('.btn-close').fadeIn('slow');
            $('.video, .overlay').fadeIn('slow');
            $('.video-container').html('<iframe width=560 height=315 src=https://www.youtube.com/embed/rYCABOWfUPk?autoplay=1 frameborder=0 allowfullscreen></iframe>');
        });
         
        $('.cornerstone .btn-play').click(function() {
            $('.btn-close').fadeIn('slow');
            $('.video, .overlay').fadeIn('slow');
            $('.video-container').html('<iframe width=560 height=315 src=https://www.youtube.com/embed/hseN7N2SNCE?feature=oembed&autoplay=1 frameborder=0 allowfullscreen></iframe>');
        });
        $(document).on('touchend, mouseup', function(e) {
            if (!$('.video').is(e.target)) {
                $('.video, .overlay').fadeOut('slow');
                $('.btn-close').fadeOut('slow');
                $('.video-container').html('');
            }
        });
  
        $('.btn-close').on('click', function(e) {
            if (!$('.video').is(e.target)) {
                $('.video, .overlay').fadeOut('slow');
                $('.video-container').html('');
            }
        });
    },
  
    imageSwap: function() {
        $('.approach-item').hover(function() {
            $('img', this).attr('src', sourceSwap)
        }, function() {
            $('img', this).attr('src', sourceSwap)
        });
    },
  
    contactIcon: function() {
        $('.contact-icon a').hover(function() {
            $('img', this).attr('src', sourceSwap)
        }, function() {
            $('img', this).attr('src', sourceSwap)
        });
    },
  
    bottomWork: function() {
        $('#bottom-work a').hover(function() {
            $('#bottom-work figure').addClass('active');
        }, function() {
            $('#bottom-work figure').removeClass('active');
        });
        $('#bottom-team').hover(function() {
            $('#bottom-team').addClass('active');
        }, function() {
            $('#bottom-team').removeClass('active');
        });
    },
 
    socialsHover: function() {
        $('.social a').hover(function() {
            $('img', this).attr('src', sourceSwap)
        }, function() {
            $('img', this).attr('src', sourceSwap)
        });
    },
  
    navigation: {
        animation: null,
 
        work: function() {
            let self = this;
            var slideNav = $('.slidenav');
      
            $('.mc-chicken').on('click', function(){
                $(this).toggleClass("opened");
 
                if (self.animation == null) {
                    self.animation = anime({
                        targets: '.nav-scene',
                        d: [
                            { value: 'M 1041,450.4 C 1023,547.7 992.8,667.7 905.7,714.5 793.1,775 639,728.7 524.5,671.8 453.3,636.4 382.2,575.4 360.2,499 329.7,393 344.6,249.2 426,174.9 568.6,44.66 851.1,-8.71 1002,111.8 1091,182.7 1061,338.6 1041,450.4 Z' },
                            { value: 'M 1066,436 C 1053,531.1 930.7,580.1 842.2,617.2 734,662.7 598.4,707.8 492.4,657.4 427.6,626.6 387.5,546.9 376.7,476 360.3,368.3 376.9,227.9 462.5,160.5 567.6,77.69 749.9,37.5 863.8,148.8 947.6,230.7 1082,320.1 1066,436 Z' },
                            { value: 'M 1066,436 C 1051,543.8 976.5,664.5 873.6,700.1 761,739.1 636.4,655.8 529.5,603.1 441.6,559.8 325.8,520.1 293.8,427.5 263.1,338.4 294.5,213.4 368.2,154.8 520.7,33.48 790.1,23.76 952.4,131.7 1043,191.7 1081,328.8 1066,436 Z' },
                            { value: 'M 1066,436 C 1051,543.8 973.2,656.2 873.6,700.1 756.6,751.7 600.9,725 492.4,657.4 431.5,619.5 387.5,546.9 376.7,476 360.3,368.3 377.9,229.2 462.5,160.5 589.5,57.34 815.4,42.24 952.4,131.7 1044,190.8 1081,328.8 1066,436 Z '}
                        ],
                        easing: 'easeOutQuad',
                        duration: 9000,
                        loop: true,
                        autoplay: true
                    });
                }
 
                if (slideNav.hasClass('active')) {
                    slideNav.removeClass('active');
                    self.animation.pause();
                } else {
                    slideNav.addClass('active');
                    self.animation.play();
                }
            });
        }
    },
 
  
    navVideo: function() {
        $('.navlinks a').hover(function() {
            $('.navlinks a.active').removeClass('active');
            $(this).addClass('active');
            $('.slidenav').toggleClass('set');
  
            var navLink = $(this).attr('data-nav-link');
            $('.nav-img image[data-img-clip = '+navLink+']').addClass('hovered');
            $('.nav-img image[data-img-clip != '+navLink+']').removeClass('hovered');
        });
    },
  
    shapeMorph: function() {
        if ($('.shape-morph').length > 0) {
            var morphing = anime({
                targets: '.scene, .scene-small',
                d: [
                    { value: 'M 1041,450.4 C 1023,547.7 992.8,667.7 905.7,714.5 793.1,775 639,728.7 524.5,671.8 453.3,636.4 382.2,575.4 360.2,499 329.7,393 344.6,249.2 426,174.9 568.6,44.66 851.1,-8.71 1002,111.8 1091,182.7 1061,338.6 1041,450.4 Z' },
                    { value: 'M 1066,436 C 1053,531.1 930.7,580.1 842.2,617.2 734,662.7 598.4,707.8 492.4,657.4 427.6,626.6 387.5,546.9 376.7,476 360.3,368.3 376.9,227.9 462.5,160.5 567.6,77.69 749.9,37.5 863.8,148.8 947.6,230.7 1082,320.1 1066,436 Z' },
                    { value: 'M 1066,436 C 1051,543.8 976.5,664.5 873.6,700.1 761,739.1 636.4,655.8 529.5,603.1 441.6,559.8 325.8,520.1 293.8,427.5 263.1,338.4 294.5,213.4 368.2,154.8 520.7,33.48 790.1,23.76 952.4,131.7 1043,191.7 1081,328.8 1066,436 Z' },
                    { value: 'M 1066,436 C 1051,543.8 973.2,656.2 873.6,700.1 756.6,751.7 600.9,725 492.4,657.4 431.5,619.5 387.5,546.9 376.7,476 360.3,368.3 377.9,229.2 462.5,160.5 589.5,57.34 815.4,42.24 952.4,131.7 1044,190.8 1081,328.8 1066,436 Z ' }
                ],
                easing: 'easeOutQuad',
                duration: 9000,
                loop: true
            });
        }
    },
  
    buttonHoverEffect: function() {
        $('.bs-button-wrap a').each(function() {
            $(this).mouseenter(function() {
                var parent = $(this).parent();
                 
                var buttonEl = parent.find('.bs-button.button').get(0);
                var buttonAnimation = anime.timeline({
                    duration: 300,
                    loop: false,
                    autoplay: false
                })
                .add({ targets: parent.find('.circle-1').get(0), translateX: -18, translateY: 10, offset: 0, delay: 50, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-2').get(0), translateX: -18, translateY: 28, offset: 0, delay: 75, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-3').get(0), translateX: -18, translateY: 46, offset: 0, delay: 25, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-4').get(0), translateX: -18, translateY: 64, offset: 0, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-5').get(0), translateX: -36, translateY: 46, offset: 0, delay: 90, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-6').get(0), translateX: 0, translateY: -18, offset: 0, delay: 35, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-7').get(0), translateX: 18, translateY: -18, offset: 0, delay: 10, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-8').get(0), translateX: 36, translateY: -18, offset: 0, delay: 60, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-9').get(0), translateX: 18, translateY: -36, offset: 0, delay: 88, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-10').get(0), translateX: 54, translateY: -18, offset: 0, delay: 102, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-11').get(0), translateX: 36, translateY: 100, offset: 0, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-12').get(0), translateX: 54, translateY: 100, offset: 0, delay: 20, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-13').get(0), translateX: 88, translateY: -18, offset: 0, delay: 54, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-14').get(0), translateX: 106, translateY: -18, offset: 0, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-15').get(0), translateX: 124, translateY: -18, offset: 0, delay: 78, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-16').get(0), translateX: 36, translateY: 118, offset: 0, delay: 12, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-17').get(0), translateX: 88, translateY: -36, offset: 0, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-18').get(0), translateX: -36, translateY: 64, offset: 0, delay: 95, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-19').get(0), translateX: -36, translateY: 64, offset: 0, delay: 33, easing: 'easeInOutQuint' })
                .add({ targets: parent.find('.circle-20').get(0), translateX: -36, translateY: 64, offset: 0, easing: 'easeInOutQuint' });
      
                function enterButton() {
                    if (buttonAnimation.reversed) buttonAnimation.reverse();
                    buttonAnimation.play();
                }
      
                function leaveButton() {
                    if (!buttonAnimation.reversed) buttonAnimation.reverse();
                    buttonAnimation.play();
                }
      
                buttonEl.addEventListener('mouseenter', enterButton, false);
                buttonEl.addEventListener('mouseleave', leaveButton, false);
            });
        });
    },
  
    lineShape: function() {
        $('.svg-shape').waypoint({
            handler: function(direction) {
                anime({
                    targets: '.line path',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutCubic',
                    delay: 250,
                    duration: 1200,
                    direction: "alternate",
                    loop: false
                })
                  
                this.destroy()
            },
  
            offset: '120%'
        });
    },
  
    customCursor: function() {
        $('a[href], .mc-chicken, .wip-heading h2 div').on('mouseenter', function() {
            $('.cursor').addClass('button-hover');
  
            $(this).on('mouseleave', function() {
                $('.cursor').removeClass('button-hover');
            });
        });
    },
  
    indexLoader: function() {
        if ($("#index-loader").length > 0) {
            var $this = $(".index-logo");
            $this.after("<span class='loading-circle'></span>");
  
             var indexLoaderLine = anime({
                targets: '.loading-circle',
                translateX: [
                    { value: ["-50", "-50%"], delay: 5850, duration: 650},
                ],
                translateY: [
                    { value: ["-50%", "-50%"], delay: 5850, duration: 650},
                ],
                scaleX: [
                    { value: [0, .025], delay: 200, duration: 500},
                    { value: [.025,1.5], delay: 1000, duration: 650},
                    { value: [1.5,0], delay: 3450, duration: 650},
                ],
                scaleY: [
                    { value: [0, .025], delay: 200, duration: 500},
                    { value: [.025,1.5], delay: 1000, duration: 650},
                    { value: [1.5,0], delay: 3450, duration: 650},
                ],
                left: [
                    { value: ["50%", "5%"], delay: 5750, duration: 500},
                ],
                top: [
                    { value: ["90%", "10%"], delay: 5750, duration: 500},
                ],
                easing: 'easeInOutCubic',
                elasticity: 500,
            });
  
             var indexLoaderLogo = anime({
                targets: '.index-logo',
                top:[
                    { value: ["30%", "45%"], delay: 200, duration: 600},
                    { value: ["45%","90%"], delay: 600, duration: 500}
                ],     
                scale: [
                    { value: [0, 1.5], delay: 200, duration: 600},
                    { value: [1.5,0], delay: 600, duration: 500},
                ],
                opacity: 1,
                easing: "easeInOutQuart",
                elasticity: 500,
            });
  
            $("#index-loader").delay(6300).fadeOut(400, function(){
                indexLoaderLine.pause();
                indexLoaderLogo.pause();
            });
        }
    },
  
    funZonePageInit: function() {
        if ($('.js-funzone').length) {
            funZoneMouseInit();
  
            $('#canvas-wrap').load("temp/canvas-bg.html", function(){
                funZoneCanvasInit();
            });
        }
    },
 
  
    lightSlider: function() {
        if ($('#lightSlider').length) {
            $('#lightSlider').lightSlider({
                item: 1,
                autoWidth: false,
                slideMove: 1, // slidemove will be 1 if loop is true
                slideMargin: 0,
  
                addClass: '',
                mode: 'fade',
                useCSS: true,
                cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
                easing: 'linear', //'for jquery animation',////
  
                speed: 400, //ms'
                auto: false,
                loop: true,
                slideEndAnimation: true,
                pause: 2000,
  
                keyPress: true,
                controls: true,
                prevHtml: '',
                nextHtml: '',
  
                rtl:false,
                adaptiveHeight:false,
  
                vertical:false,
                verticalHeight:500,
                vThumbWidth:100,
  
                thumbItem:10,
                pager: false,
                gallery: false,
                galleryMargin: 5,
                thumbMargin: 5,
                currentPagerPosition: 'middle',
  
                enableTouch:true,
                enableDrag:true,
                freeMove:true,
                swipeThreshold: 40,
  
                responsive : [],
  
                onBeforeStart: function (el) {},
                onSliderLoad: function (el) {},
                onBeforeSlide: function (el) {},
                onAfterSlide: function (el) {},
                onBeforeNextSlide: function (el) {},
                onBeforePrevSlide: function (el) {}
            });
        }
    },
  
    imgSlider: function() {
        if ($('#img-slider').length) {
            $('#img-slider').lightSlider({
                item: 1,
                autoWidth: false,
                slideMove: 1, // slidemove will be 1 if loop is true
                slideMargin: 0,
  
                addClass: '',
                mode: 'slide',
                useCSS: true,
                cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
                easing: 'linear', //'for jquery animation',////
  
                speed: 400, //ms'
                auto: false,
                loop: true,
                slideEndAnimation: true,
                pause: 2000,
  
                keyPress: false,
                controls: false,
                prevHtml: '',
                nextHtml: '',
  
                rtl:false,
                adaptiveHeight:false,
  
                vertical:false,
                verticalHeight:500,
                vThumbWidth:100,
  
                thumbItem:10,
                pager: true,
                gallery: false,
                galleryMargin: 5,
                thumbMargin: 5,
                currentPagerPosition: 'middle',
  
                enableTouch:true,
                enableDrag:true,
                freeMove:true,
                swipeThreshold: 40,
  
                responsive : [],
  
                onBeforeStart: function (el) {},
                onSliderLoad: function (el) {},
                onBeforeSlide: function (el) {},
                onAfterSlide: function (el) {},
                onBeforeNextSlide: function (el) {},
                onBeforePrevSlide: function (el) {}
            });
        }
    },
  
    reloadScripts: function() {
        if ($('.reload-scripts').length) {
            $('.reload-scripts script').each(function() {
                var oldScript = this.getAttribute('src');
                $(this).remove();
                var newScript;
                newScript = document.createElement('script');
                newScript.type = 'text/javascript';
                newScript.src = oldScript;
                document.getElementsByClassName('reload-scripts')[0].appendChild(newScript);
            });
        }
    },
  
    mobileAccordion: function() {
        $('.approach-item').click(function(){
            var $this = $(this);
            var $thisContent = $('.approach-content', this);
  
            if ($this.hasClass('active')) {
                $this.removeClass('active');
            } else {
                $('.approach-item').removeClass('active');
                $this.addClass('active');
            }
        });
    },
  
    homepage: function() {
        if ($('.js-homepage')) {
  
            if ($(window).width() > 1005){
                var hpDesktopSlider = $('.portfolio-item a').hover(function(){
                    var $this = $(this).closest('.portfolio-item').toggleClass('active');
                    var $panel = $(this).closest('.portfolio-item').find('.portfolio-item-img').toggleClass('show');
  
                    if ($('.portfolio-item').hasClass('active')) {
                        $('.portfolio-wrapper').addClass('selected');
                        $('.portfolio').addClass('entered');
                    } else {
                        $('.portfolio-wrapper').removeClass('selected');
                        $('.portfolio').removeClass('entered');
                    }
                });
            }
             $('.portfolio-item a').hover(
                function(){
                  var hpLink = $(this).attr('href');
                    $('.hp-footer h6[data-projectname = '+hpLink+']').addClass('hovered');
                    $('.hp-footer h6[data-projectname != '+hpLink+']').removeClass('hovered');
                },
                function(){
                    $(".hp-footer h6").removeClass("hovered");
                }
              );   
             
  
            if ($(window).width() < 1006){
                var getElementsInArea = (function(docElm){
                    var viewportHeight = docElm.clientHeight;
  
                    return function(e, opts){
                        var found = [], i;
  
                        if( e && e.type == 'resize' )
                            viewportHeight = docElm.clientHeight;
  
                        for( i = opts.elements.length; i--; ){
                            var elm    = opts.elements[i],
                            pos        = elm.getBoundingClientRect(),
                            topPerc    = pos.top    / viewportHeight * 100,
                            bottomPerc = pos.bottom / viewportHeight * 100,
                            middle     = (topPerc + bottomPerc)/2,
                            inViewport = middle > opts.zone[1] && 
                            middle < (100-opts.zone[1]);
  
                            elm.classList.toggle(opts.markedClass, inViewport);
  
                            if( inViewport )
                                found.push(elm);
                        }
                    };
                })(document.documentElement);
  
  
                window.addEventListener('scroll', work)
                window.addEventListener('resize', work)
  
                function work(e){
                        getElementsInArea(e, {
                            elements    : document.querySelectorAll('.portfolio-item'), 
                            markedClass : 'in-middle',
                            zone        : [20, 20] // percentage distance from top & bottom
                    });
                }
            }  
            if ($(window).width() > 1005){
                // lettering
                $('.index-copy .letter-row-1, .index-copy .letter-row-2').each(function(){
                    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                });              
                var splashScreen = anime.timeline({loop: false});
  
                splashScreen
                .add({
                    targets: '.index-copy .letter',
                    scale: [0, 1],
                    duration: 600,
                    opacity: 1,
                    elasticity: 200,
                    delay: function(el, i) {
                        return 2200 + (i * 15)
                    }
                }).add({
                    targets: '.index-copy .letter',
                    scale: [1, .25],
                    opacity: 0,
                    rotateZ: 0,
                    duration: 1000,
                    elasticity: 0,
                    delay: function(el, i) {
                        return 1500 + (i * 11)
                    }
                });
            }
            if ($(window).width() < 1005){
                // lettering
          
                var splashScreen = anime.timeline({loop: false});
  
                splashScreen
                .add({
                    targets: '.index-copy',
                    duration: 800,
                    scaleX: [.8, 1], 
                    opacity: [0, 1],
                    translateX: ["-50%", "-50%"],
                    translateY: ["50%", "-50%"],
                    rotateZ: [3, 0],
                    elasticity: 200,
                    delay: 2000, 
                }).add({
                    targets: '.index-copy ',
                    scaleX: [1, .8],
                    opacity: 0,
                    rotateZ: [0, 0],
                    translateX: ["-50%", "-50%"],
                    translateY: ["-50%", "-150%"],
                    duration: 1300,
                    elasticity: 0,
                    delay: 2900,
                });
            }
        }
    },
  
    hamburgerMenu: function() {
        var stickyOffset = $('.mc-chicken').offset();
        var $contentDivs = $('.dark');
  
        $(document).scroll(function() {
            $contentDivs.each(function() {
                var _thisOffset = $(this).offset();
                var _actPosition = _thisOffset.top - $(window).scrollTop();
  
                if (_actPosition < 60 && _actPosition + $(this).height() > 0) {
                    $('.mc-chicken').addClass('light');
                    return false;
                }
                $('.mc-chicken').removeClass('light');
            });
        });
    },
 
    contacts: function() {
        if ($("#main-form").length > 0) {
          console.log( "ready!" );
 
          //WEBSITE BUDGET SLIDER
          var websiteBudgetSlider = document.getElementById('website-slider-budget'),
              websiteBudgetSliderInput = document.getElementById('website-slider-budget-input');
 
          noUiSlider.create(websiteBudgetSlider, {
            start: [5],
            connect: true,
            range: {
                'min': [5],
                'max': [85]
            },
            step: 10,
            format: wNumb({
            decimals: 0,
                prefix: '$',
            suffix: 'k',
          })
          });
 
          websiteBudgetSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
            var secondValue = parseInt(unencoded) + parseInt(10);
            console.log(values);
            websiteBudgetSliderInput.value = values + ' - ' + secondValue + 'k';
 
          });
 
          //ECOMMERCE BUDGET SLIDER
          var ecommerceBudgetSlider = document.getElementById('ecommerce-slider-budget'),
              ecommerceBudgetSliderInput = document.getElementById('ecommerce-slider-budget-input');
 
          noUiSlider.create(ecommerceBudgetSlider, {
            start: [5],
            connect: true,
            range: {
                'min': [5],
                'max': [85]
            },
            step: 10,
            format: wNumb({
            decimals: 0,
                prefix: '$',
            suffix: 'k',
          })
          });
 
          ecommerceBudgetSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
            var secondValue = parseInt(unencoded) + parseInt(10);
            ecommerceBudgetSliderInput.value = values + ' - ' + secondValue + 'k';
          });
 
          //BRAND BUDGET SLIDER
          var brandBudgetSlider = document.getElementById('brand-slider-budget'),
              brandBudgetSliderInput = document.getElementById('brand-slider-budget-input');
 
          noUiSlider.create(brandBudgetSlider, {
            start: [5],
            connect: true,
            range: {
                'min': [5],
                'max': [85]
            },
            step: 10,
            format: wNumb({
            decimals: 0,
                prefix: '$',
            suffix: 'k',
          })
          });
 
          brandBudgetSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
            var secondValue = parseInt(unencoded) + parseInt(10);
            brandBudgetSliderInput.value = values + ' - ' + secondValue + 'k';
          });
 
          //WEBSITE WEEKS SLIDER
          var websiteWeekSlider = document.getElementById('website-slider-week');
          var websiteWeekInput = document.getElementById('website-slider-week-input');
 
 
          noUiSlider.create(websiteWeekSlider, {
            start: [4],
            connect: true,
            range: {
                'min': 4,
                'max': 50
            },
            step: 1,
            format: wNumb({
            decimals: 0,
            suffix: ' weeks',
          })
          });
 
          websiteWeekSlider.noUiSlider.on('update', function( values, handle ) {
            var value = values[handle];
 
            if ( handle ) {
              websiteWeekInput.value = value;
            }else{
              websiteWeekInput.value = value;
            }
          });
 
          //ECOMMERCE WEEKS SLIDER
          var ecommerceWeekSlider = document.getElementById('ecommerce-slider-week');
          var ecommerceWeekInput = document.getElementById('ecommerce-slider-week-input');
 
 
          noUiSlider.create(ecommerceWeekSlider, {
            start: [4],
            connect: true,
            range: {
                'min': 4,
                'max': 50
            },
            step: 1,
            format: wNumb({
            decimals: 0,
            suffix: ' weeks',
          })
          });
 
          ecommerceWeekSlider.noUiSlider.on('update', function( values, handle ) {
            var value = values[handle];
 
            if ( handle ) {
              ecommerceWeekInput.value = value;
            }else{
              ecommerceWeekInput.value = value;
            }
          });
 
          ecommerceWeekInput.addEventListener('change', function(){
            ecommerceWeekSlider.noUiSlider.set([null, this.value]);
          });
 
          //BRAND WEEKS SLIDER
          var brandWeekSlider = document.getElementById('brand-slider-week');
          var brandWeekInput = document.getElementById('brand-slider-week-input');
 
 
          noUiSlider.create(brandWeekSlider, {
            start: [4],
            connect: true,
            range: {
                'min': 4,
                'max': 50
            },
            step: 1,
            format: wNumb({
            decimals: 0,
            suffix: ' weeks',
          })
          });
 
          brandWeekSlider.noUiSlider.on('update', function( values, handle ) {
            var value = values[handle];
 
            if ( handle ) {
              brandWeekInput.value = value;
            }else{
              brandWeekInput.value = value;
            }
          });
 
          brandWeekInput.addEventListener('change', function(){
            brandWeekSlider.noUiSlider.set([null, this.value]);
          });
 
          //OPEN FORM GLOBAL
          $('.js-close').click(function(){
            $('section.main-type').fadeOut();
          });
 
          // toggle select input list 
          $('.js-form-link').click(function () {
            $('.js-form-link').removeClass("selected");
            $(this).addClass("selected");
          });
          $('.js-show-section').click(function () {
            $('.js-show-section').removeClass("selected");
            $(this).addClass("selected");
          });
 
          //SHOW PROPER FORM (SECTION)
          $('.js-show-section').click(function(){
            var sectionName = $(this).data('form');
 
            $('section.main-type').fadeOut();
             
            $('section#'+sectionName+'').find('.js-form-link-main-data').val(sectionName);
            $('section#'+sectionName+'').fadeIn(function(){
              $('html, body').animate({
                scrollTop: $('section#'+sectionName+'').offset().top
              }, 600, "easeInOutQuart");
            });
          });
           
          //SCROLL TO ANCHOR
          $(".js-form-link").on('click', function (event) {
              event.preventDefault();
              var $anchorValue = $(this).data("anchor");
 
              setTimeout(function(){
                  $('html, body').animate({
                    scrollTop: $('div#'+$anchorValue+'').offset().top
                  }, 600, "easeInOutQuart");
                  return false;
              }, 500);
          });
 
          //INSERT VALUE IN FORM AS SUB-CATEGORY TYPE
            $('.js-form-link').click(function(){
              var subCategory = $(this).text();
              $(this).parent().parent().find('.js-form-link-data').val(subCategory);
            });
 
          //FORM VALIDATION AND SUBMIT
 
          $.validate({
            modules : 'security',
            onError : function($form) {
              $('html, body').animate({
                scrollTop: $('.form-error').offset().top
              }, 500);
            },
            onSuccess : function($form) {
              if(($form).attr('id') !== 'form-4'){
                  $.ajax({
                    type: "POST", 
                    url: "contact_me.php",
                    data: $form.serialize(),
                    success: function(){
                      $('.js-form-response').addClass('sent');
                    //   $('.js-form-response').html('<h2>Hoooray!</h2> <p>It is a pleasure to meet ya! Give us a day and we will schedule our first date.</p><a class="bs-button btn-small" data-linkName="go home" href="/"><span data-hover="go home">go home</span></a><h6>Check out our creative channels</h6><ul class="social"><li class="dribbble"><a href="#" target="_blank"><span>Dribbble</span><img src="img/social/social-dribbble-loop.gif" alt="Dribbble"></a><li><li class="behance"><a href="#" target="_blank"><span>Behance</span><img src="img/social/social-behance-loop.gif" alt="Behance"></a><li><li class="instagram"><a href="#" target="_blank"><span>instagram</span><img src="img/social/social-instagram-loop.gif" alt="Instagram"></a><li></ul>');
                    }
                });
              }else{
                $.ajax({
                  type: "POST",
                  url: "contact_me.php",
                  data: $form.serialize(),
                  success: function(){
                    $('.js-form-response').addClass('sent');
                    // $('.js-form-response').html('<h2>Hoooray!</h2> <p>It is a pleasure to meet ya! Give us a day and we will schedule our first date.</p><a class="bs-button btn-small" data-linkName="go home" href="/"><span data-hover="go home">go home</span></a><h6>Check out our creative channels</h6><ul class="social"><li class="dribbble"><a href="#" target="_blank"><span>Dribbble</span><img src="img/social/social-dribbble-loop.gif" alt="Dribbble"></a><li><li class="behance"><a href="#" target="_blank"><span>Behance</span><img src="img/social/social-behance-loop.gif" alt="Behance"></a><li><li class="instagram"><a href="#" target="_blank"><span>instagram</span><img src="img/social/social-instagram-loop.gif" alt="Instagram"></a><li></ul>');
                  }
                });
              }
            },
          });
 
          $('body').on('click', '.js-remove-msg', function(){
            $('.js-form-response').text('');
          });
 
          // FORM PAGER HIGLIGHTING ITEM
          $(document).on("scroll", onScroll);
          //smoothscroll
          $('.form-pager a[href^="#"]').on('click', function (e) {
              e.preventDefault();
              $(document).off("scroll");
 
              $('a').each(function () {
                  $(this).removeClass('active');
              })
              $(this).addClass('active');
 
              var target = this.hash,
                  menu = target;
              $target = $(target);
              $('html, body').stop().animate({
                  'scrollTop': $target.offset().top+2
              }, 600, 'easeInOutQuart', function () {
                  window.location.hash = target;
                  $(document).on("scroll", onScroll);
              });
          });
          function onScroll(event){
            var scrollPos = $(document).scrollTop();
            $('.form-pager a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.form-pager-1 ul li a').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
          }
        }
    }
}
  
function funZoneCanvasInit() {
    var canvas, gl; // canvas and webgl context
    var shaderScript;
    var shaderSource;
    var vertexShader; // Vertex shader.  Not much happens in that shader, it just creates the vertex's to be drawn on
    var fragmentShader; // this shader is where the magic happens. Fragment = pixel.  Vertex = kind of like "faces" on a 3d model.  
    var buffer;
    /* Variables holding the location of uniform variables in the WebGL. We use this to send info to the WebGL script. */
    var locationOfTime;
    var locationOfResolution;
    var startTime = new Date().getTime(); // Get start time for animating
    var currentTime = 0;
  
    function funZoneCanvasWork() {
        // standard canvas setup here, except get webgl context
        canvas = document.getElementById('glscreen');
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        // kind of back-end stuff
        buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER, 
            new Float32Array([
                    -1.0, -1.0, 
                    1.0, -1.0, 
                    -1.0,  1.0, 
                    -1.0,  1.0, 
                    1.0, -1.0, 
                    1.0,  1.0]), 
            gl.STATIC_DRAW
        ); // ^^ That up there sets up the vertex's used to draw onto. I think at least, I haven't payed much attention to vertex's yet, for all I know I'm wrong.
        shaderScript = document.getElementById("2d-vertex-shader");
        shaderSource = shaderScript.text;
        vertexShader = gl.createShader(gl.VERTEX_SHADER); //create the vertex shader from script
        gl.shaderSource(vertexShader, shaderSource);
        gl.compileShader(vertexShader);
        shaderScript   = document.getElementById("2d-fragment-shader");
        shaderSource   = shaderScript.text;
        fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); //create the fragment from script
        gl.shaderSource(fragmentShader, shaderSource);
        gl.compileShader(fragmentShader);
        program = gl.createProgram(); // create the WebGL program.  This variable will be used to inject our javascript variables into the program.
        gl.attachShader(program, vertexShader); // add the shaders to the program
        gl.attachShader(program, fragmentShader); // ^^
        gl.linkProgram(program);     // Tell our WebGL application to use the program
        gl.useProgram(program); // ^^ yep, but now literally use it.
        locationOfResolution = gl.getUniformLocation(program, "u_resolution");
        locationOfTime = gl.getUniformLocation(program, "u_time");
        gl.uniform2f(locationOfResolution, canvas.width, canvas.height);
        gl.uniform1f(locationOfTime, currentTime);
        render();
    }
  
    function render() {
        var now = new Date().getTime();
        currentTime = (now - startTime) / 1000; // update the current time for animations
        gl.uniform1f(locationOfTime, currentTime); // update the time uniform in our shader
        window.requestAnimationFrame(render, canvas); // request the next frame
        positionLocation = gl.getAttribLocation(program, "a_position"); // do stuff for those vertex's
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
  
    window.addEventListener('load', function(event){
        // funZoneCanvasWork();
    });
  
    window.addEventListener('resize', function(event){
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        locationOfResolution = gl.getUniformLocation(program, "u_resolution");
    });
  
    funZoneCanvasWork();
}
  
function funZoneMouseInit() {
    var currentX = 0,
        currentY = 0,
        animationSpeed = 5,
        count = 0,
        windowW = $(this).width(),
        windowH = $(this).height(),
        hovered = false,
        pulsed = false,
        activeButton = 0,
        loaded = false;
  
    var x = 0,
        y = 0,
        dot = $(".cursor"),
        path = dot.find(".dot-path");
  
    $(window).on("mousemove", function(e) {
        loaded = true;
        if (!hovered) {
            x = e.pageX;
            y = e.pageY;
        }
    });
  
    function move() {
        count++;
          
        if (!loaded) {
            x = windowW / 2 + Math.sin(count / 20) * (windowW / 4);
            y = windowH / 2;
        }
        var boxCenter = [
            dot.offset().left + dot.width() / 2,
            dot.offset().top + dot.height() / 2
        ];
  
        var angle =
            Math.atan2(x - boxCenter[0], -(y - boxCenter[1])) * (180 / Math.PI);
        var speedX = Math.abs(x - currentX),
            speedY = Math.abs(y - currentY),
            speed = Math.sqrt(speedX * speedX + speedY * speedY) * -1;
          
        if (speed > -1) {
            speed = 0;
        }
  
        var scale = speed / 500 + 1;
        var tailPos = speed / 10 + 150;
  
        if (tailPos < 0) {
            tailPos = 0;
        } else if (tailPos > 40) {
            tailPos = 50;
        }
        if (scale < 0.2) {
            scale = 0.2;
        }
        currentX += (x - currentX) / animationSpeed;
        currentY += (y - currentY) / animationSpeed;
         if (hovered) {
            angle = 0;
            scale = .2;
            tailPos = 50;
        }
        dot.css({
            transform:
                "translate(" +
                (currentX - 0) +
                "px, " +
                (currentY - 0) +
                "px) rotate(" +
                angle +
                "deg) scaleX(" +
                scale +
                ")"
        });
        path.attr({
            d:
                "M75,100 C88.8071187,100 100,88.8071187 100,75 C100,61.1928813 88.8071187,50 75,50 C61.1928813,50 50,61.1928813  " +
                tailPos +
                ",75 C50,88.8071187 61.1928813,100 75,100 Z"
        });
  
        window.requestAnimationFrame(move);
    }
  
    window.requestAnimationFrame(move);
      
    PageInits.customCursor();
}
  
PageInits.funZonePageInit();
PageInits.wowjs(); // init wow
PageInits.loadFooter('../temp/footer.html'); // load footer
PageInits.videoModal(); // video modal
PageInits.indexLoader();
PageInits.imageSwap(); // swap imafges on hover - approach section
PageInits.contactIcon(); // contact
PageInits.bottomWork(); // bottom work
PageInits.navigation.work(); // navigation
PageInits.navVideo(); // nav video
PageInits.shapeMorph(); // shape morph
PageInits.buttonHoverEffect(); // BS button hover effect
PageInits.lineShape(); // line drawing
PageInits.hamburgerMenu(); // hamburger menu
PageInits.contacts(); // hamburger menu
  
// smoothstate
$(function () {
    'use strict';
  
    PageInits.homepage(); 
 
    // mobile accordion
    if ($(window).width() < 1006) {
        PageInits.mobileAccordion();
    }
  
    PageInits.imgSlider();
    PageInits.lightSlider();
  
    var $page = $('#main'),
    options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
  
        // start
        onStart: {
            duration: 2550, // Duration of our animation
            render: function ($container) {
                // preloader animation
                $('body').addClass('loading');
 
                // loader logo
                var loadingLogo = anime.timeline({
                    loop: false
                });
  
                loadingLogo
                .add({
                    targets: '.loading .loader-logo span',
                    scale: [0, 1],
                    duration: 600,
                    opacity: 1,
                    elasticity: 300,
                    delay: function (el, i) {
                        return 450 + (i * 30)
                    }
                }).add({
                    targets: '.loading .loader-logo span',
                    scale: [1, 0],
                    opacity: 0,
                    translateY: 10,
                    duration: 600,
                    elasticity: 0,
                    delay: function (el, i) {
                        return 150 + (i * 20)
                    }
                });
  
                setTimeout(function () {
                    $('body').removeClass('loading');
                }, 2550);
  
                // Add CSS animation reversing class
                $container.addClass('is-exiting');
  
                // Restart  animation
                smoothState.restartCSSAnimations();
            }
        },
  
        // end
        onReady: {
            duration: 0,
  
            render: function ($container, $newContent) {
                $('html, body').animate({ scrollTop: 0 }, 0);
                // Remove CSS animation reversing class
                $container.removeClass('is-exiting');
  
                // Inject the new content
                window.location.href = 'contact-us.html';
            }
        },
  
        // re-triggering on ready
        onAfter: function ($container, $newContent) {
            PageInits.navigation.animation = null
            if ($(window).width() < 1006) {
                PageInits.mobileAccordion();
            }
  
            PageInits.homepage();
            PageInits.reloadScripts();
            PageInits.imgSlider();
            PageInits.lightSlider();
            PageInits.funZonePageInit(); // funzone init
            PageInits.imageSwap(); // swap imafges on hover - approach section
            PageInits.loadFooter('/temp/footer.html'); // load footer
            PageInits.wowjs(); // wowjs
            PageInits.videoModal(); // video modal
            PageInits.contactIcon();
            PageInits.navigation.work(); // navigation
            PageInits.navVideo(); // nav video
            PageInits.bottomWork(); // bottom work image link
            PageInits.shapeMorph(); // anime js svg animation 
            PageInits.buttonHoverEffect(); // bs button hover effect
            PageInits.lineShape(); // line shapes
            PageInits.customCursor(); // custom cursor
            PageInits.hamburgerMenu(); // hamburger menu
            PageInits.contacts();
        }
    },
  
    smoothState = $page.smoothState(options).data('smoothState');
});
 
////// CUSTOM EASINGS 
$.easing.jswing = $.easing.swing;
 
$.extend($.easing, {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert($.easing.default);
        return $.easing[$.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});