canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color = document.getElementById("input_color").value;
width_line = document.getElementById("input_width").value;
raduis = document.getElementById("input_radius").value;
mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent = "mouseup";    
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent = "mouseleave";    
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_position_x=e.clientX - canvas.offsetLeft;
current_position_y=e.clientY - canvas.offsetTop;

if(mouseEvent=="mouseDown"){
console.log("Current position of x and y coordinates = ");
console.log("x = "+ current_position_x + "y = " + current_position_y);
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_line;
ctx.arc(current_position_x,current_position_y,raduis,0,2 * Math.PI);
ctx.stroke();
}   
}



