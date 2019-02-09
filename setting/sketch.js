//mmp 310 week 2
//interactive story
//adding 3 settings
//by erin brady

//bird variables
var birdX = 425; //250
var birdY = 120; //150
var birdX2 = birdX - 70; //180
var birdY2 = birdY + 33; //183
var birdX3 = birdX2 - 100; //80
var birdY3 = birdY2 + 50; //233
var bHeadWidth = 50; //50
var bHeadHeight = bHeadWidth - 15; //35
var eyeSize = 6;
var bFootSize = 30;

//squirrel variables
var squirrelX = 750;
var squirrelY = 300; //135
var earSize = 20; //20
var squirrelWidth = 65;
var squirrelHeight = 130;

//misc variables
var dayColor = '#69cae0';
var eveningColor = '#ef9643'
var nightColor = '#370f82';
var currentSetting = "day";
var bgColor = dayColor;
var darkness = 'rgba(0, 0, 0, 0)';

function setup() {
    createCanvas(900, 647);
    img = loadImage('background.png');
}

function draw() {
    background('black');

    fill(bgColor);
    rect(0, 0, 900, 447); //sky background
    image(img, 0, 0); //backyard background

    // bird
    fill('#868686');
    strokeWeight(1);

    //bird body
    beginShape();
    vertex(birdX, birdY);
    bezierVertex(birdX - 15, birdY + 130, birdX2, birdY2, birdX3, birdY3);
    endShape(CLOSE)

    ellipse(birdX - 15, birdY + 10, bHeadWidth, bHeadHeight); // bird head

    // bird eye
    fill('black');
    ellipse(birdX - 5, birdY + 5, eyeSize, eyeSize);

    fill('#f4f43d');
    triangle(birdX + 5, birdY + 20, birdX + 10, birdY + 10, birdX + 25, birdY + 20); // bird beak
    arc(birdX - 45, birdY + 75, bFootSize, bFootSize, -PI, 0, CHORD); //bird foot


    //2nd character squirrel
    fill('#874934');
    rect(squirrelX, squirrelY, squirrelWidth - 20, squirrelHeight, 15); //squirrel tail
    arc(squirrelX - 25, squirrelY + 130, squirrelWidth + 5, squirrelHeight + 50, -PI, 0, CHORD); // squirrel body
    ellipse(squirrelX - 55, squirrelY + 20, earSize, earSize); //squirrel left ear
    ellipse(squirrelX - 30, squirrelY + 20, earSize, earSize); //squirrel right ear
    ellipse(squirrelX - 45, squirrelY + 40, earSize * 3, earSize + 25); //squirrel head

    //squirrel tummy
    fill('#e1bb80');
    arc(squirrelX - 40, squirrelY + 125, squirrelWidth - 35, squirrelHeight - 35, -PI, 0, CHORD);

    //squirrel tooth
    fill('white');
    rect(squirrelX - 70, squirrelY + 51, eyeSize, eyeSize + 1);

    //squirrel eye
    fill('black');
    ellipse(squirrelX - 60, squirrelY + 35, eyeSize, eyeSize);


    //night time darkness
    fill(darkness);
    rect(0, 0, 900, 447);
}

function mouseClicked() {
    if (currentSetting == 'day') {
        currentSetting = 'evening';
        bgColor = eveningColor;
        darkness = 'rgba(0, 0, 0, 0.2)';
    } else if (currentSetting == 'evening') {
        currentSetting = 'night';
        bgColor = nightColor;
        darkness = 'rgba(0, 0, 0, 0.4)';
    } else if (currentSetting == 'night') {
        currentSetting = 'day';
        bgColor = dayColor;
        darkness = 'rgba(0, 0, 0, 0)';
    }
}
