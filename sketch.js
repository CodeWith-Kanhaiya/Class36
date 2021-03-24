// web page 
//index.html - libraries, links
//sketch.js = code
//form - html -DOM - name and press start to play
//game - database - gamestate, playercount (4 player game)





var mydatabase;
var gameState =0;
var playerCount; 


var form, game;
function setup(){
    createCanvas(500,500);

    mydatabase = firebase.database();

    game = new Game();
    game.Start();
}
//
//database - store information

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

