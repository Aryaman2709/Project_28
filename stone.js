class Stone{
    constructor(x,y){
        var options={
           isStatic: false,
           restitution: 0,
           friction:1,
           density:1.2,
        }
        this.x = x;
        this.y = y;
        this.r = 40;
        this.body = Bodies.circle(x,y,40,options)
        World.add(world,this.body);
        this.image = loadImage("stone.png");
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, 40,40);
        pop();
    }
}