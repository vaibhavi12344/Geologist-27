class Rubber{
constructor(x,y,diameter){

var options={
'restitution':0.8,
'friction':5,
'density':1.0
}
this.body=Bodies.circle(x,y,diameter,options)
World.add(world,this.body);
this.diameter=diameter

}
display(){
fill("red")
circle(this.body.position.x,this.body.position.y,this.diameter)
}
}