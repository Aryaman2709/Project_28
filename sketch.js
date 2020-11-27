
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,690,1000,20);
	tree = new Tree(760,100);
	stone = new Stone(190,300);
	catapult = new Catapult(stone.body,{x:150, y:535});
	mango1 = new Mango(800,200,25);
	mango2 = new Mango(850,245,25);
	mango3 = new Mango(720,255,25);
	mango4 = new Mango(650,290,25);
	mango5 = new Mango(900,310,25);
	mango6 = new Mango(800,320,25);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  imageMode(CENTER);
  image(boy,200,615,175,250);



  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	catapult.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body , {x:190, y: 300 })
		catapult.attach(stone.body);
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);

	}

}



