
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var dustbin;
var dustbin2;
var dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paperObject = new Paper(200,450,40);

	dustbin = new Dustbin(600,470,60,10);

    ground = new Ground(400,480,800,10);

	dustbin2 = new Dustbin(565,442,10,60);

	dustbin3 = new Dustbin(635,442,10,60);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display();

  paperObject.display();

  dustbin2.display();

  dustbin3.display();

  ground.display();

  

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-55});

	}
}


