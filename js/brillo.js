$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    /*let Nosotros = $('#nosotros').offset().top,
        Servicios = $('#servicios').offset().top,
        Galerias = $('#galerias').offset().top,
        Ubicacion = $('#ubicacion').offset().top;
        Contactos = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let Nosotros = $('#nosotros').offset().top,
        Servicios = $('#servicios').offset().top,
        Galerias = $('#galerias').offset().top,
        Ubicacion = $('#ubicacion').offset().top;
        Contactos= $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-nosotros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });

    $('#enlace-servicios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-galerias').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -100
        },600);
    });

    $('#enlace-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
    $('#enlace-contactos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
*/

});

