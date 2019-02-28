//mmp 310 week 4
//grid
//by erin brady

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    strokeWeight(2);

    frameRate(8);

}

function draw() {
    var columns = 30;
    var rows = 30;
    var w = width / columns;
    var h = height / rows;
    //    var x = 100;
    //    var y = 100;


    for (let x = -100; x <= width; x += w) {
        for (let y = -100; y <= height; y += h) {

            //            colorMode(HSB);
            let r = random(0, 290);
            let g = random(20, 50);
            let b = random(50, 120);
            fill(r, g, b);

            if (random(1) > 0.5) {
                triangle(x, y, x + 300, y, x + 150, y + 200);
            } else {
                triangle(x, y + 200, x + 300, y + 200, x + 150, y);
            }


        }
    }
}
