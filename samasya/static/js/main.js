$("document").ready(function(){
   
    clock=function(){    
        // Instantiate a counter
        FlipClock($('.clock'), 15, {
            clockFace: 'Counter',
            autoStart: true,
            countdown: true
        });
    }

    

   /* stc = setInterval(function(){
        
    },15000);//changed 15500*/

   

});
