$(window).scroll(() => {
    if ($('.container').offset().top > $(window).scrollTop() &
        $('.our-products').offset().top - $('header').innerHeight() < $(window).scrollTop())  {
            $('#header').children().removeClass('active');
            $('#catalog').addClass('active');
    }
    if ($(window).scrollTop() == 0)  {
        $('#header').children().removeClass('active');
        $('#main').addClass('active');
    }
    if ($('#how-it-works').offset().top - $('header').innerHeight() - 50 < $(window).scrollTop()) {
        $('#header').children().removeClass('active');
        $('#gallery').addClass('active');
    }
    if ($('#for-purchasers-block').offset().top - $('header').innerHeight() - 50 < $(window).scrollTop()) {
        $('#header').children().removeClass('active');
        $('#for-purchasers').addClass('active');
    }
    if ($('#contactsBlock').offset().top - $('header').innerHeight() - 50 < $(window).scrollTop()) {
        $('#header').children().removeClass('active');
        $('#contacts').addClass('active');
    }
    $('body').css({'background-position': 'center ' + $(window).scrollTop() * .5 + 'px'});
});

$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll:"vertical"

});

$('#main, #main-footer').click(function scrollTo() {
    window.scrollBy(0,-50);
    if (window.pageYOffset > 0) {requestAnimationFrame(scrollTo);}
});

$('#catalog, #catalog-footer').click(function scrollTo() {
    if (window.pageYOffset + 50 < $('.our-products').offset().top) {
        if (($('.our-products').offset().top - (window.pageYOffset + 50)) < 50) {
            window.scrollBy(0, $('.our-products').offset().top - (window.pageYOffset + 50));
            return;
        }
        window.scrollBy(0, 50);
        requestAnimationFrame(scrollTo);
    }
    if (window.pageYOffset + 50 > $('.our-products').offset().top) {
        if (((window.pageYOffset + 50) - $('.our-products').offset().top) < 50) {
            window.scrollBy(0, -((window.pageYOffset + 75) - $('.our-products').offset().top));
            return;
        }
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollTo);
    }
});

$('#gallery, #main-gallery').click(function scrollTo() {
    if (window.pageYOffset + 50 < $('#how-it-works').offset().top) {
        if (($('#how-it-works').offset().top - (window.pageYOffset + 50)) < 50) {
            window.scrollBy(0, $('#how-it-works').offset().top - (window.pageYOffset + 50));
            return;
        }
        window.scrollBy(0, 50);
        requestAnimationFrame(scrollTo);
    }
    if (window.pageYOffset + 50 > $('#how-it-works').offset().top) {
        if (((window.pageYOffset + 50) - $('#how-it-works').offset().top) < 50) {
            window.scrollBy(0, -((window.pageYOffset + 50) - $('#how-it-works').offset().top));
            return;
        }
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollTo);
    }
});

$('#contacts, #main-contacts').click(function scrollTo() {
    if  ($(window).scrollTop() == $(document).height() - $(window).height() - 1)
    {
        $('#contacts').css('color', '#000');
        return;
    }
    if (window.pageYOffset + 50 < $('#contactsBlock').offset().top) {
        if (($('#contactsBlock').offset().top - (window.pageYOffset + 50)) < 50) {
            window.scrollBy(0, $('#contactsBlock').offset().top - (window.pageYOffset + 50));
            return;
        }
        window.scrollBy(0, 50);
        requestAnimationFrame(scrollTo);
    }
    if (window.pageYOffset + 50 > $('#contactsBlock').offset().top) {
        if (((window.pageYOffset + 50) - $('#contactsBlock').offset().top) < 50) {
            window.scrollBy(0, -((window.pageYOffset + 50) - $('#contactsBlock').offset().top));
            return;
        }
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollTo);
    }
});

$('#for-purchasers, #main-for-purchasers').click(function scrollTo() {
    if (window.pageYOffset + 50 < $('#for-purchasers-block').offset().top) {
        if (($('#for-purchasers-block').offset().top - (window.pageYOffset + 50)) < 50) {
            window.scrollBy(0, $('#for-purchasers-block').offset().top - (window.pageYOffset + 50));
            return;
        }
        window.scrollBy(0, 50);
        requestAnimationFrame(scrollTo);
    }
    if (window.pageYOffset + 50 > $('#for-purchasers-block').offset().top) {
        if (((window.pageYOffset + 50) - $('#for-purchasers-block').offset().top) < 50) {
            window.scrollBy(0, -((window.pageYOffset + 50) - $('#for-purchasers-block').offset().top));
            return;
        }
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollTo);
    }
});

let init = function() {
    var myMap = new ymaps.Map("map", {
            center: [53.915507, 27.569808],
            zoom: 16
        });
    var placemark = new ymaps.Placemark([53.915507, 27.569808],
        {hintContent: 'ИП Потапов',  balloonContent: 'г. Минск, пр-т Машерова 11. ИП Потапов' }
    );
    myMap.geoObjects.add(placemark);
}

ymaps.ready(init);
