const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var boll;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
    
b1 = createImg("right.png");
b1.position(200,30);
b1.size(50,50)
b1.mouseClicked(horizontal);

b2 = createImg("up.png");
b2.position(100,50);
b2.size(50,50)
b2.mouseClicked(vertical);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var boll_options = {
    'restitution': 1,
     'friction': 0.5
  }
  boll = Bodies.circle(100,100,10,boll_options);
  World.add(world,boll);
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
push();
fill("cyan")  
ellipse(boll.position.x,boll.position.y,10);
pop();
Engine.update(engine);
 
}

function horizontal(){
  Matter.Body.applyForce(boll,{x:0,y:0},{x:0.05,y:0});
}
function vertical(){
  Matter.Body.applyForce(boll,{x:0,y:0},{x:0,y:-0.05});
}