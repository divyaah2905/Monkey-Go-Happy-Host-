const PLAY=1
const END=0


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground,invisible;
var survialTime=0;
var GameState;
GAMESTATE=PLAY

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  //end=loadAnimation("sprite_0.png");
  
}



function setup() {
 createCanvas(400,400)
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey= createSprite(70,270,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,350,1000,10);
  ground.x = ground.width/2;
  ground.velocityX= -3;
  //ground.debug = true;
  
  //invisible = createSprite(250,345,1000,10);
  //invisible.x = ground.width/2;

  }


function draw() {
 
  background("orange");
  
  
    if(keyDown("space") && monkey.y>150){
      monkey.velocityY=-20
    }
    monkey.velocityY+=0.7;
  if (ground.x<0){
    ground.x=ground.width/2;
  }
    monkey.collide(ground);
    
    Food();
    Obstacles();
    

    SurvialTime = Math.ceil(frameCount/frameRate());
    
 
 
  
  stroke("black");
  textSize(20);
  text("survial Time:" + SurvialTime,100,50);

  
  
  drawSprites();
}

function Food(){
  
  if (frameCount% 80 === 0){
    var banana = createSprite(500,10,10,20);
    banana.addImage("banana", bananaImage);
    banana.velocityX= -(5+2*score/100);
    banana.y=Math.round(random(120,200));
    banana.scale=0.1
    FoodGroup.add(banana);
    FoodGroup.setLifetimeEach(100);
    banana.setCollider("rectangle",0,0,400,400);
      
  }
  
}
function Obstacles(){
 
  if (frameCount% 300 === 0){
    var obstacle = createSprite(500,310,23,32);
    obstacle.velocityX= -(5+2*score/100);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
    obstacleGroup.setLifetimeEach(100);
    //obstacle.debug = true;
     obstacle.setCollider("circle",0,0,200);
    }
  
}