function process(){

    var sta=document.getElementById('status');
    //var sep=document.getElementById('sep');
    var sep=$("#sep");
    var cover=document.getElementById('cover');
    var ele = document.getElementsByClassName('panel');
    var rali = document.getElementsByName('answer'); 
    document.getElementById('mainh').style.display="none";
    document.getElementById('mainbody').style.display="block";
    var sp=$(".panel");
    var cou=$("#councon");
    var player_last=$("#player"); 
    asforclock=$("span#s2");
    voiforclock=$("span#s1");
    var data;
    var res;
    
    

    //var cont;
    for (let i=0;i<ele.length;i++)
    {

        ele[i].style.display="none";
    }

    un(0);
    rand();
    audiofu();
    clock();


    function ask(n)
    {
        var fl=0;
        for(let j=n*4;j<((n*4)+4);j++ )
        {
            fl++;
            if (rali[j].checked === true){
                fl=0;
                data={"question":(n+1),"answer":((j%4)+1)};
                res=call(data);
                if(res === null){
                    fl=0;

                    sta.innerText='Better luck next time 😝';
                    flaaudnew=0;
                    cover.style.display="none";

                    sep.fadeIn("medium");
                    cou[0].style.display="none";
                    player_last[0].pause();
                    break;


                }

                if (res===true)
                {if(n<9) //changed from 3
                    {
                        //ele[n].style.display="none";

                        sp.slideUp(600);
                        //sp[n].fadeOut(500);
                        un(n+1); 
                    }

                    else{ 
                        //clearInterval(stc);                        
                        //console.log("You won :)");
                        /*demo.innerText = 0 + "h "
                        + 0 + "m " + 0 + "s ";*/
                        sta.innerText="You won 😄";
                        flaaudnew=0;
                        sta.style.color="#00b300";
                        cover.style.display="none";
                        //sep.style.display="block";
                        sep.fadeIn("medium");
                        cou[0].style.display="none";
                        player_last[0].pause();


                    }
                }

            }  


            if( (fl===4 ) || (res===false)){
                fl=0;
                //clearInterval(stc);
                //console.log('Game Over!!!');                
                /* demo.innerText = 0 + "h "
                + 0 + "m " + 0 + "s ";*/
                sta.innerText='Game Over 😟';
                flaaudnew=0;
                cover.style.display="none";
                //sep.style.display="block";
                sep.fadeIn("medium");
                cou[0].style.display="none";
                player_last[0].pause();
                break;

            }

        }




    }


    function un(n)
    {
        ele[n].style.display="block";

        // timer();        
        setTimeout(function (){ 


            //clearInterval(cont);

            ask(n); 
            rand();
            audiofu();
            clock();
        },15000);


    }

}
$("document").ready(function(){
    process();
});