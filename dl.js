lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
diffY = document.documentElement.scrollTop;
else if (document.body)
diffY = document.body.scrollTop
else
{/*Netscape stuff*/}
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("lovexin12").style.top=parseInt(document.getElementById
("lovexin12").style.top)+percent+"px";
document.getElementById("lovexin14").style.top=parseInt(document.getElementById
("lovexin14").style.top)+percent+"px";

lastScrollY=lastScrollY+percent; 
}
suspendcode12="<DIV id=\"lovexin12\" style='left:2px;POSITION:absolute;TOP:20px;'><a target=_blank href=http://zf8988.com ><img border=0 width=125 height=500 src='./img/dltu/gif3.gif'></></a><br><br></div>"

suspendcode14="<DIV id=\"lovexin14\" style='right:2px;POSITION:absolute;TOP:20px;'><a target=_blank href=http://zf8988.com><img border=0 width=125 height=500 src='./img/dltu/gif3.gif'></></a><br><br></div>"


document.write(suspendcode12); 

document.write(suspendcode14);

window.setInterval("heartBeat()",1);