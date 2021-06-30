jQuery('document').ready(function(){

    const menuBtnEl = $('.js-menu');
    mainNavEl = $('.js-mainHeader')

    menuBtnEl.on('click', function() {
        mainNavEl.toggleClass('menu-open');

        if($(this).attr('aria-label') == 'Открыть меню') {
            $(this).attr('aria-label','Скрыть меню');
        }
        else{
            $(this).attr('aria-label','Открыть меню');
        }
    });
});