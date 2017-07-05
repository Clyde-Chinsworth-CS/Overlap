function movePlayer1() {
    // player 1
    // horizontal movement
    if (keyIsDown(65)) {
        player.x -=player.delta;
        if (player.x - player.r < 0) {
            player.x = player.r;
        }
    } 
    if (keyIsDown(68)) {
        player.x +=player.delta;
        if (player.x + player.r > width) {
            player.x = width - player.r;
        }
    // vertical movement    
    } 
    if (keyIsDown(83)) {
        player.y +=player.delta;
        if (player.y + player.r > height) {
            player.y = height - player.r;            
        }
    } 
    if (keyIsDown(87)) {
        player.y -=player.delta;
        if (player.y - player.r < 0) {
            player.y = player.r;
        }
    }
}

function movePlayer2() {
    // player 2
    // horizontal movement
    if (keyIsDown(37)) {
        player2.x -=player2.delta;
        if (player2.x - player2.r < 0) {
            player2.x = player2.r;
        }
    } 
    if (keyIsDown(39)) {
        player2.x +=player2.delta;
        if (player2.x + player2.r > width) {
            player2.x = width - player2.r;
        }
    // vertical movement    
    } 
    if (keyIsDown(40)) {
        player2.y +=player2.delta;
        if (player2.y + player2.r > height) {
            player2.y = height - player2.r;            
        }
        
    } 
    if (keyIsDown(38)) {
        player2.y -=player2.delta;
        if (player2.y - player2.r < 0) {
            player2.y = player2.r;
        }
    }
}

function checkCollision() {
    if (check == 0) {
        if (Math.sqrt((player2.x - player.x) * (player2.x - player.x) + (player2.y - player.y) * (player2.y - player.y)) < player.r + player2.r) { 
            if (keyIsDown(96)) {
                player.delta = 0;
                player.fillCol = ("gray");
                check = 1
            }
            if (keyIsDown(70)) {
                player2.delta = 0;
                player2.fillCol = "gray";
                check = 1
            }
        } else { //if player tries to hit nothing, they die
            if (keyIsDown(96)) {
                        player2.delta = 0;
                        player2.fillCol = ("gray");
                        check = 1
                    }
            if (keyIsDown(70)) {
                        player.delta = 0;
                        player.fillCol = "gray";
                        check = 1
                    }
        }
    } else if (check == 1) { 
        fill("gray");
        text("esc", width/2, height/2)
        if (keyIsDown(27)) { // resets players
            player.x = width / 2 - 300,0
            player.y = height / 2,
            player.fillCol = "white"
            player.delta = 3
            player2.x = width/2 + 300
            player2.y = height/2
            player2.fillCol = "black"
            player2.delta = 3
            check = 0
            xcoord=-500
            frames = 0
        }
    }
    
}

function drawRect() {
    noStroke();
    
    fill(alpha);
    rect( xcoord , 0 , width , height);
    
      xcoord +=2
    if (xcoord > width) {
        xcoord = 0-(width);
    }
}

function drawCircle() {
    if (player.x < xcoord + player.r || player.x > xcoord + width + player.r) {
        fill(player.fillCol);
        ellipse( player.x, player.y, 2 * player.r, 2 * player.r);

        fill(player2.fillCol);
        ellipse (player2.x, player2.y, 2 * player2.r, 2 * player2.r);
    } else {
        fill(player2.fillCol);
        ellipse( player2.x, player2.y, 2 * player2.r, 2 * player2.r);

        fill(player.fillCol);
        ellipse (player.x, player.y, 2 * player.r, 2 * player.r);
    }
}

function controlP() {
    if (check == 0) {
        if (frames < 500) {
            fill("white");
            textSize(32);
            textAlign(CENTER);
            text("overlap", width/2, height/2);

            //control scheme for p1
            text("w", width/2 - 300, height/2 - 100);
            text("s", width/2 - 300, height/2 - 60);
            text("a", width/2 - 340, height/2 - 60);
            text("d", width/2 - 260, height/2 - 60);
            text("f", width/2 - 300, height/2 + 80);

            //control scheme for p2
            fill("black");
            text("↑", width/2 + 300, height/2 - 100);
            text("↓", width/2 + 300, height/2 - 60);
            text("←", width/2 + 260, height/2 - 60);
            text("→", width/2 + 340, height/2 - 60);
            text("0", width/2 + 300, height/2 + 80);
        }
    } 
}