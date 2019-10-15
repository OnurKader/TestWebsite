function setup() {
	createCanvas(displayWidth, displayHeight);
	background(0);
	stroke(map(mouseY, 0, height, 252, 44), map(mouseX, 0, width, 42, 253), 189, 1);
	strokeWeight(144);
}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
