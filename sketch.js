var player,enemy,bg,bulletGroup,bulletSound;
var playerImg1,bullet,bulletImg,bgImg,enemyImg;

function preload(){
  bgImg = loadImage("background.jpg");
  playerImg1 = loadImage("playerImg1.png");
  bulletImg = loadImage("bullet.png");
  enemyImg = loadImage("enemy.png");
 // bulletSound = loadSound("bullet.wav");
}

function setup(){
  createCanvas(700,400);
  bg = createSprite(0,0,700,400);
  bg.addImage(bgImg);
  
  player = createSprite(50,400,20,50);
  player.addImage(playerImg1);
  player.scale = 1.9;

  bulletGroup = new Group();
}

function draw(){
  background(255);
  if(keyDown("up_arrow")){
    player.y  = player.y-10;
  }
  if(keyDown("down_arrow")){
    player.y  = player.y+10;
  }
  if(keyDown("right_arrow")){
    player.x  = player.x+10;
  }
  if(keyDown("left_arrow")){
    player.x  = player.x-10;
  }
if(keyWentDown("space")){
  bullet = createSprite(player.x,player.y,10,10);
  bullet.velocityX = 15;
  bullet.addImage(bulletImg);
  bulletGroup.add(bullet);
}
spawnEnemy();
if(bullet.isTouching(enemy)){
  enemy.destroy();
  
}

  
  drawSprites();
}
function spawnEnemy(){
  if(frameCount % 120===0){
 enemy = createSprite(700,random(30,400),20,50);
 enemy.addImage(enemyImg);
 enemy.scale = 0.2;
 enemy.velocityX = -1;
 //enemy.debug = true;
}}