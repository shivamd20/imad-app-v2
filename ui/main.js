

var button =document.getElementById('counter');


button.onclick = function ()
{
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHtml=counter.toString();
            }
            else{
                
                console.log('request resed');
            }
            
        }
        
    };
    
    request.open('GET','http://shivamd20.imad.hasura-app.io/counter',true);
    request.send(null);
    
    console.log("clicked");
    
};
console.log('Loaded!');