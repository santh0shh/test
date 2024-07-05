let click = 0;
let dd = document.getElementsByClassName("line");
let dwn = document.getElementsByClassName("down")[0];

function clos(){
    if(window.innerWidth < 575){
        click = 0;
        dwn.style.height = "0";
        dd[0].style.float="none";
        dd[0].style.transform="none";
        dd[1].style.display="block";
        dd[2].style.transform="none";
    }
}
function drop(){
    if(click == 0){
        click = 1;
        dwn.style.height = dwn.scrollHeight + "px";
        dd[0].style.float="left";
        dd[0].style.transform="rotate(45deg)";
        dd[1].style.display="none";
        dd[2].style.transform="rotate(135deg)";
    }
    else{
        clos();
    }
}