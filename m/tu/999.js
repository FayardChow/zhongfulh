<!--
lastScrollY = 0;
function heartBeat(){
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop)
	diffY = document.documentElement.scrollTop;
	else if (document.body)
	diffY = document.body.scrollTop
	else
	{}
	percent=.1*(diffY-lastScrollY);
	if(percent>0)percent=Math.ceil(percent);
	else percent=Math.floor(percent);
	document.getElementById("leftAD").style.top = parseInt(document.getElementById("leftAD").style.top)+percent+"px";
	document.getElementById("rightAD").style.top = parseInt(document.getElementById("rightAD").style.top)+percent+"px";
	lastScrollY=lastScrollY+percent;
}
window.setInterval("heartBeat()",1);
document.write("<style type='text\/css'>");
document.write(".floatAD{position:absolute;}");
document.write("</style>");
document.write("<div id='leftAD' class='floatAD' style='top:1px;left:10px;'><br><a href='http://http://www.163777.com/GR/v6h26trz8n/' target='_blank'><img src='http://www.606808.com/tu/fb.gif'  width='120' height='280' border='0' style='margin-top:1px;' /></a><br></div>");
document.write("<div id='rightAD' class='floatAD' style='top:1px;right:10px;'><br><a href='http://www.163777.com/GR/v6h26trz8n' target='_blank'><img src='http://www.606808.com/tu/fb.gif' width='120' height='280' border='0' style='margin-top:3px;'/></a><br></div>");
//
//-->  