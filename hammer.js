class Hammer{
constructor(x,y,width,height){

var options= {
'restitution':0.5,
'density':2,
'friction':1
};
this.body=Bodies.rectangle(x,y,50,50,options)
World.add(world,this.body)

this.width=width;
this.height=height;
}

display(){

this.body.position.x=mouseX;
this.body.position.y=mouseY;

fill("brown");
    rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,this.width,this.height)

}
}
