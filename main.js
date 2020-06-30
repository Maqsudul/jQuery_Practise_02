$(document).ready(function(){
    $('.button').click(function(){
       $('p').hide();
    });
    $('.h-btn').click(function(){
       $('.hide').hide();
    });
    $('.btn-h').click(function(){
       $('span.odd').hide();
    });
    $('.butt').mouseover(function(){
       $('span.over').hide();
    });
    $('.but').keyup(function(){
       $('span.press').hide();
    });
    $('.visit').mouseover(function(){
        $('.come').show(),
        $('.left').hide();    
    });
    $('.visit').mouseleave(function(){
        $('.left').show(),
        $('.come, .checked').hide();
    });
    $('.visit').click(function(){
        $('.checked').show(),
        $('.come').hide();
    }); 
    $('.btn').click(function(){
        $('.on').toggle(); 
    });
    $('#dot').click(function(){
        $('div.dot').animate({right: '400px', top: '400px'});
    });
        $(".fade").click(function(){
        $("#first").fadeToggle(500);
        $("#second").fadeToggle(1000);
        $("#third").fadeToggle(2000);
    });
    $('#slide-ini').click(function(){
        $('#slide').slideToggle(1500);
    });
    $('#hide-call').click(function(){
        $('.hide-me').hide('slow', function(){
            alert('Yes!!! items are hidden');
        });
    });
    $('.up-down').click(function(){
        $('.up_down').css('color','blue')
        .slideUp(1000)
        .slideDown(1000)
        .slideUp(1000)
        .slideDown(1000);
    });
    $('.get').click(function(){
        alert('Value: ' + $('#get').val());
    });
    $('.set').click(function(){
        $('#st').val('Maqsudul Karim');           
    });
    $('.app').click(function(){
       $('ol').append('<li>Web Development</li>');
    });
});