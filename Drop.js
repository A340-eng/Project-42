class Drop{
    constructor(x, y){
    var options = {
		restitution: 0.3,
		friction: 5,
		density: 1
	}
		this.x=x;
		this.y=y;
		//this.r=r;
		this.rain = Bodies.circle(this.x, this.y, 5, options);
		World.add(world, this.Drop);
	}

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x: random(0, 400), y: random(0, 400)})
        }
    }

    display(){
        var rainpos=this.body.position;	
        push()
        translate(rainpos.x, rainpos.y);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("darkblue");
        
        ellipse(this.x, this.y, 5);

        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
          var maxDrops = 100;            
          for(var i = 0; i<maxdrops; i++){
            drops.push(new createDrop(random(0,400),random(0,400)));              
          }
        pop()
}
}