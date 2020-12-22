
function preload(){
 tick = loadSound("tick.mp3");
 bg = loadImage("sprites/BG.jpg");
}

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  tick.loop();
 
}

function draw() {
  background(bg); 
  fill(random(0, 255), random(0, 255), random(0, 255));
  text("THE GETAWAY CLOCK",150,20);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  fill(random(0, 255), random(0, 255), random(0, 255));
  text("TIME LEFT TO ESCAPE:"+(23-hr)+":"+(59-mn)+":"+(59-sc),120,380);

  translate(200,200);
  rotate(-90);

  //second
 strokeWeight(7);
 stroke("blue");
 noFill();
 var sec = map(sc,0,60,0,360);
 arc(0,0,300,300,0,sec);

 push();
 rotate(sec);
 strokeWeight(7);
 stroke("blue");
 line(0,0,100,0);
 pop();
 //minutes 
 strokeWeight(7);
 stroke("yellow");
 noFill();
 var min = map(mn,0,60,0,360);
 arc(0,0,280,280,0,min);
  
 push();
 rotate(min);
 strokeWeight(7);
 stroke("yellow");
 line(0,0,70,0);

 //hours
 strokeWeight(7);
 stroke("red");
 noFill();
 var h = map(h%12,0,12,0,360);
 arc(0,0,260,260,0,h);

 push();
 rotate(h);
 strokeWeight(7);
 stroke("red");
 line(0,0,40,0);
 pop();


 //point
 push();
 stroke("white");
 point(0,0);
 pop();

}



