
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var dustbinObj, paperObj, groundObj;



function setup() {
	createCanvas(1600,750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ground= new Ground (450,430,1700,20);
/*dust = new Paper(100,390,70);
bin1=new Dustbin (1200,350,20,150);
bin2= new Dustbin(950,350,20,150);
bin3= new Dustbin(1075,425,250,20);*/
paperObj=new paper (200,450,70);
groundObj =new Ground(width/2,670,width,20);
dustbinObj= new Dustbin(1200,650)

/*var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  })*/
	Engine.run(engine);
 // Render.run(render);
}


function draw() {
//	Engine.update(engine)
  rectMode(CENTER);
  background(230);
  
 paperObj.display();
 groundObj.display();
 dustbinObj.display();


    //drawSprites();

}
function keyPressed(){
     
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
	}
}



	



