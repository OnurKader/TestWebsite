function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  fill(236, 102, 121);
  noStroke();
  rect(width / 2, height / 2 - 50, 80, 175);
}

function draw() {
  if (mouseIsPressed) {
    console.log("Hey!");
    stroke(map(mouseY, 0, height, 252, 44), map(mouseX, 0, width, 42, 253), 189);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}