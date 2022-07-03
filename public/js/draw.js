let w =0;
let capture;
let submitButton;
var drawCanvas;
var reset;

/*
function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  drawCanvas.position(x, y);
}*/
//function windowResized() {
//resizeCanvas(windowWidth-80, (windowWidth-80)*0.6);
//}


function setup() {
  //windowWidth-100, (windowWidth-100)*0.6
drawCanvas = createCanvas(500,400);
   drawCanvas.parent('drawCanvas');
//background(255);

}

function reset() {
  fill(255);
  noStroke();
  rect(0,0,windowWidth/1, height*(5/6));  
}

function draw(){
   
  noStroke();
  fill(0);
  if(mouseIsPressed){ 
circle(mouseX,mouseY,7);
  }
}

async function handleSubmit(){
 /*  const last_img = get();
  //let image64 = await last_img.canvas.toDataURL();
 // let blob = await last_img.canvas.toBlob('image/png');

 let imageBlob = await new Promise(resolve => last_img.canvas.toBlob(resolve, 'image/png'));

 let formData = new FormData();
 formData.append("image", imageBlob, "image.png");
let response
response = await fetch('/draw', {
   method: 'POST',
   body: formData
 });
   
 // convert the response to json, modify it accordingly based on the returned response from your remote server
 let result = await response.json(); */

/* fetch(image64)
.then(res => res.blob())
.then(blob => {
  var fd = new FormData()
  fd.append('image', blob, 'filename')
  console.log(blob)

}) 

  const response = await fetch('/movies');
  const movies = await response.json();
*/

/* //let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
let response = await fetch('/draw', {
  method: 'POST',
  headers: {
    "Content-Type": "image/png"},
  body: blob
});

// the server responds with confirmation and the image size
let result = await response.json();
alert(result.message);
 */
/* const response = await fetch(image64)
const img = await response.blob();
.then(res => res.blob())
.then(blob => {
  var fd = new FormData()
  fd.append('image', blob, 'filename')
  console.log(blob)
})
console.log(img.blob)
const output = {
  drawing:img.blob
}
let response = await fetch('/draw', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
},
  body: JSON.stringify(output)
});
  
let result = await response.json();
 
   */
 
/* const ids =  await fetch('/draw')
console.log(ids);
const data= await ids.json()
const submissiondata = data.submissions
console.log(submissiondata);
 */
//const paramss = new Map(location.search.slice(1).split('&').map(kv => kv.split('=')))

const params = new URLSearchParams(window.location.search)
const sessionId = params.get('session')
const playerId = params.get('player')
const index = params.get('index')
const zug = params.get('zug')
console.log(sessionId)
console.log(playerId)
console.log(index)
console.log(zug)

  const last_img = get();
  const base64img = last_img.canvas.toDataURL();
  
  // function Base64ToImage(base64img, callback) {
  //     var img = new Image();
  //     img.onload = function() {
  //         callback(img);
  //     };
  //     img.src = base64img;
  // }
  const output = {
    base64img,
  }
  //output.image = last_img.canvas.toDataURL();
  console.log(output)
  const options = {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          //"Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(output)
  }
 /*  try{
  const response = await fetch('/draw', options);
  console.log('success')
}catch(error){ 
 console.warn(error) }
  */
   fetch(`/draw?session=${sessionId}&player=${playerId}&index=${index}&zug=${zug}`, options).then(result => {
    //console.log(result);
      console.log('success')
  }).catch((error) => {
    console.warn(error);
  });
}