
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lefttWall, rightWall, bottomWall;
var ground, paperBall;

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	leftWall = new Dustbin(550, 400, 30, 80);
	rightWall = new Dustbin(610, 400, 30, 80);
	bottomWall = new Dustbin(560, 430, 80, 30);

	paperBall = new Paper(150, 430, 60);

	ground = new Ground(400, 495, 800, 10);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  leftWall.display();
  rightWall.display();
  bottomWall.display();

  ball.display();
  ground.display();
  

 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBall.body,paperBall.position,{x:85, y:85});
	}
}


