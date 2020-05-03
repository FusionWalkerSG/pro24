class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
 // this.image = loadImage("sprites/Tank.png");
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width=width;
    this.height=height;
  World.add(world,this.body);
  }
  display(){
    fill("brown")
    var pos= this.body.position;
    rect (pos.x,pos.y,this.width,this.height);
  }
}
