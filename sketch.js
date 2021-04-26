var ground, player, playerImage, groundImage, fireImage, obstacle, coinImage, invisibleGround, coinsGroup,
 obstaclesGroup, score, gameState = "play", gameOver, gameOverImage;

function preload(){
playerImage = loadImage("player.png")
groundImage = loadImage("background game.png")
fireImage = loadImage("obstacles (1).png")
coinImage = loadImage("coin.png")
gameOverImage = loadImage("Game over.png")

}


function setup() {
createCanvas(1200,700);
ground = createSprite (600, 350, 1700, 500);
ground.visable = true;
player = createSprite (50, 100, 50, 50);
invisibleGround = createSprite(600, 680, 1200, 50);
invisibleGround.visible = false;
score = 0;
gameOver = createSprite(600,350);
gameOver.addImage(gameOverImage);
gameOver.visible = false;
gameOver.scale = 2;

coinsGroup = new Group();
obstaclesGroup = new Group();

ground.velocityX = -3;

player.addImage(playerImage);
player.scale = 0.2;
ground.addImage(groundImage);
ground.scale = 1.2;
ground.x = ground.width/2
}

function draw() {
  background(0,0,0);

if(gameState==="play"){

  if(keyDown ("space")){
    player.velocityY = -10; 
   }

  if(ground.x<380){
    ground.x = ground.width/2
  }
  obstacles();
  coins();
  if(coinsGroup.isTouching(player)){
    coinsGroup[0].destroy();
    score = score+1
  }
  if(obstaclesGroup.isTouching(player)){
    
   gameState = "end";
    }
}


else if(gameState==="end"){
gameOver.visible = true;
ground.visible = false;
coinsGroup.destroyEach();
obstaclesGroup.destroyEach();

ground.velocityX = 0;

background(0);

// textSize(60)
//     fill("white")
//     text("Game Over", 470,410);
}

  
  
  player.velocityY = player.velocityY+1; 
  player.collide(invisibleGround);    
  
  

  
  //obstacles2();



 

  

  drawSprites ();
  fill("white");
  textSize(30)
  text("Score "+score, 980, 90)

  

}

function obstacles(){
if(frameCount % 160 === 0){
var obstacle = createSprite(Math.round(random(200, 1000)),Math.round(random(50,650)),100,100);
obstacle.velocityX = -6;
obstacle.addImage(fireImage)
obstaclesGroup.add(obstacle)
obstacle.lifetime = 200;	
}	
}

function coins(){
if(frameCount % 100 === 0){
  var coin = createSprite(1200,Math.round(random(50,650)),100,100);
  coin.velocityX = -6;
  coin.addImage(coinImage)
  coin.scale = 0.3;
  coinsGroup.add(coin)
  coin.lifetime = 200;
}
}

// function obstacles2(){
//   if(frameCount % 160 === 0){
//   var obstacle2 = createSprite(Math.round(random(200, 1000)),50, 100, 100);
//   obstacle2.velocityY = +6;
//   obstacle2.addImage(fireImage)
//   obstaclesGroup.add(obstacle2)
//   obstacle2.lifetime = 200;	
//   }	
//   }
