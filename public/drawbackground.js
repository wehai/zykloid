let w =0;
let capture;
let submitButton;
var bcanvas;
var reset;


function windowResized() {
resizeCanvas(windowWidth,windowHeight);
}
function setup() {
 bcanvas = createCanvas(windowWidth,windowHeight);
    bcanvas.parent('bcanvas');
 
background(237,246,244);
frameRate(200);

}

function draw(){
   
  
  noStroke();
  fill(161, 198, 164);

    
circle(mouseX,mouseY,30);
 
  
  
  

}
