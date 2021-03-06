class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.pointB = pointB
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    attach(body){
        this.launch.bodyA = body;
    }
    fly(){
        this.launch.bodyA = null;
    }

    display(){
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;

            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8);
            if(pointA<220){
           line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
           line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
           
        } else {
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            
        }
           pop();

       
        }
    }
    
}