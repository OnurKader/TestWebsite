function setup() {
	createCanvas(displayWidth, displayHeight);
	background(0);
	strokeWeight(144);
	colorMode(HSB, 360);
}

function draw() {
  if (mouseIsPressed) {
	stroke(map(mouseY, 0, height, 358, 46), map(mouseX, 0, width, 41, 352), 360, 10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
