function setup() {
  var canvas = createCanvas(1100, 200);
 
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  
}


function draw() {  
	if (mouseIsPressed) {   
	fill(248, 248, 33); 
	} else {    
	fill(255); 
	}  
	ellipse(mouseX, mouseY, 80, 80);
	stroke(142, 145, 142);
}
                             
  
