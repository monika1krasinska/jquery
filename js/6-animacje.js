 'use strict';
$(function(){
   
//    $('p').click(function(){
////        alert("Hide skończony");
//        $(this).hide(4000).show(3000);
//    })
//    $("h1").fadeOut(3000).fadeIn(3000);
//    $('h2').slideUp(3000).slideDown(3000);
    function animacja (){
        console.log("No i dotarliśmy do końca animacji! Tu się wywołuje funkcja callback");
        $('h3').animate({"font-size":"1rem","margin-left": "0px"},3000);
    }
    $ ('h3').animate({"font-size":"36em","margin-left": "100px"},4000,animacja); 
})
