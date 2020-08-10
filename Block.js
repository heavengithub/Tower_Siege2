class Blocks extends BaseClass{
    constructor (x,y,height,width){
       super(x,y,width,height);
       this.image = loadImage("download.jpg");
         this.Visibility=255;
        
        }
      
        display(){
          console.log(this.body.speed);
          if(this.body.speed < 3){
           super.display();
          }
          else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity -5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
          }
          
        }
       
       
       
       };