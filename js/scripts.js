$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 30;
        $('html, body').animate({scrollTop: destination}, 600);
        return false;
    });

    $(".menu__burger").on('click', function () {
        $(this).parent('#menu').find('.block-menu').toggleClass('active')
    })

    $('.input-control').on('focus', function () {
        $(this).parent('.input-block').find('.input-placeholder').addClass('active')
    })

    $('.input-control').on('focusout', function () {
        if (this.value.length === 0) {
            $(this).parent('.input-block').find('.input-placeholder').removeClass('active')
        }
    })

    $('.list').on('click', function () {
        $(this).toggleClass('active')

        if ($(this).hasClass('active')) {
            $(this).find('.list-drop').fadeIn()
        } else {
            $(this).find('.list-drop').fadeOut()
        }
    })


    $('.list-drop ul li').on('click', function () {
        $(this).parents('.list').find('.list-title').text($(this).text())
    })

    $(".js-range-slider").ionRangeSlider({
        hide_min_max: true,
        from: 60

    });




    $('.javascr__main').on('mouseup', function () {
        const ancor = $('.irs-single').text()

        if( ancor < 32){
            $('.range-text').text('Не владею')
        } else if (ancor > 32 && ancor < 55){
            $('.range-text').text('Использую готовые решения')
        } else if (ancor > 55 && ancor < 78){
            $('.range-text').text('Использую готовые решения и умею их переделывать')
        } else if (ancor > 78 && ancor < 100){
            $('.range-text').text('Пишу сложный JS с нуля')
        }
    })






})

