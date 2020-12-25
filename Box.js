class Box{
    constructor(x,y,width,height){

       this.bodies=Matter.Bodies.rectangle(x,y,width,height,{restitution:0.6});
        Matter.World.add(engine.world,this.bodies)
        this.width=width
        this.height=height
    }
    display(){
        var posX=this.bodies.position.x
        var posY=this.bodies.position.y
        push()
        translate(posX,posY)
        rotate(this.bodies.angle)
        rect(posX,posY,this.width,this.height)
        pop()
    }

}












