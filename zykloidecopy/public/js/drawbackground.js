let w =0;
let capture;
let submitButton;
var bcanvas;
var reset;
let i= 0;


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

  //setInterval()
  fill(237,246,244,5);
noStroke();
rect(0,0,width,height);  

   
  
  noStroke();
  fill(161, 198, 164);

    
circle(mouseX,mouseY,30);
 


}
