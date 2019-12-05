class JitterBug {
    constructor(x, y, diameter, img) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speed = 1.5;
        this.cat= img;
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        
    }

    display() {
        // imageMode(CENTER);
        // rotate(random(1,5));
    image(this.cat,this.x, this.y,this.diameter, this.diameter);
    // this.cat=random(cats)

    }
}