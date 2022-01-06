function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    let color = Math.floor(Math.random() * 255 - 1) + 1;
    // fill(255);
    fill(color);
  }
  ellipse(mouseX, mouseY, 80, 80);
}