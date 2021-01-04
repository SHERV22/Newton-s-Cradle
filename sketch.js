
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob()
	bobObject2=new Bob()
	bobObject3=new Bob()
	bobObject4=new Bob()
	bobObject5=new Bob()

	rope1=new rope1(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new rope1(bobObject2.body,roofObject.body,-bobDiameter*2, 0)
	rope3=new rope1(bobObject3.body,roofObject.body,-bobDiameter*2, 0)
	rope4=new rope1(bobObject4.body,roofObject.body,-bobDiameter*2, 0)
	rope5=new rope1(bobObject5.body,roofObject.body,-bobDiameter*2, 0)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
 
}



