class Wall{

    constructor(x,y,width,height){

        var options ={isStatic: true}

        this.body = Bodies.rectangle(x,y,width,height,options)

        this.body.width = width;
        this.body.height = height;

        World.add(world, this.body)

    }

    display(){

        var pos = this.body.position;

        push();

        translate(pos.x,pos,y);

        fill("green")
        rectMode(CENTER)
        rect(pos.x,pos,y,this,width,this.height)
        pop();
        

        

    }
}