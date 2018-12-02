
var angle = 0;

function setup() {
  noCanvas();
  var cnv = createCanvas(windowWidth-20, 130);
  cnv.parent('moon-mouse');

}

function windowResized() {
  resizeCanvas(windowWidth-20, 130);
}

function draw() {
  background(77, 68, 100);
  strokeWeight(2);
  stroke(0,0,0,40);
  line(249, 80, 274, 105);
  line(274, 80, 249, 105);
  line(257, 60, 257, 125);
  line(230, 92, 290, 92);
  stroke(255);
  strokeWeight(4);
  line(245, 80, 270, 105);
  line(270, 80, 245, 105);
  line(257, 60, 257, 125);
  line(230, 92, 290, 92);

  noStroke();
  fill(255, 255, 238);
  ellipse(mouseX, 90, 70, 70);

  if (mouseX > 30) {
    var offset = map(mouseX, 0, width, 100, 0);
    fill(77, 68, 100);
    ellipse(mouseX - offset+30, 90, 70, 70);
    }

  // white stars w/ black shadow for better depth
  strokeWeight(2);
  stroke(0,0,0,40);
  line(45, 50, 70, 75);
  line(70, 50, 45, 75);
  line(57, 30, 57, 95);
  line(35, 62, 90, 62);
  stroke(255);
  strokeWeight(4);
  line(40, 50, 65, 75);
  line(65, 50, 40, 75);
  line(52, 30, 52, 95);
  line(30, 62, 85, 62);

  fill(219,232,244);
  ellipse(90,120, 3, 3);
  fill(219,232,244);
  ellipse(499,20, 3, 3);
  fill(219,232,244);
  ellipse(750,90, 3, 3);

  // making planets and other things
  noStroke(); //188, 216, 229
  fill(56,146,188);
  ellipse(1300,150,300,300);

  noFill();
  strokeWeight(10)
  stroke(188, 216, 229);
  arc(1300, 105, 350, 50, 45, 135, OPEN);

  noStroke();
  fill(56,146,188)
  arc(1300, 97, 278, 100, PI, 0);

  //animating circles

  translate(100,30);
  translate(p5.Vector.fromAngle(millis() / 1000, 50,10));
  fill(219,232,244);
  ellipse(1300,30, 8, 8);


    };
