class Sand{
constructor(x,y,diameter){

var options={
'restitution':1.3,
'friction':5,
'density':1
}
this.body=Bodies.circle(150,50,40,options)
this.diameter=diameter
World.add(world,this.body)
}
display(){
fill("yellow")
circle(this.body.position.x,this.body.position.y,this.diameter)
}
}