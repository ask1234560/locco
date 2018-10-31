$("document").ready(function(){

    $('body').bind('copy paste',function(e) {
        e.preventDefault(); return false; 
    });

    /*$('body').bind('copy',function(e) { e.preventDefault(); return false; }); 

$('body').bind('paste',function(e) { e.preventDefault(); return false; });*/
   /* $("document").on("contextmenu",function(e){
        e.preventDefault();

    });*/
    
    document.addEventListener('contextmenu', event => event.preventDefault());


});    