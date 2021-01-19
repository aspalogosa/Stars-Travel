function initMap() {
    const starsTravel = {
        lat: 42.6591329,
        lng: 23.282771
    };
    const map = new google.maps.Map(
        document.getElementById("map"), {
            zoom: 15,
            center: starsTravel,
            scrollwheel: false,
            draggable: false,

        });
    const icon = 'http://localhost/Stars-Travel/resources/images/contacts/pointer.png';

    const marker = new google.maps.Marker({
        position: starsTravel,
        map: map,
        title: 'Cloxter',
        icon: icon,

    });



    google.maps.event.addListener(map, 'bounds_changed', onBoundsChanged);

    function onBoundsChanged() {
        if ($(map.getDiv()).children().eq(0).height() == window.innerHeight &&
            $(map.getDiv()).children().eq(0).width() == window.innerWidth) {
            map.scrollwheel = true;
            map.draggable = true;
        } else {
            map.scrollwheel = false;
            map.draggable = false;
            map.setCenter(marker.getPosition());
            map.zoom = 15;
        }
    }
};



//  Header change on scroll

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('change-nav')
            $('.header-box').addClass('change-nav')
            $('.hiding-div').addClass('show')
        } else {
            $('.navbar').removeClass('change-nav')
            $('.header-box').removeClass('change-nav')
            $('.hiding-div').removeClass('show')
        }
    });
});


// BX-Slider
$(document).ready(function() {
    $('.slider').bxSlider({
        pager: false,
        auto: true,
        autoHover: true
    });
});

$(document).ready(function() {
    $('.slider-bg').bxSlider({
        pager: false,
        auto: true,
        autoHover: true,
    });
});

// Fancybox
$('#fancybox-trigger').on('click', function() {
    $.fancybox.open($('[data-fancybox="gallery"]'), {

    });
});


$(document).ready(function() {
    $(".type-hotel").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    });
});