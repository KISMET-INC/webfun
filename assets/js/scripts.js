$(document).ready(function(){
    $('ul').hide(); 
    $('h1.new').hide();
    $('#portfolio').children().hide();
    
    /* Animate through letters of my name fading in and out */
    for(var i = 1; i<=16; i++){
        $(`h1.${i}`).animate({opacity: '1'}, 300).delay(i*100);
        $(`h1.${i}`).animate({opacity: '.2'},300);
        $(`h1.${i}`).animate({opacity: '1'},300, function() { $(`h1.${i}`).clearQueue()})
    }

    /* Animate lettrs again */
    $('h1').animate({opacity: '.5'},300);
    $('h1').animate({opacity: '1'},300,function() { $(`h1.${i}`).clearQueue()})

    /* Change 'software dev' to white */
    $('#full').animate({color: 'white'}, 3000);
    
    /* First logo pump to enlarge */
    $('img.front').animate({width: '+=60'}, 300);
    $('img.front').animate({width: '-=10px'}, 200);
    $('img.front').animate({width: '+=10px'}, 100);

    /* Recurring pump animation */
    setInterval(function() {
    $('img.pump').animate({width: '-=10px'}, 100).animate({width: '+=10px'}, 100)}, 5000);

    /* HOVER */
    $('button').mouseenter(function(){
        var type = $(this).attr('class')
        $(this).css('border', '2px solid #A6509B')
        $(`ul.${type}`).slideDown('fast');
        $(this).css('color','white').css('height','40px').css('font-size', "13px").css('font-family', 'Glegoo');
    })

    $('button').mouseleave( function(){
        var type = $(this).attr('class');
        $(this).css('border','none');
        $(`ul.${type}`).slideUp('fast');
        $(this).css('color','rgb(97, 97, 97)').css('height','40px').css('font-size', "13px").css('font-family', "Jost")
    });

    /* CLICK */
    $('.port').click(function(){
        /* stop animated name animations */
        $('h1').stop();

        $('div.page1').css('border', '2px solid #422739')
        $('img.front').slideUp('fast');
        $('ul').slideUp('fast');

        /* Relative position so it can become lasting heder */
        $('#header').css('position', 'relative');
        $('div.navbar').css('position', 'relative');
        $('#full').css('position','relative');

        /* Animate header to tht etop */
        $('#header').animate({
            top: '0px',
            left: '-30px',
            fontSize:'11px'},500       
        );  
        $('#wrapper').animate ({
            height: '670px'
        })


        $('h1.new').show();
        $('h1').animate({ fontSize: '22px'},500);

        $('div.navbar').animate({left: '250px'}, 500);
        $('div.navbar').animate({top: '-60px'}, 300);
        $('.page1').animate({ height: '90px'},800);
        
        /* Remove items from landing page */
        $('#left').remove().delay(200);
        $('.front').remove();
        $('#animated_name').remove();
        $('#portfolio').children().show();
    });


    $('h1').mouseenter(function(){
        $(this).fadeOut('fast') 
        $(this).fadeIn('fast')
    });

    $('div.project_card img').mouseenter( function () {
        $(this).css('border','2px solid red');
    })

    $('div.project_card img').mouseleave( function () {
        $(this).css('border', 'none');
    })

    
});