function setup() {
  createCanvas(screenWidth, screenHeight);
  background(0);


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