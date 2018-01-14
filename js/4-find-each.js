'use strict';
var body = $('body')
//zwraca jeden element o indexie =1
var par = body.find('p').eq(1);
console.log(par);
$('p').each(function(index) {
    console.log($(this));
    $(this).addClass("paragraf-" + index);
})