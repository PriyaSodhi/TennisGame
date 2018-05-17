var canvas;
var canvasContext;
var ballX = 50;

 function game(){
   var framerPerSecond = 30
   canvas = document.getElementById('gameCanvas');
   canvasContext = canvas.getContext('2d');
   setInterval(function() { //inline function
     move();
     draw();
   }, 1000/framerPerSecond); // draw function is will take a pause of 1000ms.
 }

 // function callMoveDraw(){
 //   move();
 //   draw();
 // }

 function  move(){
   ballX = ballX + 5;
 }
 function draw() { 
   console.log("Arcade Game");
   console.log(ballX);
   canvasContext.fillStyle = 'black';
   canvasContext.fillRect(0, 0, canvas.width, canvas.height);
   canvasContext.fillStyle = 'white';
   canvasContext.fillRect(10,210,10,100);
   canvasContext.fillStyle = 'red';
   canvasContext.fillRect(ballX,100,10,10);
}