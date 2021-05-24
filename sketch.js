

var hammer1, plane1,rubber1,stone1,iron,sand1,sand2,sand3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

  engine = Engine.create();
	world = engine.world;




 hammer1=new Hammer(200,50,100,100);
 plane1=new Plane(500,690,1000,20);
 rubber1=new Rubber(299,50,50);
 stone1=new Stone(400,20,20,20);
 iron=new Iron(200,200,50,50);
 sand1=new Sand(200,50,20);
 sand2=new Sand(230,50,20);
 sand3=new Sand(250,50,20);


   
 //place matter.js before p5.play in index.html


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  hammer1.display();
  plane1.display();
  rubber1.display()
  stone1.display();
  iron.display();
  sand1.display();
 
}



