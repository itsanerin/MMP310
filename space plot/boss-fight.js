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
