var canvas;
var canvasContext;
var ballX = 50;

 function game(){
   canvas = document.getElementById('gameCanvas');
   canvasContext = canvas.getContext('2d');
   setInterval(draw, 50) // draw function is will take a pause of 1000ms.
 }
 function draw() {
   ballX = ballX + 5;
   console.log("Arcade Game");
   console.log(ballX);
   canvasContext.fillStyle = 'black';
   canvasContext.fillRect(0, 0, canvas.width, canvas.height);
   canvasContext.fillStyle = 'white';
   canvasContext.fillRect(225,210,200,200);
   canvasContext.fillStyle = 'red';
   canvasContext.fillRect(ballX,100,10,10);
}