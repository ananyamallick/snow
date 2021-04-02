var snow1 ;
var snow2;
var snow1Img;
var snow2Img;

var bg;
var bgImg;

function preload(){
  bg = loadAnimation("s.jpeg" , "n.jpeg" , "o.jpeg");
snow1Img = loadImage("snow4.webp");
snow2Img = loadImage("snow5.webp");
}

function setup() {
  createCanvas(1360,650);
 

  bgImg = createSprite(670, 325, 0, 0);
  bgImg.addAnimation("bg" , bg);
  bgImg.scale = 0.9;
}

function draw() {
  background(255);  


if (frameCount % 5 === 0){
  var options = {
    isStatic:true
  }
    snow1 = createSprite(random(250,1100),10,10,10,options);
    snow1.addImage("snow1",snow1Img);
    snow1.scale=0.1;
    snow1.velocity.y = 15
}
if (frameCount % 5 === 0){
  var options = {
    isStatic:true
  }
    snow2 = createSprite(random(250,1100),10,10,10,options);
    snow2.addImage("snow2",snow2Img);
    snow2.scale=0.1;
    snow2.velocity.y = 15
}
  drawSprites();
}