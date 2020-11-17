
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas( 400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  fruitGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
    background("lightBlue");
    if(keyDown("space")) {
    monkey.velocityY = -12;
  }
   monkey.velocityY = monkey.velocityY +0.8;
   monkey.collide(ground);
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  stroke("black");
  fill("black");
  textSize(20);
  survivaltime = Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME:"+ survivaltime , 100,50);
  bananas();
  obstacles();
  drawSprites();
  
}
function bananas(){
  if(World.frameCount%80===0){
    banana = createSprite(500,500,20,20);
    banana.scale = 0.1;
    banana.addImage(bananaImage);
    banana.y=Math.round(random(200,200));
    banana.velocityX = -7;
    banana.lifetime = 100;
    fruitGroup.add(banana);
  }
}
function obstacles(){
  if(World.frameCount%300===0){
    stone = createSprite(300,300,20,20);
    stone.scale = 0.1;
    stone.addImage(obstaceImage);
    stone.y=Math.round(random(330,330));
    stone.velocityX = -7;
    stone.lifetime = 100;
    obstacleGroup.add(stone);
  }
}




