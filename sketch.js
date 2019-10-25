function setup() {
	createCanvas(displayWidth, displayHeight);
	background(0);
	strokeWeight(144);
	colorMode(HSB);
}

function draw() {
  if (mouseIsPressed) {
	stroke(map(mouseY, 0, height, 252, 44), map(mouseX, 0, width, 42, 253), 255, 1);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
