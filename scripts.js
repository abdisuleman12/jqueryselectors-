console.log('script.js was loaded')


$(document).ready(function() {
    $('body').append('<h2> Hey there!! </h2>');
    $('body').prepend('<h2> I am going to the top!</h2>');
    $('li').css('color', 'blue');
    $('#kevin li').css('color', 'maroon');
    $('.food').css('color', 'pink');
    $('#chief').css('color', 'green'); //maroon
    //$('#kevin li:last').css('color', 'black'); //( ul ;first li: last-child).css()
    $( "ul" ).first().children().last().css( "color", "black" );
   $('#kevinNewFavorite').on('click', function (){
       console.log('button was clicked');
   });
    

});