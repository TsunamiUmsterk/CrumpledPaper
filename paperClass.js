class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
      this.image = loadImage("paper.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      ellipseMode(RADIUS);
      image(this.image, 0, 0, this.radius*2.5, this.radius*2.5)
     // ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };



