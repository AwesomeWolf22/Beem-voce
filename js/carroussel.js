$(function(){

    //console.log($('.carroussel').length)

    for(let i = 0; i < $('.carroussel').length; i++){

        console.log(i);

        $('.carroussel'+'#c'+ i + '').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    },
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    },
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true
                    }
                }
            ]
        });

    }

    

    

    
    
    
    

    


    

});