
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(100,300);
	ground1=new Ground(3,346,8000,20);
	log1=new Log(740,304,20,115);
	log2=new Log(920,305,20,115);
	log3=new Log(width/2+230,350,200,25);
	

	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  
  
  paper1.display();
  ground1.display();
  log1.display();
  log2.display();
  log3.display();
  


  
  drawSprites();

 
}
function  keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:72,y:-72});
}
}



