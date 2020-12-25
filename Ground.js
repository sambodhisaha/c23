class Ground{
    constructor(x,y,width,height){
        this.bodies=Matter.Bodies.rectangle(x,y,width,height,{isStatic:true})
Matter.World.add(engine.world,this.bodies)
this.width=width
this.height=height
    }
    display(){
        rect(this.bodies.position.x,this.bodies.position.y,this.width,this.height)

    
    }
}







