
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,580,70);

	ground = new Ground(600,590,1200,20);

	dustbin = new Dustbin(530,620,190,220);

	 launcher = new Launcher(paper.body,{x:200, y:100});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

  paper.display();

  ground.display();

  dustbin.display();

  launcher.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}



