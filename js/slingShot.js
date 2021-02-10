class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 1
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA=body
    }

    fly(){
        this.sling.bodyA=null;
    }
    Launch(bodyA){
        this.sling.bodyA=bodyA;
    }
    display(){
    
    }
}