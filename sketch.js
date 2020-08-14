var ball;
var ball1, database, pos;
function setup(){
    createCanvas(500,500);

      // -> database
      database = firebase.database()
      // -> position
      pos = database.ref(ball / pos)
        pos.on('value',readPosition,showError)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    

  
}

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

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(){
    pos = data.val()
    ball.x = pos.x 
    ball.y = pos.y
}

function writePosition(x,y) {
    database.ref(('ball / pos').set({
        x: pos.x + x,
        y: pos.y + y
    }))
}

function showError() {
    null
}