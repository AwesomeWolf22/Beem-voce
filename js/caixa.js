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

    

});