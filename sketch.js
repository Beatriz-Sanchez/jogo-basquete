var bolaSprite, bolaCorpo;
var cesta;
var estado = "start";

var world,engine;

var edges;

var bolaImg, cestaImg;

function preload(){
  bolaImg = loadImage('bola.png');
  cestaImg = loadImage('cesta.png');
}

function setup() {
  engine = Matter.Engine.create();
  mundo = engine.world;
 
  createCanvas(1200,700);
  cesta = createSprite(1100,300);
  cesta.addImage(cestaImg);
  cesta.scale = 0.5;

  bolaSprite = createSprite(100,300);
  bolaSprite.addImage(bolaImg);
  bolaSprite.scale = 0.4;
  bolaSprite.velocityY = 10;

  bolaCorpo = Matter.Bodies.circle(10, 10, 30, {isStatic: true});
  Matter.World.add(mundo,bolaCorpo);
  
  edges = createEdgeSprites();
}

function draw() {
  background(0);

  if(estado === "start"){
    bolaSprite.bounceOff(edges);
  }  

  
  drawSprites();
  Matter.Engine.update(engine);
}

function keyPressed(){
  if (keyCode === 32) {
    
  }
}