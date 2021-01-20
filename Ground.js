class Ground{
constructor(x,y,width,height) {
    
    var options = {
        isStatic : "true",
        restitution : 0.3,
        friction : 0.5,
        density : 1.2

    }

this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options);
World.add(world, this.body);

}

display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
    }

}