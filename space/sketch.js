/*
    Erin Brady
	mmp 310 week 9
	spaceship game
*/

var shipSprite;
var asteroidSprite;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("background1.jpg");

    shipSprite = loadImage("spaceship.png");

    astImgs[0] = loadImage("asteroid1.png");
    astImgs[1] = loadImage("asteroid2.png");
    astImgs[2] = loadImage("asteroid3.png");
}

var spaceship;
var astImgs = [];
var asteroids = [];
//var lasers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    imageMode(CENTER);

    // position the spaceship at start of game
    spaceship = new Spaceship();
}

function draw() {
    background(51);
    image(backgroundImg, width / 2, height / 2, width, height);

    // adds random asteroid
    if (random(100) > 90) {

        // create an asteroid
        asteroids.push(new Asteroid());
    }

    spaceship.controls();
    spaceship.display();
    spaceship.update();

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].update();

        //detect all lasers
        //        for (let j = 0; j < lasers.length; j++) {
        //            if (asteroids[i].collide(lasers[j])) {
        //                asteroids[i].died = true;
        //                lasers[j].died = true;
        //            }
        //        }

        //collision with spaceship
        if (asteroids[i].collide(spaceship)) {

            //end game

            //main text
            textFont('VT323');
            textAlign(CENTER, CENTER);
            textSize(155);
            fill("black");
            text("CRITICAL FAILURE", width / 2 + 10, height / 2);

            //shadow
            textSize(155);
            fill('red');
            text("CRITICAL FAILURE", width / 2, height / 2);
            noLoop();
        }
    }


    //
    //    for (let i = 0; i < lasers.length; i++) {
    //        lasers[i].display();
    //        lasers[i].update();
    //    }
    //
    //    //clean up dead asteroids & lasers
    //    for (let i = 0; i < asteroids.length; i++) {
    //        if (asteroids[i].died) {
    //            asteroids[i].remove(asteroids);
    //        }
    //    }
    //
    //    for (let i = 0; i < lasers.length; i++) {
    //        if (lasers[i].died) {
    //            lasers[i].remove(lasers);
    //        }
    //    }

}

//add lasers
//function keyPressed() {
//    if (keyCode === 32) {
//        lasers.push(new Laser());
//    }
//}
