$('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(window).scroll(function () {
    if ($(window).scrollTop() <= 20) {
        $('.navbar').css('background', 'black');
        $('.navbar-brand').css('color', 'white');
    } else {
        $('.navbar').css('background', 'transparent');
        $('.navbar-brand').css('color', 'black');
    }
});