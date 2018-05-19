var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 10;

var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 3;
var showingWinScreen = false;

var paddle1Y =  250;
var paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;

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
     // paddle2Y = mousePos.y - (PADDLE_HEIGHT/2);

   });
 }

 function ballReset()
 {
   if(player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
     player1Score = 0;
     player2Score = 0;
     showingWinScreen =true;
   }
   ballSpeedX = -ballSpeedX;
   ballX = canvas.width/2;
   ballY = canvas.height/2;
 }

 function computerMovement() {
   var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
   //if paddleY is above the ball
   if (paddle2YCenter < ballY - 35) {
     paddle2Y += 6;
   }
   else if(paddle2YCenter > ballY +35){
     paddle2Y -= 6;
   }
 }

 function  move(){
   if(showingWinScreen) {
     return; 
   }
   computerMovement();
   ballX +=  ballSpeedX;
   ballY += ballSpeedY;

   if (ballX < 0) {
     /*bounce the ball back if its below and above the paddle.
     Means ball touches the paddle. change the x axis ; ballSpeedX
     */
     if(ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
       ballSpeedX = -ballSpeedX;
       /*
       Change the speed vertically based on where the balls hits the paddle
       Subtract center of the paddle from ball's current position
       */
       var deltaY = ballY - (paddle1Y+PADDLE_HEIGHT/2);
       ballSpeedY = deltaY * 0.35;
     }
     else {
       player2Score++; //must be before ballReset()
       ballReset();
     }
   }

   if(ballX >  canvas.width) {
     if(ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
       ballSpeedX = -ballSpeedX;
       var deltaY = ballY - (paddle2Y+PADDLE_HEIGHT/2);
       ballSpeedY = deltaY * 0.35;
     }
     else {
       player1Score++; //must be before ballReset()
       ballReset();
     }
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
   colorRect(0, 0, canvas.width, canvas.height, 'purple');

   if(showingWinScreen) {
     canvasContext.fillStyle = 'white';
     canvasContext.fillText("click to continue",  100, 100);
     return;
   }
   //this is left player paddle
   colorRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT , 'white');
   //this is right computer paddle
   colorRect(canvas.width - PADDLE_THICKNESS , paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
    // next line draws the ball
   colorCircle(ballX, ballY, 10, 'white');
   canvasContext.fillText(player1Score, 100, 100);
   canvasContext.fillText(player2Score, canvas.width - 100, 100);
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