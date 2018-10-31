$("document").ready(function(){
    var player=$("#player");
    var img=$("#play > img");
    var imgcon=$("#play");
     flaaudnew=0;

    var i=0;
    img.on("click",function(){
        if(player[0].paused){
            img[0].setAttribute("src","static/icons/f3.png");
            player[0].play();
            imgcon[0].style.background="green"; 
            flaaudnew=1;


        }
        else{
            img[0].setAttribute("src","static/icons/f4.png");
            
            player[0].pause();
            
            imgcon[0].style.background="red";
            flaaudnew=0;

        }


    });



    var c=1;
    audiofu=function(){

        if(c<11){
            player[0].setAttribute("src","static/audio/"+c+".mp3");
           /* img[0].setAttribute("src","static/icons/f3.png");
            
           imgcon[0].style.background="green";    */

           c+=1;
       }
       if(flaaudnew==1){
        player[0].play();

    }


}


});