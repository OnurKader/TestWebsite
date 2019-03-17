function setup() {
  createCanvas(1900, 1000);
  background(0);
  fill(230, 99, 45);
  noStroke();
  rect(width / 2, height / 2, 40, 40);
}

function mouseDragged() {
  let r = map(mouseY, 0, height, 254, 25);
  let g = map(mouseX, 0, width, 25, 254);
  let b = map(seconds(), 0, 59, 66, 212);
  stroke(r, g, b, 1);
  noFill();
  strokeWeight(144);
  line(mouseX, mouseY, pmouseX, pmouseY);
}


function draw() {

}