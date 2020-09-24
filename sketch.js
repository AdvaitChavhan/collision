var frect,mrect;


function setup() {
  createCanvas(1200,800);
  frect=createSprite(600, 400, 50, 80);
  mrect=createSprite(400, 200, 80, 30);
  frect.shapeColor="green";
  mrect.shapeColor="green";
}

function draw() {
  background(0);  
  mrect.x=World.mouseX;
mrect.y=World.mouseY;
if (mrect.x-frect.x<mrect.width/2+frect.width/2 && 
  frect.x-mrect.x<mrect.width/2+frect.width/2 &&
  mrect.y-frect.y<mrect.height/2+frect.height/2 && 
frect.y-mrect.y<mrect.height/2+frect.height/2  ){
  frect.shapeColor="red";
  mrect.shapeColor="red";
}
else{
  frect.shapeColor="green";
  mrect.shapeColor="green"; 
}
  drawSprites();
}