function bottonclick(val)
{
document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function displayclear(){
    document.getElementById("screen").value=""
}
function equalclick(){


var text=document.getElementById("screen").value
var result=eval(text)
document.getElementById("screen").value=result
}