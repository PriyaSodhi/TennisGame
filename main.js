var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 10;

var paddle1Y =  250;
const PADDLE_HEIGHT = 100;

 function game(){
   var framerPerSecond = 30
   canvas = document.getElementById('gameCanvas');
   canvasContext = canvas.getContext('2d');
   setInterval(function() { //inline function
     move();
     draw();
   }, 1000/framerPerSecond); // draw function is will take a pause of 1000ms.
   /*
   next line will calculate the mouse coordinates and will
   change the y coordinate of paddle correspondingly
   */
   canvas.addEventListener("mousemove", function(event) {
     var mousePos = calculateMousePosition(event);
     //Align the paddle’s centre on the mouse’s Y position
     paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);

   });
 }

 function  move(){
   ballX = ballX + ballSpeedX;
   ballY = ballY + ballSpeedY;

   if(ballX >  canvas.width) {
     ballSpeedX = -ballSpeedX;
   }
   if (ballX < 0) {
     ballSpeedX = -ballSpeedX;
   }
   if(ballY > canvas.height) {
     ballSpeedY = -ballSpeedY;
   }
   if(ballY < 0) {
     ballSpeedY = -ballSpeedY;
   }
 }

 function draw() {
   console.log("Arcade Game");
   console.log(ballX);
   //next line blanks out the screen black
   colorRect(0, 0, canvas.width, canvas.height, 'black');
   //this is left player paddle
   colorRect(10, paddle1Y, 10, PADDLE_HEIGHT , 'white');
    // next line draws the ball
   colorCircle(ballX, ballY, 10, 'white');
}

function colorCircle(centerX, centerY, radius, drawColor ) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius , 0, Math.PI * 2, true);
  canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height, drawColor);
}

function calculateMousePosition(event) {
  //returns coordinates relative to the viewport i.e canvas
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = event.clientX - rect.left - root.scrollLeft;
  var mouseY = event.clientY - rect.top - root.scrollTop;
  return {
    x:mouseX,
    y:mouseY
  };
}