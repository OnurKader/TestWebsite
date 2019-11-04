function setup() {
	createCanvas(displayWidth, displayHeight);
	background(0);
	strokeWeight(144);
	colorMode(HSB, 360);
}

function draw() {
  if (mouseIsPressed) {
	stroke(map(mouseY, 0, height, 356, 13), map(mouseX, 0, width, 21, 358), 360, 2);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
