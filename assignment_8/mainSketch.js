function setup() {
    var cnv = createCanvas(640, 480);
  //  angleMode(DEGREES);
}

/* function draw() {
  noStroke();
  createCanvas(300,300);
  fill(255, 255, 238);
  ellipse(mouseX, 90, 70, 70);

  if (mouseX > width/2){
    var offset = map(mouseX, 0, width, 100, 0);
    fill(R, G, B);
    ellipse(mouseX - offset, 90, 70, 70);
    }
} */


var s = function(sketch) {
var x = 100;
var y = 100;

sketch.setup = function() {
  sketch.noCanvas();
  sketch.createCanvas(windowWidth-20, 130);
  sketch.angleMode('DEGREES')
  };

sketch.windowResized = function () {
  resizeCanvas(windowWidth-20, 130);
};

sketch.draw = function() {
  sketch.background(77, 68, 100);
  sketch.strokeWeight(2);
  sketch.stroke(0,0,0,40);
  sketch.line(249, 80, 274, 105);
  sketch.line(274, 80, 249, 105);
  sketch.line(257, 60, 257, 125);
  sketch.line(230, 92, 290, 92);
  sketch.stroke(255);
  sketch.strokeWeight(4);
  sketch.line(245, 80, 270, 105);
  sketch.line(270, 80, 245, 105);
  sketch.line(257, 60, 257, 125);
  sketch.line(230, 92, 290, 92);

  sketch.noStroke();
  sketch.fill(255, 255, 238);
  sketch.ellipse(mouseX, 90, 70, 70);

  if (mouseY < width/200) {
    if (mouseX > width/2) {
      var offset = sketch.map(mouseX, 0, width, 100, 0);
    //  console.log("offset: ", offset);
    //  console.log("mouseX: ", mouseX);
      sketch.fill(77, 68, 100);
      sketch.ellipse(mouseX - offset, 90, 70, 70);
      }
  }
  // white stars w/ black shadow for better depth
  sketch.strokeWeight(2);
  sketch.stroke(0,0,0,40);
  sketch.line(45, 50, 70, 75);
  sketch.line(70, 50, 45, 75);
  sketch.line(57, 30, 57, 95);
  sketch.line(35, 62, 90, 62);
  sketch.stroke(255);
  sketch.strokeWeight(4);
  sketch.line(40, 50, 65, 75);
  sketch.line(65, 50, 40, 75);
  sketch.line(52, 30, 52, 95);
  sketch.line(30, 62, 85, 62);

  // making planets and other things
  sketch.noStroke(); //188, 216, 229
  sketch.fill(56,146,188);
  sketch.ellipse(1300,150,300,300);

  sketch.noFill();
  sketch.strokeWeight(10)
  sketch.stroke(188, 216, 229);
  sketch.arc(1300, 105, 350, 50, 45, 135, OPEN);


  sketch.noStroke();
  sketch.fill(56,146,188)
  sketch.arc(1300, 97, 278, 100, PI, 0);

  //animating circles
  var start = 20;
  var angle = 0;
  sketch.push();
  sketch.translate(100,100);
  sketch.rotate(radians(angle+90));
  sketch.fill("yellow")
  sketch.ellipse(-start, start, 3, 3);
  sketch.pop();
  angle = angle + 1;
  start = start + .05;
    };
  };

var myp5 = new p5(s, 'moon-mouse');
