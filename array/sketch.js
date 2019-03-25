//mmp 310 week 7
//array
//by erin brady


//squirrel variables
//var squirrelX = 750;
//var squirrelY = 300; //135
var eyeSize = 6;
var earSize = 20; //20
var squirrelWidth = 65;
var squirrelHeight = 130;

var squirrels = [];
var s = squirrels[i];

function mousePressed() {
    squirrels.push([mouseX, mouseY]);
}

function setup() {

    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('plum');


    for (let i = 0; i < squirrels.length; i++) {
        squirrel(squirrels[i][0], squirrels[i][1], 100);
        squirrels[i][1] += 2;
    }
}

function squirrel(squirrelX, squirrelY) { //character 2
    fill('#874934'); //brown
    rect(squirrelX, squirrelY, squirrelWidth, squirrelHeight, 15); //squirrel tail
    arc(squirrelX - 25, squirrelY + 130, squirrelWidth + 5, squirrelHeight + 50, -PI, 0, CHORD); // squirrel body
    ellipse(squirrelX - 55, squirrelY + 20, earSize, earSize); //squirrel left ear
    ellipse(squirrelX - 30, squirrelY + 20, earSize, earSize); //squirrel right ear
    ellipse(squirrelX - 45, squirrelY + 40, earSize * 3, earSize + 25); //squirrel head

    //squirrel tummy
    fill(s, 0, s); //tan
    arc(squirrelX - 40, squirrelY + 125, squirrelWidth, squirrelHeight, -PI, 0, CHORD);

    //squirrel tooth
    fill('white');
    rect(squirrelX - 70, squirrelY + 51, 6, 7);

    //squirrel eye
    fill('black');
    ellipse(squirrelX - 60, squirrelY + 35, eyeSize, eyeSize);
}
