$(function(){

    $('a.go').click(function(e){

        e.preventDefault();
        var location = $(this).attr('goto');
        goto(location);

    });

    function goto(location){

        $('html,body').animate({scrollTop:$('#' + location).offset().top});
        
    }

});