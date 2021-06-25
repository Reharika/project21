
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;
var backgroundImg;
var angle =0;
function preload()
{
	backgroundImg = loadImage("gif.gif");
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;
          
     var ball_options= {
		 //restitution:0.3,
		 friction:0.8,
		 density:1
	 }

	//Create the Bodies Here.
   ball = Matter.Bodies.circle(40,30,20,ball_options);
   World.add(world,ball);

	ground= new Ground(width/2,670,width,20);
	leftSide= new Ground(650,610,20,100,120);
    rightSide = new Ground(500,610,20,100,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(backgroundImg, 0, 0, width, height);

  
  ground.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20);

drawSprites();
}

 


function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-50})
	
	  }
  }


