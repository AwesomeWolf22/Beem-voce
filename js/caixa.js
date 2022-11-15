$(function(){

    var qtdProdutos = 0;

    var minCaixaPequena = 7;
    var minCaixaMedia = 10;
    var minCaixaGrande = 13;
    var maxCaixaGrande = 15;

    var qtdLvlUpCaixa = 0;

    var qtdProdutosText = 'evoluir!'

    var porcentagem = 0;

    var caixaPequena = $('.caixa.pequena');
    var caixaMedia = $('.caixa.media');
    var caixaGrande = $('.caixa.grande');

    var productsList=[];

    var nameRepeted

    $('#abriCarrinho').click(function(){
        $('.carrinho-container').show();
    });

    $('#close').click(function(){
        $('.carrinho-container').hide();
    });

    atualizarProduto();

    $('p.soma').click(function(){
        somarProduto();
    });

    $('p.sub').click(function(){
        subtrairProduto();
    });

    function somarProduto(){
        if(qtdProdutos < maxCaixaGrande){
            qtdProdutos++;
            atualizarProduto();
        }
    }

    function subtrairProduto(){
        if(qtdProdutos > 0){
            qtdProdutos--;
            atualizarProduto();
        }
    }

    function atualizarProduto(){ 

        if(qtdProdutos < minCaixaPequena) {
            qtdLvlUpCaixa = minCaixaPequena - qtdProdutos;

            caixaPequena.addClass('metade');
            caixaMedia.removeClass('metade');
            caixaGrande.removeClass('metade');

            caixaPequena.removeClass('completa');

        }else if(qtdProdutos < minCaixaMedia) {
            qtdLvlUpCaixa = minCaixaMedia - qtdProdutos;

            caixaPequena.removeClass('metade');
            caixaMedia.addClass('metade');
            caixaGrande.removeClass('metade');

            caixaPequena.addClass('completa');
            caixaMedia.removeClass('completa');

        }else if(qtdProdutos < minCaixaGrande) {
            qtdLvlUpCaixa = minCaixaGrande - qtdProdutos;
            qtdProdutosText = 'evoluir!'

            caixaPequena.removeClass('metade');
            caixaMedia.removeClass('metade');
            caixaGrande.addClass('metade');

            caixaPequena.removeClass('completa');
            caixaMedia.addClass('completa');
            caixaGrande.removeClass('completa');

        }else if(qtdProdutos < maxCaixaGrande) {
            qtdLvlUpCaixa = maxCaixaGrande - qtdProdutos;
            qtdProdutosText = 'atingir o limite'
            $('p#contagem').show();
            $('p#qtdMaximaProdutos').hide();

            caixaPequena.removeClass('metade');
            caixaMedia.removeClass('metade');
            caixaGrande.removeClass('metade');

            caixaMedia.removeClass('completa');
            caixaGrande.addClass('completa');

        }else{
            $('p#contagem').hide();
            $('p#qtdMaximaProdutos').show();
        }

        if(qtdProdutos == maxCaixaGrande){
            caixaGrande.css('animation','shake 0.5s');
        }

        if(qtdProdutos != maxCaixaGrande){
            caixaGrande.css('animation','none');
        }

        $('#qtdProdutosText').html(qtdProdutosText);
        
        $('#qtdProdutos').each(function(){
            $(this).html(qtdProdutos);
        });

        $('#qtdLvlUpCaixa').html(qtdLvlUpCaixa);

    }

    $('.product button#add').click(function(){

        var image = $(this).parent().parent().find('.img').clone();
        var productH2 = $(this).parent().find('h2').clone();
        var productprice = $(this).parent().find('span:last-of-type').clone();
        var productName = $(this).parent().find('h2').text();

        if($('.lista .product.'+productName).length>=1){
            let size = $('.lista .product.'+productName).find('#qtdOfThisProduct').text();
            size++;
            $('.lista .product.'+productName).find('#qtdOfThisProduct').html(size);
        }else{
            $('.lista').append('<div class="product"></div>');

            $('.lista .product').eq(qtdProdutos).addClass(productName)

            $('.lista .product').eq(qtdProdutos).append(image);

            $('.lista .product').eq(qtdProdutos).append('<div class="info"></div>');

            $('.lista .product').eq(qtdProdutos).find('.info').append(productH2);

            $('.lista .product').eq(qtdProdutos).find('.info').append(productprice);

            $('.lista .product').eq(qtdProdutos).find('.info').append('<span id="qtdOfThisProduct">1</span>')

            $('.lista .product').eq(qtdProdutos).find('.info').append('<button id="remove">Remover</button>');
        }

        somarProduto();

    });

    $('.lista').on('click','#remove',function(){

        if($(this).parent().find('span:last-of-type').text()==1){
            $(this).parent().parent().remove();
        }else{
            let nbr = $(this).parent().find('span:last-of-type').text();
            nbr--;
            $(this).parent().find('span:last-of-type').text(nbr);
        }

        subtrairProduto();
        
    });

    

});