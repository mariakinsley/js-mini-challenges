var Cntr=1

function Hide()
{
    Cntr++;
    document.getElementById("image").style.visibility="hidden";
    if (Cntr==2){
        setTimeout("Hide", 2000);
    }
}

function Show() 
{
    Cntr--;
    document.getElementbyId("h1").style.visibility="visible";
    if (Cntr==1) {
        setTimeout("Show", 2000);
    }

}