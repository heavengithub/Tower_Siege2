class Polygon{

    constructor(x,y,height){
    var options=
    {
       
       restitution:1,
			friction:0,
			density:0.8



    }
     this.x=x;
		this.y=y;
        this.height=height; 
        this.image = loadImage("images.png");


       
    this.body=Bodies.circle(x,y,height,options);
    World.add(world,this.body);

  

    }
    display() {

    push();
    image(this.image, this.body.position.x, this.body.position.y,200,200);
    pop();

    }
}
    