//laser class

class Laser extends Entity {
    constructor() {
        super(spaceship.x, spaceship.y);
        this.speed.y = -15;
    }

    display() {
        fill('yellow');
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, 10, 25);
    }
}
