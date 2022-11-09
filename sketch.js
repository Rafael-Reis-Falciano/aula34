
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, solo;

var bloco1;
var bloco2;
var bloco3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var static_options = {
		isStatic: true,
	};

	var options = {
		restitution: 0.5,
		friction: 0.05,
		frictionAir: 0.05,
	}

	solo = Bodies.rectangle(400, 695, 800, 10, static_options);

	bloco = Bodies.rectangle(200, 300, 35, 35, options);

	parede1 = Bodies.rectangle(650, 680, 10, 100, static_options);
	parede2 = Bodies.rectangle(760, 680, 10, 100, static_options);

	World.add(world, bloco);
	World.add(world, solo);
	World.add(world, parede1);
	World.add(world, parede2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('blue');

  Engine.update(engine);

  text("Aperte espaço", 150, 30);
  textSize(200);

  rect(400, 695, 800, 10);

  rect(parede1.position.x, parede1.position.y, 10, 100);
  rect(parede2.position.x, parede2.position.y, 10, 100);

  push();
  fill('red');
  rect(bloco.position.x, bloco.position.y, 35, 35);
  pop();
  
  drawSprites();
 
  console.log(bloco.position.y);

  if(keyDown("space")){
	Matter.Body.applyForce(bloco, bloco.position, {x:0.055, y:-0.04});
  }

}



