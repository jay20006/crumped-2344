
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var 	paperObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(225);

	engine = Engine.create();
	world = engine.world;

	paperObject1 = new Paper(560,460,55,55);




	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paperObject1.display();
 keyPressed();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW ){
	Matter.Body.applyForce(paperobject.body.position,{x:85,y:85})
}
}

