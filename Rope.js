class Rope
{
    constructor(bodyA, bodyB, offsetX, offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options=
        {
            bodyA:bodyA,
            bodyB:bodyB,
            isStatic: true,
            pointB:{x:this.offsetX, y:this.offsetY}
            }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display()
    {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);

        var anc1X = pointA.x;
        var anc1Y = pointA.y;
        
        var anc2X = pointB.x +this.offsetX;
        var anc2Y = pointB.y +this.offsetY;

        line(anc1X,anc1Y,anc2X,anc2Y);
    }
};
