
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

ground = new Floor (400,400,800,30)
ball = new paper (100,380,20)
can = new Trashcan (600,330,20,100)
can2 = new Trashcan (750,330,20,100)
can3 = new Trashcan (675,370,120,20)

	Engine.run(engine);
  

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.display();
  ball.display();
  can.display();
  can2.display();
  can3.display();

}

function keyPresed()
{
 if (keyCode === UP_ARROW) {

Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-200})

 }

}


