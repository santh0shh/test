let prevpos = window.scrollY;
let navbar = document.getElementById("header");

window.onscroll = function(){
    curpos = window.scrollY;
    let tmp;
    
    if(window.innerWidth > 575){
        tmp = "-75px";
    }
    else{
        tmp = "-50px";
    }
    if(curpos > prevpos){
        navbar.style.top=tmp;
    }
    else{
        navbar.style.top="0";
    }
    prevpos = curpos;

    let h = document.getElementById('abtus').scrollHeight + document.getElementById('bmi').scrollHeight;
    
    if(curpos >  h){
        // document.getElementsByClassName("bmi")[0].style.transform = 'translateX(calc(50vw - 50%))';
        document.getElementsByClassName("bmi")[0].style.opacity = '100%';
        h += document.getElementById("bmi").scrollHeight;
    }
    
    if(curpos > h){

        var bs = document.querySelectorAll("li > b");
        var clrs = ["lightblue", "lightgreen", "orange", "red"];
        for (var i = 0; i < bs.length; i++) {
            bs[i].style.color = clrs[i];
            bs[i].style.textShadow = "1px 1px 2px black";
        }
  
        h += document.getElementById('diet').scrollHeight;
    }
    if(curpos > h){
        for(i=0;i<11;i++){
            document.getElementsByClassName('temp')[i].style.margin = '30px';
        }
        console.log("height " + curpos  + " " + window.innerHeight + " doc ht " + document.documentElement.scrollHeight);
    }
    if(window.innerHeight + curpos >= document.documentElement.scrollHeight - 2){
        document.getElementsByClassName('myimg')[0].style.transform = "rotateY(0deg)";
    }
}
