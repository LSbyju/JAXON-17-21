var jaxon,jaxonRunning;
var path,pathImage,i;
var leftBoundary,rightBoundary;
var edges;

function preload(){
  //pre-load images
  jaxonRunning = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 3;

  jaxon = createSprite(180,340,30,30);
  jaxon.addAnimation("running",jaxonRunning);
  jaxon.scale = 0.05;


}

function draw() {
  background(0);
  jaxon.x = World.mouseX;

  jaxon.collide(edges[1]);
  jaxon.collide(edges[2]);
  jaxon.collide(edges[3]);
  jaxon.collide(edges[4]);
  if (path.y>400) {
    path.y = height/2
  }
  drawSprites();
}
