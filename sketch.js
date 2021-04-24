//for storing the helicopter sprite and pakage sprite
 var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

//for creating the pacakage body basically a body and a ground 
 var packageBody,ground;

//for the red box
var redbox;

//for const of all 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

function preload()
{
//for loading the image of helicopter and pakage
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

//for the thing to be in the centre
	rectMode(CENTER);

//for the creating the red box sprite and giving it a color
//for the horizontal line
 redboxSprite = createSprite(390,650,200,20);
 redboxSprite.shapeColor = "red";

//for the vertical line on the left side
 redboxSprite = createSprite(300,610,20,100);
 redboxSprite.shapeColor = "red";

//for the vertical line on the right side
 redboxSprite = createSprite(500,610,20,100);
 redboxSprite.shapeColor = "red";
	
//for creating the pakage sprite, adding the image  of the pacage and scaling it 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

//for creating the helicopter sprite, adding the image  of the helicopter and scaling it 
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

//for creating the groung sprite and adding a shape colour
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

//for creating the engine and the world
	engine = Engine.create();
	world = engine.world;

//making it into a circle and then width and then adding it into the world	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false});
	World.add(world, packageBody);
	

//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
            packageSprite.x = packageBody.position.x;
			packageSprite.y = packageBody.position.y;
    
  }
}



