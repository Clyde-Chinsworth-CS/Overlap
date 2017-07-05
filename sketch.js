// TOP DOWN PLAYER

//decalre global variables
var player;
var player2;
var alpha;
var xcoord;
var check;
var frames;


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
	background("white");
    check = 0;
    
    // initialize global variables
    player = {
        x: width / 2 - 300,
        y: height / 2,
        r: 20,
        fillCol: "white",
        delta: 3,
    }
    
    player2 = {
        x: width / 2 + 300 ,
        y: height / 2,
        r: 20, 
        fillCol: "black",
        delta: 3,
    }
    
    
    xcoord = -400
    alpha = "black"
    frames = 0
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    
    // run logic
    background("white");
    drawRect();
    
    movePlayer1();
    movePlayer2();
    checkCollision();
    
    // draw frame
    drawCircle();
    controlP();
  
    frames ++

}
