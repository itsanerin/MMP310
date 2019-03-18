//mmp 310 week 5
//interface
//by erin brady

//global variables
var columns = 30;
var rows = 5;

var r;
var g;
var b = 30;

function setup() {
    createCanvas(windowWidth, windowHeight - windowHeight / 6);
    //    background(220);
    strokeWeight(2);
    frameRate(8);
    //    colorMode(HSB, 100);


    //    c = random(0, 360);
    //    s = random(20, 50);
    //    b = random(50, 100);

    pattern();

    var saveButton = createButton('Save Snapshot'); //save image button
    saveButton.mousePressed(save);

    var generatePattern = createButton('Regenerate Pattern'); //generate pattern button
    generatePattern.mousePressed(pattern);


    // rows slider
    createDiv("Number of Rows");
    //    createDiv.class("button");
    var rowSlider = createSlider(5, 30, rows);
    rowSlider.input(setRow);
    rowSlider.class('button');

    //color
    createDiv("Color");
    var colorSlider = createSlider(30, 255, b);
    colorSlider.input(setColor);
    colorSlider.class('button');


}

function setRow() {
    rows = this.value();
    pattern();
}

function setColor() {
    b = this.value();
    pattern();
}



function pattern() {
    //    var columns = 30;
    //    var rows = 10;
    var w = width / columns;
    var h = height / rows;
    //    var x = 100;
    //    var y = 100;


    for (let x = -100; x <= width; x += w) {
        for (let y = -100; y <= height; y += h) {

            fill(r, g, b);

            r = random(100, 255);
            g = random(20, 80);
            //            b = random(50, 100);

            if (random(1) > 0.5) {
                triangle(x, y, x + 300, y, x + 150, y + 200);
            } else {
                triangle(x, y + 200, x + 300, y + 200, x + 150, y);
            }


        }
    }
}
