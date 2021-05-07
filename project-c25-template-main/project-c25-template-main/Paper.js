class Paper{
	constructor(x,y,r)
	{
	// assign options to the paper ball
   
	var options={
        isStatic:false,
		restitution:0.2,
		friction:5.0,
		density:1.0
		 }
		 this.x=x;
		 this.y=y;
		 this.r= r
		this.body= Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        this.image=loadImage("paper.png")
		
		World.add(world, this.body);

	}
	display()
	{
       
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the image here to display the paper ball
           
			image(this.image,0,0,this.r,this.r);
			pop()
	}

}