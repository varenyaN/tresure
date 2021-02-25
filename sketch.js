var path,boy,cash,diamonds,jwellery,sword;
var  boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var play=1;
var end=0;
var Gamestate=play;
var endstate=end;
var Gameover;
var GR;
var Treasure
var Treasure;
var Treasure=0;
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
GR=loadAnimation("gameOver.png");
  
  
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.07;
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
}



function draw() {

  background("black");
  

   if (Gamestate===play){
      boy.x = World.mouseX;
      edges= createEdgeSprites();
  boy.collide(edges);
       if(path.y > 400 ){
    path.y = height/2;
  }
      createCash();
    createDiamonds();
    createJwellery();
    createSword();

     if (diamondsG.isTouching(boy)){
 Treasure=Treasure+5;
  diamondsG.destroyEach()
}
 else if (cashG.isTouching(boy)){
 Treasure=Treasure+10;
    cashG.destroyEach()
}
else if (jwelleryG.isTouching(boy)){
 Treasure=Treasure+15;
   jwelleryG.destroyEach();
}
    else
      if (swordGroup.isTouching(boy)){
 Gamestate=end;
  
  boy.addAnimation("SahilRunning",GR)
    boy .x=200;
    boy.y=200;
    boy.scale=0.5;
    cashG .destroyEach();
 diamondsG.destroyEach();
jwelleryG.destroyEach();
   swordGroup .destroyEach();

 cashG .setVelocityYEach(0);
 diamondsG.setVelocityYEach(0);
jwelleryG.setVelocityYEach(0);
   swordGroup .setVelocityYEach(0);
path.velocityY=0;

  }
 
   }
  //code to reset the background

  
   
    
   

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ Treasure,150,30);

   
}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage("SahilRunning",cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage("SahilRunning",diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage("SahilRunning",jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage("SahilRunning",swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
