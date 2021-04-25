class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction':0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 100;
      this.height = 100;
      World.add(world, this.body);
    };
    display(){
  
      var stonepos= this.body.position
      push();
      translate(stonepos.x, stonepos.y);
     var angle = this.body.angle;
      rotate(angle);
      strokeWeight(3);
      stroke('grey')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  