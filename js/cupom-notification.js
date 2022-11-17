$(function(){

    $('.cupom.initial').show();

    var nbrNot = $('#cupom').text();
    var show = false;

    $('section.cestas .circle').click(function(){

        $('.cupom.click').show();
        show = true;

    });

    $('.cupom .close').click(function(){

        $('.cupom').hide();
        if(show){
            $('#cupom').text(0);
        }

    });

});