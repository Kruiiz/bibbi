xspeed = 500;
xpos = 0;

function setup() {
  createCanvas(500, 500);
  background(230, 150, 200);
  angleMode(DEGREES);
  
  
  
  noStroke();
  beginShape();
  curveVertex(width * .15, height * .1);
  curveVertex(width * .2, height * .3);
  curveVertex(width * .35, height * .15);
  curveVertex(width * .35, height * .1);

endShape(CLOSE);
   
  beginShape();
  vertex(width * .85, height * .1);
  vertex(width * .8, height * .3);
  vertex(width * .65, height * .15);
  curveVertex(width * .65, height * .1);
  curveVertex(width * .8, height * .1);
endShape(CLOSE);
  
let c = color(0,0,0); 
fill(c);
  beginShape();
  ellipse(width);
  curveVertex(width * .5, height * .1);
  curveVertex(width * .3, height * .2);
  curveVertex(width * .2, height * .3);
  curveVertex(width * .2, height * .5);
  curveVertex(width * .5, height * .6);
  curveVertex(width * .8, height * .5);
  curveVertex(width * .8, height * .3);
endShape(CLOSE);


circle(300, 100, 20);
}

function draw() {
 fill('orange');
  ellipse(xpos, height/2, width/3, height/3);

  if (xpos > width) {
    xspeed = -500
  }
   
  if (xpos < 0) {
    xspeed = 300;
  }

  xpos += xspeed;
}