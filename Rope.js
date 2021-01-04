class Rope{
    constructor(body1, body2, offsetX, offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
          }
    

    this.rope=Constrant.create(options)
    World.add(world,this.rope)
    }
    display(){
        if(this.sling.bodyA){
            var A = this.sling.bodyA.position;
            var B = this.pointB;
            strokeWeight(4);
            line(A.x, A.y, B.x, B.y);
        }
    }
    
}