var vid1gloves;
var vid2tummy;
var vid3arm;
var vid4torso;
var vid5back;

function setup() {  
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
  vid1gloves = createVideo(['BLUE GLOVES.mov']); // play video file
  vid1gloves.size(700, 700); // vid size (set to size of canvas)
  vid1gloves.position(350,100);
  vid1gloves.loop() // set the video to loop and start playing
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  background(0,0,0);
}

function mousePressed() {
  vid1gloves.remove();
  vid5back = createVideo("BACK.mov");
  vid5back.size(700,700);
  vid5back.position(0,0);
  vid5back.play();
  vid5back.onended(next);
}

function next() {
  vid5back.remove();  
  vid4torso = createVideo("TORSO1.mov");
  vid4torso.size(700,700);
  vid4torso.position(500,150);
  vid4torso.play();
  vid4torso.onended(nexttwo)
}

function nexttwo() {
vid4torso.remove();  
vid3arm = createVideo("arm1.mov");
vid3arm.size(700,700);
vid3arm.position(700,25);
vid3arm.play();
vid3arm.onended(nextthree)
}

function nextthree() {
vid3arm.remove();  
vid2tummy = createVideo("TUMMY1.mov");
  vid2tummy.size(700,700);
  vid2tummy.position(0,150);
  vid2tummy.play();
}









