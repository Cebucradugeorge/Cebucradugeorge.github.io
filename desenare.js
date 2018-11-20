document.getElementById("id_logic_version").innerHTML = "Logic version = 2018.11.20.0";

var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch);
function on_touch(e)
{
for (var i=0; i< e.changedTouches.length; i++)
{
	var context = canvas.getContext("2d");
	context.beginPath();
	context.arc(e.chengeTouches.item(i).pageX, e.chengeTouches.item(i).pageY,20,0,2 * Math,PI);
	context.stroke();
	
	
}
	
	
	
}