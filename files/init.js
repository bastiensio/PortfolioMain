jQuery(document).ready(function () { 
    "use strict";
    cursor(); 
    intro_tabs(); 
    nav_bg();  
    mobile_menu(); 
    imgtosvg(); 
}); 
     
     

function intro_tabs() { 
    "use strict"; 
    var button = jQuery('.intro_content .main_filter ul li a'); 
    var tabList = jQuery('.intro_content .demo_list'); 
    button.on('click', function () { 
        var element = jQuery(this); 
        var elAttr = element.attr('data-tab'); 
        button.removeClass('current'); 
        tabList.removeClass('current'); 
        element.addClass('current'); 
        jQuery("#" + elAttr).addClass('current'); 
        return false; 
    }); 
}


function cursor() { 
    "use strict"; 
    var myCursor = jQuery('.mouse-cursor'); 
    if (myCursor.length) { 
        if ($("body")) { 
            const e = document.querySelector(".cursor-inner"), 
            t = document.querySelector(".cursor-outer"); 
            let n, i = 0, o = !1; 
            window.onmousemove = function (s) { o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX },
            $("body").on("mouseenter", "a, .cursor-pointer", 
            
            function () { 
            e.classList.add("cursor-hover"), 
            t.classList.add("cursor-hover") }), $("body").on("mouseleave", "a, .cursor-pointer", 
            function () { $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"),
            t.classList.remove("cursor-hover")) }), e.style.visibility = "visible", t.style.visibility = "visible" } } }; 
        


function nav_bg() { 
    "use strict"; 
    jQuery(window).on('scroll', function () { 
        var menu = jQuery('.topbar'); 
        var WinOffset = jQuery(window).scrollTop(); 
        if (WinOffset >= 100) { 
            menu.addClass('animate'); 
        } else { 
            menu.removeClass('animate'); 
        } 
    }); 
}




new WOW().init(); 
jQuery('.anchor_nav').onePageNav(); 

function mobile_menu() {
    "use strict"; 
    var hamburger = jQuery('.hamburger'); 
    var mobileMenu = jQuery('.mobile_menu .dropdown'); 
    hamburger.on('click', function () {
        var element = jQuery(this); 
        if (element.hasClass('is-active')) { 
            element.removeClass('is-active'); 
            mobileMenu.slideUp(); 
        } 
        else { 
            element.addClass('is-active'); mobileMenu.slideDown(); 
        }
        return false;
    }); 
    jQuery('.mobile_menu .dropdown .dropdown_inner ul li a').on('click', function () { 
        hamburger.removeClass('is-active'); 
        mobileMenu.slideUp(); 
        return false; 
    });
}


function imgtosvg() {
    "use strict"; jQuery('img.svg').each(function () {
        var jQueryimg = jQuery(this); 
        var imgClass = jQueryimg.attr('class'); 
        var imgURL = jQueryimg.attr('src'); 
        jQuery.get(imgURL, function (data) {
            var jQuerysvg = jQuery(data).find('svg'); 
            if (typeof imgClass !== 'undefined') { 
                jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg'); 
            }
            jQuerysvg = jQuerysvg.removeAttr('xmlns:a'); 
            jQueryimg.replaceWith(jQuerysvg);
        }, 'xml');
    });
}


 