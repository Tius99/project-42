var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var fruit

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  fruitImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


//function setup11111111111111111111111111111111111111111000000000
function setup() {
createCanvas(600,600);
var time =0
    score =0
//creating sprite
monkey=createSprite(80,315,20,20);
monkey.addAnimation("monkeyrun",monkey_running);
 monkey.scale=0.15; 
  ground=createSprite(400,350,900,10)
  ground.velocityX=-1   
  fruitGroup=new Group()
  obstacleGroup=new Group()
}


function draw() {
background("white");
    
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
    
  if(ground.x<0){
    ground.x=ground.width/2
  }
  addfruit()
  
  spawn_obstacle()
  
  monkey.collide(ground)
  
 drawSprites(); 
  stroke("white")
  text("score"+score,500,50)
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    obstacleGroup.setVelocityXEach(0)
    fruitGroup.setVelocityXEach(0)
  obstacleGroup.destroyEach(0)
    fruitGroup.destroyEach(0)
  obstacleGroup.setLifetimeEach(-1)
  fruitGroup.setLifetimeEach(-1)
  stroke("black") 
  fruitGroup.destroyEach()
  obstacleGroup.destroyEach()
  }
  time=Math.ceil(frameCount/frameRate())
    text("time"+time,100,50)
  
  //if(monkey.isTouching(fruit)){
   // score=score+1}
  
  } 
function spawn_obstacle(){
if(frameCount%120===0){
   obstacle=createSprite(300,320,10,40)
   obstacle.addImage( obstacleImage)
  obstacle.lifetime=150
   obstacle.scale=0.1
  obstacle.velocityX=-5
   //if(obstacleGroup.isTouching(monkey)){
     //   monkey.velocityY =0;}
  obstacleGroup.add(obstacle)
}}
function addfruit(){
if(frameCount%80===0) {
  fruit=createSprite(350,220,10,40)
  fruit.y=random(120,200)
 fruit.addImage(fruitImage)
  fruit.lifetime=100 
  fruit.velocityX=-5 
fruit.scale=0.1
  monkey.depth=fruit.depth+1
  fruitGroup.add(fruit)
     score=score+1
     
 
}}