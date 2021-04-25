const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane, iron, stone, plane2, plane3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    iron = new Iron(700,100);
    stone = new Stone(1000,100);
    rubber = new Rubber(80,60,60)
    plane2 = new Plane(5,height,70,50000);
    plane3 = new Plane(1200,height,70,50000);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display()
    plane2.display();
    plane3.display();
}