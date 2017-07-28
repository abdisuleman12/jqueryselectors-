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

    
    
       // when that button is clicked
   $('#kevinNewFavorite').on('click', function (){
       // input value get's grapp 
        value = $("#button").val(); 
    
       $('#kevin').append('<li>' + value + '</li>');

});
        // when delete button is clicked 
    $('.deleteKevin').on('click', function () {
        // $(this) refers to the thing that was clicked on
        
        console.log('delete button was clicked: ', $(this))
        

        // <li class ='food'>Sushi
                        //<button class ='deleteKevin'>delete</button></li>
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        $(this).parent().remove();
        
        // $(this).parent.parent.remove /// removes everything on the favorite lists

    })


 
    

});