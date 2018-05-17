var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10;

 function game(){
   var framerPerSecond = 30
   canvas = document.getElementById('gameCanvas');
   canvasContext = canvas.getContext('2d');
   setInterval(function() { //inline function
     move();
     draw();
   }, 1000/framerPerSecond); // draw function is will take a pause of 1000ms.
 }

 function  move(){
   ballX = ballX + ballSpeedX;
   if(ballX >  canvas.width) {
     ballSpeedX = -ballSpeedX;
   }
   if (ballX < 0) {
     ballSpeedX = -ballSpeedX;
   }
 }

 function draw() {
   console.log("Arcade Game");
   console.log(ballX);
   //next line blanks out the screen black
   colorRect(0, 0, canvas.width, canvas.height, 'black');
   //this is left player paddle
   colorRect(10, 210, 10, 100, 'white');
   // next line draws the ball
   colorRect(ballX, 100, 10, 10, 'red');
}

function colorRect(leftX, topY, width, height, drawColor)
{
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height, drawColor);
}