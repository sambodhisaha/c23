var engine;
var box1,box2,ground;
function setup(){
    createCanvas(400,400);
    rectMode(CENTER)
    engine=Matter.Engine.create()
    console.log(engine)
    box1=new Box(200,200,20,20);
    box2=new Box(220,100,50,50);
    console.log(box1,box2)
    ground=new Ground(200,350,400,20)
    console.log(ground)
}

function draw(){
    background(255,255,255);
    fill("green")
    Matter.Engine.update(engine)
    box1.display();
    fill("blue")
    box2.display();
    fill("lightgreen")
    ground.display();

}








