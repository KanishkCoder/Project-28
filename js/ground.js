class ground
{
	constructor()
	{
		var options={
			isStatic:true,	
			friction:0.4		
			}
		
		this.body=Bodies.rectangle(500,625,1200,20, options);
 		World.add(world, this.body);

	}
	display()
	{
			rectMode(CENTER)
			fill(128,128,128)
			rect(500,625, 1200,20);
			
	}

}