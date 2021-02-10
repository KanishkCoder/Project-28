
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var treeObj,treeImg, stoneObj,groundObject, launcherObject;
var mango1,boy,boyImg;

function preload(){
	boyImg=loadImage("images/boy.png");
	treeImg=loadImage("images/tree.png")
  }

function setup() {
	createCanvas(1000, 650);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(600,290,34);
	mango2=new mango(855,325,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,30);
	mango5=new mango(710,320,30);
	stoneObj=new Stone(100,460,23)
	
	attach=new Slingshot(stoneObj.body,{x:100,y:465});

	treeObj=createSprite(775,368);
	treeObj.addImage(treeImg)
    treeObj.scale=0.42;
	groundObject=new ground(width/2,600,width,20);
	boy=createSprite(160,550);
	boy.addImage(boyImg)
	boy.scale=0.125;
	
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("grey");
  fill("black");
  textSize(18);
  //Add code for displaying text here!
  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)
  
  

  drawSprites();


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  stoneObj.display();
  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	attach.fly();
}
function detectCollision(stoneObj,mango) {
	if(stoneObj.body.position.x-mango.body.position.x<mango.diameter+stoneObj.diameter
		&& mango.body.position.x-stoneObj.body.position.x<stoneObj.diameter+mango.diameter
		&& stoneObj.body.position.y-mango.body.position.y<mango.diameter+stoneObj.diameter
		&& mango.body.position.x-stoneObj.body.position.x<stoneObj.diameter+mango.diameter){
			Matter.Body.setStatic(mango.body,false)
		}
}
function keyPressed() {
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:100,y:465});
		attach.Launch(stoneObj.body)
	}
}

