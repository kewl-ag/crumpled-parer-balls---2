class Ball{
constructor(x,y,width){
var options = {

    isStatic : false,
    restitution : 0.3,
    friction:0.5,
    density : 2

}
this.body = Matter.Bodies.circle(x,y,width, options);
this.width = width;
this.image = loadImage("paper.png");
World.add(world,this.body);

}
display(){
var pos = this.body.position;
//ellipse(pos.x,pos.y,this.width,this.height);
image(this.image,pos.x, pos.y, this.width, this.width);
	
}

};