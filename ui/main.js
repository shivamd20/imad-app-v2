

var button =document.getElementById('counter');


button.onclick = function ()
{
    var request=new XMLHttpRequest();
    
    
    request.onreadystatechange=function ()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                
                span.innerHTML=counter.toString();
        
            }
            else{
            }
        }
        
        console.log("on ready state change method executed"+request.responseText);
        
    };
    
    request.open('GET','http://shivamd20.imad.hasura-app.io/counter',false);
    request.send(null);
    
};