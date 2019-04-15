/*
	asteroid class
*/

class Asteroid extends Entity {

    constructor() {
        super(random(width), -100);
        this.speed.x = random(-1, 1);
        this.speed.y = random(5);



        this.image = random(astImgs);
    }

    display() {
        //        fill(0);
        //        noStroke();
        image(this.image, this.x, this.y, this.size, this.size);
    }

    update() {
        this.x += this.speed.x;
        this.y += this.speed.y;
    }
}
