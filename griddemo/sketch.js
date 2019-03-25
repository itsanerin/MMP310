//mmp 310 week 4
//grid
//by erin brady

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    strokeWeight(2);

    frameRate(8);

    var columns = 8;
    var rows = 8;
    var w = width / columns;
    var h = height / rows;
    //    var x = 100;
    //    var y = 100;


    for (let x = 0; x <= width; x += w) {
        for (let y = 0; y <= height; y += h) {

            stroke(255);
            strokeWeight(2);
            if (random(2) > 1) {
                line(x, y, x - w, y + h);
            } else {
                line(x + w, y, x, y + h);
            }

        }
    }
}
