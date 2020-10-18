class Paper{

    constructor(){

        var options ={

            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:0.6
        }

        this.body = Bodies.circle(65,630,5,options);
        this.radius = 50;

        this.body.debug = true;
        
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("green");
        circle(0,0,this.radius);
        pop()
    }


    
}

