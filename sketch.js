
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var wall1,wall2,wall3,top;
 
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(200,300)

	wall1 = new Wall(550,550,20,95)

	ground = new Ground(400,690,400,15)

	

	Engine.run(engine);
  
}


function draw() {
	background(0)
  rectMode(CENTER);
  background(0);

  
  
  drawSprites();

  wall1.display();

  ground.display();

  ball.display();

  keyPressed();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applForce(ball.body,ball.body.position,{x:85,y:-85})

	}
}
