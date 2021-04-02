class Snow
{
    constructor(x , y , w , h)
    {
        var option = {
            restitution : 0.8 ,
            friction : 0.3,
            density : 1.0
        }
        this.body = Bodies.rectangle(x,y,w,h,option);
        this.w = w;
        this.h = h ;
        World.add(world,this.body);
    }        
    display(){

        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //fill("pink");
        pop();

    }
}