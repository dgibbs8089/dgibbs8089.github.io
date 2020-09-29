/* javascript for nav trigger functionality*/

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

/* contact form animations */

$('.contact-form').find('.form-control').each(function() {
    var targetItem = $(this).parent();
    if ($(this).val()) {
        $(targetItem).find('label').css({
        'top': '10px',
        'fontSize': '14px'
        });
    }
    })
    $('.contact-form').find('.form-control').focus(function() {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
        'top': '10px',
        'fontSize': '14px'
    }, 300);
    })
    $('.contact-form').find('.form-control').blur(function() {
    if ($(this).val().length == 0) {
        $(this).parent('.input-block').removeClass('focus');
        $(this).parent().find('label').animate({
        'top': '25px',
        'fontSize': '18px'
        }, 300);
    }
    })