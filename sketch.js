let backgroundImg;
let doorImg;
let pointImg;

function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  backgroundImg = loadImage("assets/cool dolphin.jpg");
  doorImg = loadImage("assets/cool door.png");
  pointImg = loadImage("assets/cool pointer.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  image(doorImg, 0, 200, 200, 200);
  image(pointImg, 50, 100, 100, 100);

  fill(255, 0, 0);
  noStroke();
  textStyle(BOLD);
  textSize(20);
  text("the 8th exit", 20, 90);

  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  ellipse(120, 270, 100, 100);
}
