class Catapult{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.catapult = Constraint.create(options);
        World.add(world,this.catapult);
    }

    fly(){
        this.catapult.bodyA = null;
    }

    attach(body){
        this.catapult.bodyA = body;
    }

    display(){
        if(this.catapult.bodyA){
        var pointA = this.catapult.bodyA.position
        var pointB = this.pointB;
        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }

    }
}