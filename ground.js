class Ground{
    constructor(x,y, width, height){
        this.x = x;
        this.y  = y;
        this.width = width;
        this.height = height;
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y)
        rectMode(CENTER);
        fill(110, 61, 16);
        rect(0, 0, this.width,this.height);
        pop()
    }
}