function SimpleInterest()
{
    let p=document.getElementById("principal").value;
    let r=document.getElementById("rate").value;
    let t=document.getElementById("time").value;
    let result=document.getElementById("result");
    if(p==""||r==""||t=="")
    {
        alert("FILL THE COMPLETE DETAILS!!");
    }
    else{
       var SI=p*r*t/100.0;
    
       result.innerHTML="The Simple Interest is : " + SI;
    }   
}
function reset()
{
    let classid=document.getElementsByClassName("SI");
    for (let i = 0; i < classid.length; i++) {
        classid[i].value="";
      }
    document.getElementById("result").innerHTML="";
        
}
     
