
$(document).ready(function(){
    $('.images').height($(window).height());
    $('.images').width($(window).width()+18);
});

var urlArray=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];

var linkCons = "img/";
 var i = 2;
 setInterval(function() {
    $('.images').attr('src', linkCons  + ((i == 6) ? i = 1 : (i++)) +".jpg");    
 }, 4000);