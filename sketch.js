var movingrect, fixrect;


function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(100, 200, 30, 80);
  movingrect.shapeColor="blue";
  fixrect.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingrect.x= World.mouseX;
  movingrect.y= World.mouseY;

  if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2
    && fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2
   && movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2
    && fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2)
  {
    movingrect.shapeColor="red";
  fixrect.shapeColor="green";
  }
  else
  {
    movingrect.shapeColor="blue";
  fixrect.shapeColor="blue";
  }
  drawSprites();
}