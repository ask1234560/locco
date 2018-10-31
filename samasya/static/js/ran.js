$("document").ready(function(){
    var count;
    var lc=$("#count");
    var arr=[2563,1532,1344,1289,1100,1003,876,485,342,264,225,198,100];
    var i=0;
   
    
    rand=function(){
        
        count=arr[i];
        i+=1;
        if(count>0){
        lc[0].innerHTML=count;
           }
        
        
    }



  

});