 function game() {
   var canvas;
   var canvasContext;
   console.log("Arcade Game");
   canvas = document.getElementById('gameCanvas');
   canvasContext = canvas.getContext('2d');
   canvasContext.fillStyle = 'black';
   canvasContext.fillRect(0, 0, canvas.width, canvas.height);
   canvasContext.fillStyle = 'red';
   canvasContext.fillRect(100,200,50,25);
   canvasContext.fillStyle = 'white';
   canvasContext.fillRect(300,200,200,200);
}