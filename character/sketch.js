//mmp 310 week 1
//interactive story
//characters sketch
//by erin brady

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(50);
    
    
    var birdX = 250;
    var birdY = 150; //150
    var birdXY2 = birdY + 33; //183
    var birdX3 = birdXY2 - 100; //83
    var birdY3 = 231; //231
    var bHeadWidth = 50; //50
    var bHeadHeight = 35; //35
    var eyeSize = 6;
    var bFootSize = 30;

    //first character bird
    fill('#6db6ff');
        noStroke();

    //bird body
    beginShape();
    vertex(birdX, birdY);
    bezierVertex(birdX - 15, birdY + 130, birdXY2, birdXY2, birdX3, birdY3);
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
//    strokeWeight(1);
    rect(400, 135, 45, 130, 15); //squirrel tail
    arc(375, 265, 70, 180, -PI, 0, CHORD); // squirrel body
    ellipse(355, 175, 60, 45); //squirrel head
    ellipse(343, 155, 20, 20); //squirrel left ear
    ellipse(370, 155, 20, 20); //squirrel right ear
    //squirrel tummy
    fill('#e1bb80');
    arc(360, 260, 30, 95, -PI, 0, CHORD);
    
    fill('white');
    rect(330, 186, 6, 7); //squirrel tooth
    
    fill('black');
    ellipse(340, 170, eyeSize, eyeSize); //squirrel eye
}
