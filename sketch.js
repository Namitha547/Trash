
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,680,850,20);
	paper=new Paper(200,300,80/2);
	dustbin1=new Dustbin(347,630,15,50);
	dustbin2=new Dustbin(400,660,120,15);
	dustbin3=new Dustbin(453,630,14,50);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


