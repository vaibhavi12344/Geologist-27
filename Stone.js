class Stone{
constructor(x,y,width,height){

var options={
'restitution':0.8,
'density':2,
'friction':1
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width
this.height=height
World.add(world,this.body)


}
display(){
fill("blue");
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
}
