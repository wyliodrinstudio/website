

function resize ()
{

        var w = $(window).width();
        if (w <= 992 && $('.p1').children().length > 1) {
            $('.ip1').prependTo( $('.p1') );
            //console.log("Merge");
        } else if (w > 992 && $('.p1').children().length > 1) {
            $('.dp1').prependTo( $('.p1') );
        }
}

jQuery( document ).ready(function() {

AOS.init({disable: 'mobile'});

var $window = $(window);

	

resize ();


	
//menuscrol
//jQuery to collapse the navbar on scroll
jQuery(window).scroll(function() {
    if (jQuery(".navbar").offset().top > 50) {
        jQuery(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        jQuery(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(function() {
    jQuery('a.page-scroll').bind('click', function(event) {
        var jQueryanchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(jQueryanchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



 $(window).on('resize', resize);

// console.log (window.localStorage.getItem ('wyliodrin.regulation'));
// cookies
if (window.localStorage.getItem ('wyliodrin.regulation') !== 'true')
{
    $('#note').show ();
}

$('#note .agree').click (function ()
{
    window.localStorage.setItem ('wyliodrin.regulation', 'true');
    $('#note').hide ();
});

//counter	
//jQuery('.counter').counterUp({
//                delay: 10,
//                time: 1000
//            });	

 });
 



//efecte fate slide etc cu data-aos...



//top slider text 
//jQuery("#slideshow > div:lt(1)").shuffleLetters();

jQuery("#slideshow > div:gt(0)").hide();


setInterval(function() { 
  jQuery('#slideshow > div:first')
	.fadeOut(500)
	.next()
    .fadeIn(500)
	//.shuffleLetters()
    .end()
    .appendTo('#slideshow');
},  4000);

//hide menu on click

if($(window).width() < 1001)
{
$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});
}







/* detect touch */
if("ontouchstart" in window){
    document.documentElement.className = document.documentElement.className + " touch";
}
if(!$("html").hasClass("touch")){
    /* background fix */
    $(".parallax").css("background-attachment", "fixed");
}

/* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() > h){
            $(this).closest(".fullscreen").addClass("overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
    var windowH = $(window).height();
    $(".background").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax") && !$("html").hasClass("touch")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();

/* set parallax background-position */
function parallaxPosition(e){
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function(i){
        var path = $(this);
        var height = path.height();
        var top = path.offset().top;
        var bottom = top + height;
        // only when in range
        if(bottomWindow > top && topWindow < bottom){
            var imgW = path.data("resized-imgW");
            var imgH = path.data("resized-imgH");
            // min when image touch top of window
            var min = 0;
            // max when image touch bottom of window
            var max = - imgH + heightWindow;
            // overflow changes parallax
            var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
            top = top - overflowH;
            bottom = bottom + overflowH;
            // value with linear interpolation
            var value = min + (max - min) * (currentWindow - top) / (bottom - top);
            // set background-position
            var orizontalPosition = path.attr("data-oriz-pos");
            orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
            $(this).css("background-position", orizontalPosition + " " + value + "px");
        }
    });
}
if(!$("html").hasClass("touch")){
    $(window).resize(parallaxPosition);
    //$(window).focus(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
}



function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function getPlatform ()
{
    var platform = null;
    var osMatch = navigator.platform.match(/(Win|Mac|Linux)/);
    var arm = navigator.platform.match(/(arm)/);
    var iphone = navigator.platform.match(/(iPhone)/);
    var os = ((osMatch && osMatch[1]) || '').toLowerCase ();
    var arch = navigator.userAgent.match(/x86_64|Win64|WOW64/) || navigator.cpuClass === 'x64' ? 'x64' : 'x86';
    var chrome = navigator.userAgent.match(/CrOS/);
    if (chrome)
    {
        platform = 'chromeos';
    }
    else
    {
        if (arch === 'x86') arch = '32';
        else arch = '64';
        if (os == 'mac')
        {
            platform = 'mac64';
        }
        else
        {
            platform = os + arch;
        }
        if (!navigator.platform || arm || iphone) platform = 'arm';
    }
    return platform;
}
