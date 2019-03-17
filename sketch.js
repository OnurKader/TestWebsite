function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  fill(236, 102, 121);
  noStroke();
  rect(width / 2, height / 2, 80, 175);
}

function mouseDragged() {
  let r = map(mouseY, 0, height, 254, 25);
  let g = map(mouseX, 0, width, 25, 254);
  let b = map(seconds(), 0, 59, 66, 212);
  stroke(r, g, b, 1);
  strokeWeight(144);
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

function mousePressed() {
  let r = map(mouseY, 0, height, 254, 25);
  let g = map(mouseX, 0, width, 25, 254);
  let b = map(seconds(), 0, 59, 66, 212);
  stroke(r, g, b, 1);
  strokeWeight(144);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function draw() {
  // stroke(255);
  // strokeWeight(30);
  // point(mouseX, mouseY);
}