/*
    Erin Brady
	mmp 310 week 9
	spaceship game
*/

var shipSprite;
var asteroidSprite;
var bossSprite;
var backgroundImg;
var shipExplode;
var bossExplode;
var astExplode;

function preload() {
    backgroundImg = loadImage("background1.jpg");

    shipSprite = loadImage("spaceship.png");

    astImgs[0] = loadImage("asteroid1.png");
    astImgs[1] = loadImage("asteroid2.png");
    astImgs[2] = loadImage("asteroid3.png");

    bossSprite = loadImage("boss.png");

    shipExplode = loadImage("explode.png");
    bossExplode = loadImage("bossExplode.png");
}

var spaceship;
var asteroid;
var boss;
var astImgs = [];
var asteroids = [];
var lasers = [];
var s = [];
var bossLasers = [];
var astField = [];

// score
// one point for every asteroid destroyed
var score = 0;

var x = 100,
    y = 50,
    w = 100,
    h = 47;

var shipX = 500;
var shipY = 100;
var bossShipX = -300;

var story1 = " ";
var story2 = " ";
var chapter = 'bossFight';
var plotChapter = "1";
var textColor = 'white';

//probability asteroid spawns in each frame
var asteroidProb = 99;

var playerLives = 3;
var bossLives = 20;


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    imageMode(CENTER);

    // position the spaceship at start of game
    spaceship = new Spaceship();
    boss = new Boss();

    //setup asteroid field
    for (let i = 0; i < 50; i++) {
        astField.push(new Jitter());
    }

}

function draw() {

    background(51);
    image(backgroundImg, width / 2, height / 2, width, height);

    if (chapter == 'story') {
        story();
    } else if (chapter == 'game') {
        game();

    } else if (chapter == 'bossFight') {
        bossFight();

    } else if (chapter == 'end') {
        end();
    }
}

function game() {
    if (score == 200) chapter = 'bossFight';

    // adds random asteroid
    if (random(100) > asteroidProb) {

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
        for (let j = 0; j < lasers.length; j++) {
            if (asteroids[i].collide(lasers[j])) {
                asteroids[i].died = true;
                lasers[j].died = true;
                asteroidProb -= 0.1;


                // increment score
                score += 1;
            }
        }

        //collision with spaceship
        if (asteroids[i].collide(spaceship)) {
            image(shipExplode, spaceship.x, spaceship.y, width / 4, height / 3);
            endGame();
        }
    }



    for (let i = 0; i < lasers.length; i++) {
        lasers[i].display();
        lasers[i].update();

        if (lasers[i].died) {
            lasers[i].remove(lasers);
        }
    }

    //clean up dead asteroids & lasers
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i].died) {
            asteroids[i].remove(asteroids);
        }
    }


    /* user display */

    // score
    fill('white');
    textFont('VT323');
    textSize(40);
    text('Score: ' + score, width - 300, 50);

}

//add lasers
function keyPressed() {
    if (keyCode === 32) {
        lasers.push(new Laser());
    }
}

function mouseClicked() { //progression

    //forward
    if (mouseX > width - x && mouseX < width - x + w && mouseY > height - y && mouseY < height - y + h) {
        if (plotChapter == '1') {
            plotChapter = '2';
            shipX = 0;
        } else if (plotChapter == '2') plotChapter = '3';
        else if (plotChapter == '3') chapter = 'game';
    }
}

function story() {
    fill('black');
    rect(0, height - 130, width, height - 100);

    //story

    //progression buttons
    if (mouseX > width - x && mouseX < width - x + w && mouseY > height - y && mouseY < height - y + h) { //next
        fill('#3f3f3f'); //dark gray
        rect(width - x, height - y, w, h);
    }

    //story text
    textSize(30);
    fill(textColor);
    textFont('VT323');
    text(story1, width / 15, height - 100);
    text(story2, width / 15, height - 70);
    fill('white');
    textSize(20);
    text('Next ▶', width - x + 15, height - y + 30);

    //chapters
    if (plotChapter == '1') {
        textColor = 'white';
        story1 = "Once upon a time, in an alternate dimension where fearsome aliens roam the galaxy, the spacecraft Trinity"
        story2 = "must evade her assailant.";

        push();
        translate(shipX, shipY);
        shipX += 1;
        shipY += 1;
        rotate(radians(135));
        image(shipSprite, 0, 0); //width - 200
        pop();


        push();
        translate(shipX - 300, shipY - 300);
        rotate(radians(325));
        image(bossSprite, 0, 0);
        pop();


    } else if (plotChapter == '2') {
        textColor = 'white';
        story1 = "An asteroid field is up ahead! Maybe she can use it for cover."
        story2 = "";
        shipY = height / 2;

        //spaceship
        push();
        translate(shipX, shipY);
        shipX += 2;
        rotate(radians(90));
        image(shipSprite, 0, 0); //width - 200
        pop();

        //boss Ship
        push();
        translate(bossShipX, shipY);
        if (bossShipX < width / 2 - 80) {
            bossShipX += 2;
        }
        rotate(radians(270));
        image(bossSprite, 0, 0);
        pop();


        //draw asteroid field
        for (let i = 0; i < astField.length; i++) {
            astField[i].move();
            astField[i].display();
        }

    } else if (plotChapter == '3') {
        push();
        translate(width / 2, 300);
        scale(3.0);
        image(bossSprite, 0, 0);
        pop();


        textColor = 'orange';
        story1 = "YOU CAN RUN... BUT YOU WILL NEVER ESCAPE!";
        //        textColor = 'white';
        //        story2 = "The asteroid field proves to be a menacing obstacle. Can the Trinity survive?"
        story2 = "";
    }
}

function bossFight() {

    spaceship.display();
    spaceship.update();
    spaceship.controls();

    boss.display();
    boss.update();

    /* user display */

    // lives
    fill('#ff3fda');
    textFont('VT323');
    textSize(40);
    text('Lives: ' + playerLives, width - 200, height - 20);
    fill('orange');
    text('Boss lives: ' + bossLives, width - 300, 50);

    for (let i = 0; i < bossLasers.length; i++) {
        bossLasers[i].display();
        bossLasers[i].update();

        //collision with spaceship
        if (bossLasers[i].collide(spaceship)) {
            bossLasers[i].died = true;
            playerLives -= 1;

            if (playerLives == 0) {
                endGame();
                image(shipExplode, spaceship.x - width * 0.10, spaceship.y - height * 0.08, width / 4, height / 3);

            }
            if (bossLasers[i].died) {
                bossLasers[i].remove(bossLasers);
            }
        }
    }


    for (let i = 0; i < lasers.length; i++) {
        lasers[i].display();
        lasers[i].update();

        //collision with boss
        if (lasers[i].collide(boss)) {
            bossLives -= 1;
            lasers[i].died = true;

            if (bossLives == 0) {
                winGame();
                image(bossExplode, boss.x - width * 0.10, boss.y - height * 0.08, width / 4, height / 3);
            }
        }

        if (lasers[i].died) {
            lasers[i].remove(lasers);
        }

    }
}

function endGame() {
    //shadow
    textFont('VT323');
    textAlign(CENTER, CENTER);
    textSize(155);
    fill("black");
    text("CRITICAL FAILURE", width / 2 + 10, height / 2);


    //main text
    textSize(155);
    fill('red');
    text("CRITICAL FAILURE", width / 2, height / 2);
    noLoop();
}

function winGame() {
    //shadow
    textFont('VT323');
    textAlign(CENTER, CENTER);
    textSize(155);
    fill("black");
    text("VICTORY IS YOURS", width / 2 + 10, height / 2);

    //main text
    textSize(155);
    fill('#ff3fda');
    text("VICTORY IS YOURS", width / 2, height / 2);
    noLoop();
}

class Jitter {
    constructor() {
        this.x = random(width / 2, width);
        this.y = random(height - 150);
        this.diameter = random(30, 60);
        this.speed = 1;
        this.image = random(astImgs);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
        image(this.image, this.x, this.y, this.diameter, this.diameter);
    }
}
