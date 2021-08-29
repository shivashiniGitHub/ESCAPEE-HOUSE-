const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sofia,sofiaImg,sofia2,sofia3;
var sbg;

var next;

var time = 90;

var points = 0;

var gameState  = "INSROOM1" ;
var END = 0;
var LEVEL1 = 1;
var INSROOM2 = 2;
var LEVEL2 = 3;

var door,doorImg,doorImg2;
var bed,bedImg;
var pillow,pillowImg;
var eye,eyeImg;
var cat,catImg;
var mirror,mirrorImg;
var bookshelf,bookShelfImg;
var puzzleCat1,puzzleCat1Img,puzzleCat2,puzzleCat2Img,puzzleCat3,puzzleCat3Img,puzzleCat4,puzzleCat4Img;
var puzzleDog1,puzzleDog1Img,puzzleDog2,puzzleDog2Img,puzzleDog3,puzzleDog3Img,puzzleDog4,puzzleDog4Img;
var puzzleBird1,puzzleBird1Img,puzzleBird2,puzzleBird2Img,puzzleBird3,puzzleBird3Img,puzzleBird4,puzzleBird4Img;


function preload(){
  
  doorImg = loadImage("images/doorClosed.png");
  doorImg2 = loadImage("images/doorOpen.png")
  bedImg = loadImage("images/bed.png");
  catImg = loadImage("images/cat.jpg");
  pillowImg = loadImage("images/pillow.png");
  bookshelfImg = loadImage("images/bookshelf.png");
  mirrorImg = loadImage("images/mirror.jpg");
  eyeImg = loadImage("images/eye.png");
  sofiaImg = loadImage("images/girl.png");
  puzzleCat1Img = loadImage("images/cat6.png");
  puzzleCat2Img = loadImage("images/cat7.png");
  puzzleCat3Img = loadImage("images/cat8.png");
  puzzleCat4Img = loadImage("images/cat9.png");
  puzzleDog1Img = loadImage("images/dog1.png");
  puzzleDog2Img = loadImage("images/dog2.png");
  puzzleDog3Img = loadImage("images/dog3.png");
  puzzleDog4Img = loadImage("images/dog4.png");
  puzzleBird1Img = loadImage("images/bird1.png");
  puzzleBird2Img = loadImage("images/bird2.png");
  puzzleBird3Img = loadImage("images/bird3.png");
  puzzleBird4Img = loadImage("images/bird4.png");
}

function setup() {
  createCanvas(1250,600);
 
  engine = Engine.create();
  world = engine.world;

  sofia = createSprite(650,285);
  sofia.addImage("sofiaImage",sofiaImg);
  sofia.scale = 0.25;

  sofia2 = createSprite(650,500);
  sofia2.addImage("sofiaImage2",sofiaImg);
  sofia2.scale = 0.155;
  sofia2.visible = false;

  sofia3 = createSprite(845,525);
  sofia3.addImage("sofiaImage3",sofiaImg);
  sofia3.scale = 0.035;
  sofia3.visible = false;

  this.greeting = createElement('h1');
  this.instruction = createElement('h2');
  this.play = createElement('h1');

  door = createSprite(625,110,5,10);
  door.addImage("door1",doorImg);
  door.scale = 0.115 ;
  door.visible = false;

  door2 = createSprite(625,110,5,10);
  door2.addImage("door2",doorImg2);
  door2.scale = 0.115 ;
  door2.visible = false;

  bed  = createSprite(250,500,30,30);
  bed.addImage("bed1",bedImg);
  bed.scale = 0.7;
  bed.visible = false;

  cat = createSprite(974,150,30,30);
  cat.addImage("cat1",catImg);
  cat.scale = 0.15;
  cat.visible = false;

  pillow = createSprite(125,300,30,30);
  pillow.addImage("pillow1",pillowImg);
  pillow.scale = 0.30;
  pillow.visible = false;

  bookshelf  = createSprite(1125,350,30,30);
  bookshelf.addImage("bookshelf1",bookshelfImg);
  bookshelf.scale = 0.4;
  bookshelf.visible = false;

  mirror = createSprite(225,100,30,30);
  mirror.addImage("mirror1",mirrorImg);
  mirror.scale = 0.25;
  mirror.visible = false;

  eye = createSprite(1025,530,30,30);
  eye.addImage("eye1",eyeImg);
  eye.scale = 0.30;
  eye.visible = false;

  puzzleCat1 = createSprite(690,425,10,10);
  puzzleCat1.addImage("peiceC1",puzzleCat1Img);
  puzzleCat1.scale = 0.025;
  puzzleCat1.visible = false;

  puzzleCat2 = createSprite(720,220,10,10);
  puzzleCat2.addImage("peiceC2",puzzleCat2Img);
  puzzleCat2.scale = 0.025;
  puzzleCat2.visible = false;

  puzzleCat3 = createSprite(600,220,10,10);
  puzzleCat3.addImage("peiceC3",puzzleCat3Img);
  puzzleCat3.scale = 0.025;
  puzzleCat3.visible = false;

  puzzleCat4 = createSprite(450,170,10,10);
  puzzleCat4.addImage("peiceC4",puzzleCat2Img);
  puzzleCat4.scale = 0.025;
  puzzleCat4.visible = false;

  puzzleDog1 = createSprite(690,525,10,10);
  puzzleDog1.addImage("peiceD1",puzzleDog1Img);
  puzzleDog1.scale = 0.025;
  puzzleDog1.visible = false;

  puzzleDog2 = createSprite(440,475,10,10);
  puzzleDog2.addImage("peiceD2",puzzleDog2Img);
  puzzleDog2.scale = 0.025;
  puzzleDog2.visible = false;

  puzzleDog3 = createSprite(420,300,10,10);
  puzzleDog3.addImage("peiceD3",puzzleDog3Img);
  puzzleDog3.scale = 0.025;
  puzzleDog3.visible = false;

  puzzleDog4 = createSprite(840,280,10,10);
  puzzleDog4.addImage("peiceD4",puzzleDog4Img);
  puzzleDog4.scale = 0.025;
  puzzleDog4.visible = false;

  puzzleBird1 = createSprite(500,428,10,10);
  puzzleBird1.addImage("peiceB1",puzzleBird1Img);
  puzzleBird1.scale = 0.025;
  puzzleBird1.visible = false;

  puzzleBird2 = createSprite(600,297,10,10);
  puzzleBird2.addImage("peiceB2",puzzleBird2Img);
  puzzleBird2.scale = 0.025;
  puzzleBird2.visible = false;

  puzzleBird3 = createSprite(650,150,10,10);
  puzzleBird3.addImage("peiceB3",puzzleBird3Img);
  puzzleBird3.scale = 0.025;
  puzzleBird3.visible = false;

  puzzleBird4 = createSprite(800,70,10,10);
  puzzleBird4.addImage("peiceB4",puzzleBird4Img);
  puzzleBird4.scale = 0.025;
  puzzleBird4.visible = false;

  block1 = createSprite(380,300,10,500);
  block1.visible = false;

  block2 = createSprite(870,300,10,500);
  block2.visible = false;

  block3 = createSprite(650,50,450,10);
  block3.visible = false;

  block4 = createSprite(600,550,450,10);
  block4.visible = false;
  
  block5 = createSprite(720,520,10,50);
  block5.visible = false;

  block6 = createSprite(620,520,10,50);
  block6.visible = false;

  block7 = createSprite(700,500,50,10);
  block7.visible = false;
  
  block8 = createSprite(525,500,200,10);
  block8.visible = false;

  block9 = createSprite(800,500,50,10);
  block9.visible = false;

  block10 = createSprite(770,480,10,50);
  block10.visible = false;

  block11 = createSprite(670,480,10,50);
  block11.visible = false;

  block12 = createSprite(420,455,10,100);
  block12.visible = false;

  block13 = createSprite(625,450,300,10);
  block13.visible = false;

  block14 = createSprite(480,430,10,50);
  block14.visible = false;

  block15 = createSprite(620,430,10,50);
  block15.visible = false;

  block16 = createSprite(820,430,10,50);
  block16.visible = false;

  block17 = createSprite(775,410,100,10);
  block17.visible = false;

  block18 = createSprite(525,410,100,10);
  block18.visible = false;

  block19 = createSprite(570,390,10,50);
  block19.visible = false;

  block20 = createSprite(725,390,10,50);
  block20.visible = false;

  block21 = createSprite(793,365,146,10);
  block21.visible = false;

  block22 = createSprite(435,365,100,10);
  block22.visible = false;

  block23 = createSprite(585,315,300,10);
  block23.visible = false;

  block24 = createSprite(520,335,10,50);
  block24.visible = false;

  block25 = createSprite(620,310,10,100);
  block25.visible = false;

  block26 = createSprite(670,360,10,100);
  block26.visible = false;

  block27 = createSprite(770,295,10,150);
  block27.visible = false;

  block28 = createSprite(820,285,10,50);
  block28.visible = false;

  block29 = createSprite(840,265,50,10);
  block29.visible = false;

  block30 = createSprite(575,265,100,10);
  block30.visible = false;

  block31 = createSprite(433,265,96,10);
  block31.visible = false;

  block32 = createSprite(480,260,10,100);
  block32.visible = false;

  block33 = createSprite(500,210,50,10);
  block33.visible = false;

  block34 = createSprite(560,210,10,100);
  block34.visible = false;

  block35 = createSprite(515,155,100,10);
  block35.visible = false;

  block36 = createSprite(430,150,10,100);
  block36.visible = false;

  block37 = createSprite(600,105,350,10);
  block37.visible = false;

  block38 = createSprite(630,150,10,100);
  block38.visible = false;

  block39 = createSprite(700,200,150,10);
  block39.visible = false;

  block40 = createSprite(730,295,10,50);
  block40.visible = false;

  block41 = createSprite(675,220,10,50);
  block41.visible = false;

  block42 = createSprite(755,155,150,10);
  block42.visible = false;

  block43 = createSprite(825,105,10,100);
  block43.visible = false;

  block44 = createSprite(770,213,10,15);
  block44.visible = false;
}


function draw() {
  background(255,255,255);  

  if(gameState === "INSROOM1"){

  this.greeting.html("WELCOME TO THE ESCAPE HOUSE.");
  this.greeting.position(400,50);

  this.instruction.html("In order to pass the first level solve all the ridddle in 1 and 1/2 minutes. After you solve one riddle the next will automatically appear.There are 4 ridddles in total.Stand near the 4th questions answer and  press the alphabet 'a' to enter the next level.")
  this.instruction.position(100,400);

  this.play.html("PRESS SPACE TO START.");
  this.play.position(450,500);
  }
  if(keyDown("space")&& gameState === "INSROOM1" ){
    gameState = LEVEL1;
    background(255,255,255);
    this.greeting.hide();
    this.instruction.hide();
    this.play.hide();

  }

  if(gameState === LEVEL1){
    door.visible = true;
    bed.visible = true;
    cat.visible = true;
    pillow.visible = true;
    bookshelf.visible = true;
    mirror.visible = true;
    eye.visible = true;
    sofia2.visible = true;
    sofia.visible = false;

    textSize(20)
    fill("indigo");
    text("Time Left: "+ time +" seconds",1025,50);

    textSize(15);
    text("1)Once your day is complete look for the clue where you rest your body",450,250);

    if(sofia2.isTouching(bed)){
      textSize(15);
      text("2)The next place where you need to look is a place where you find a book",450,300);
    }

    if(sofia2.isTouching(bookshelf)){
      textSize(15);
      text("3)If clue is what you seek then look at a place where you can look at yourself",450,300);
    }

    if(sofia2.isTouching(mirror)){
      textSize(15);
      next = 1;
      text("4)I am a type of a family pet,that is somtimes known as feline,if I get into a accident ,it’s okay cause I got 9 life.",300,300);
    }

    if(sofia2.isTouching(cat)&& next === 1){
      next = 2;
      door.visible = false;
      door2.visible = true;
     }
   
    if(keyDown("up")){
      sofia2.y = sofia2.y-10;
    }

    if(keyDown("down")){
      sofia2.y = sofia2.y+10;
    }

    if(keyDown("right")){
      sofia2.x = sofia2.x+10;
    }

    if(keyDown("left")){
      sofia2.x = sofia2.x-10;
    }

   if(frameCount %30 === 0){
     time = time - 1;
   }

   if(sofia2.isTouching(pillow)){
     time = time - 1;
   }

   if(sofia2.isTouching(eye)){
    time = time - 1;
  }

   if(time === 0 ){
    gameState =END;
    background(0,0,0)
    textSize(50)
    fill("white");
    text("You are out. In order to continue refresh the page.",75,300);
    door.visible = false;
    door2.visible = false;
    bed.visible = false; 
    cat.visible = false;
    pillow.visible = false;
    bookshelf.visible = false;
    mirror.visible = false;
    eye.visible = false;
    sofia2.visible = false;
    this.over.html("You are out.In order to continue refrest the page and play again.");
    this.over.position(300,300);
  }
  
 }

 if(keyDown(65)&& gameState === LEVEL1 && sofia2.isTouching(cat)&& next === 2){
   console.log(gameState);
  gameState = "INSROOM2";
   door.visible = false;
   door2.visible = false;
   bed.visible = false; 
   cat.visible = false;
   pillow.visible = false;
   bookshelf.visible = false;
   mirror.visible = false;
   eye.visible = false;
   sofia2.visible = false;
   sofia.visible = false;
 }

 if(gameState === "INSROOM2"){
   textSize(25);
   fill("blue");
   text("In order to pass this level ,use the animal you found in level 1 as your guide.",200,200);
   text("Collect its peices along the maze.",450,250);
   text("If you touch the wrong peice you will lose points.You need a minimum of 200 points to pass the level.",125,300);
   text("You have 3 minutes to cross the maze",435,350);
   text("Press 'b' to go to the level",475,400);  
 }

 if(keyDown(66)&& gameState === "INSROOM2"){
   gameState = LEVEL2;
 }

 if(gameState === LEVEL2){
   block1.visible = true;
   block2.visible = true;
   block3.visible = true;
   block4.visible = true;

   block5.visible = true;
   block6.visible = true;
   block7.visible = true;
   block8.visible = true;
   block9.visible = true;
   block10.visible = true;
   block11.visible = true;
   block12.visible = true;
   block13.visible = true;
   block14.visible = true;
   block15.visible = true;
   block16.visible = true;
   block17.visible = true;
   block18.visible = true;
   block19.visible = true;
   block20.visible = true;
   block21.visible = true;
   block22.visible = true;
   block23.visible = true;
   block24.visible = true;
   block25.visible = true;
   block26.visible = true;
   block27.visible = true;
   block28.visible = true;
   block29.visible = true;
   block30.visible = true;
   block31.visible = true;
   block32.visible = true;
   block33.visible = true;
   block34.visible = true;
   block35.visible = true;
   block36.visible = true;
   block37.visible = true;
   block38.visible = true;
   block39.visible = true;
   block40.visible = true;
   block41.visible = true;
   block42.visible = true;
   block43.visible = true;
   block44.visible = true;

   sofia3.bounceOff(block1);
   sofia3.bounceOff(block2);
   sofia3.bounceOff(block3);
   sofia3.bounceOff(block4);
   sofia3.bounceOff(block5);
   sofia3.bounceOff(block6);
   sofia3.bounceOff(block7);
   sofia3.bounceOff(block8);
   sofia3.bounceOff(block9);
   sofia3.bounceOff(block10);
   sofia3.bounceOff(block11);
   sofia3.bounceOff(block12);
   sofia3.bounceOff(block13);
   sofia3.bounceOff(block14);
   sofia3.bounceOff(block15);
   sofia3.bounceOff(block16);
   sofia3.bounceOff(block17);
   sofia3.bounceOff(block18);
   sofia3.bounceOff(block19);
   sofia3.bounceOff(block20);
   sofia3.bounceOff(block21);
   sofia3.bounceOff(block22);
   sofia3.bounceOff(block23);
   sofia3.bounceOff(block24);
   sofia3.bounceOff(block25);
   sofia3.bounceOff(block26);
   sofia3.bounceOff(block27);
   sofia3.bounceOff(block28);
   sofia3.bounceOff(block29);
   sofia3.bounceOff(block30);
   sofia3.bounceOff(block31);
   sofia3.bounceOff(block32);
   sofia3.bounceOff(block33);
   sofia3.bounceOff(block34);
   sofia3.bounceOff(block35);
   sofia3.bounceOff(block36);
   sofia3.bounceOff(block37);
   sofia3.bounceOff(block38);
   sofia3.bounceOff(block39);
   sofia3.bounceOff(block40);
   sofia3.bounceOff(block41);
   sofia3.bounceOff(block42);
   sofia3.bounceOff(block43);
   sofia3.bounceOff(block44);
  
   sofia3.visible = true;

   if(keyDown("up")){
    sofia3.y = sofia3.y-5;
  }

  if(keyDown("down")){
    sofia3.y = sofia3.y+5;
  }

  if(keyDown("right")){
    sofia3.x = sofia3.x+5;
  }

  if(keyDown("left")){
    sofia3.x = sofia3.x-5;
  }

  puzzleCat1.visible = true;
  puzzleCat2.visible = true;
  puzzleCat3.visible = true;
  puzzleCat4.visible = true;

  puzzleDog1.visible = true;
  puzzleDog2.visible = true;
  puzzleDog3.visible = true;
  puzzleDog4.visible = true;

  puzzleBird1.visible = true;
  puzzleBird2.visible = true;
  puzzleBird3.visible = true;
  puzzleBird4.visible = true;

  if(sofia3.isTouching(puzzleCat1)){
    points = points + 100;
    puzzleCat1.destroy();
  }

  if(sofia3.isTouching(puzzleCat2)){
    points = points + 100;
    puzzleCat2.destroy();
  }

  if(sofia3.isTouching(puzzleCat3)){
    points = points + 100;
    puzzleCat3.destroy();
  }

  if(sofia3.isTouching(puzzleCat4)){
    points = points + 100;
    puzzleCat4.destroy();
  }

  if(sofia3.isTouching(puzzleDog1)){
    points = points - 50;
    puzzleDog1.destroy();
  }

  if(sofia3.isTouching(puzzleDog2)){
    points = points - 50;
    puzzleDog2.destroy();
  }

  if(sofia3.isTouching(puzzleDog3)){
    points = points - 50;
    puzzleDog3.destroy();
  }

  if(sofia3.isTouching(puzzleDog4)){
    points = points - 50;
    puzzleDog4.destroy();
  }

  if(sofia3.isTouching(puzzleBird1)){
    points = points - 50;
    puzzleBird1.destroy();
  }

  if(sofia3.isTouching(puzzleBird2)){
    points = points - 50;
    puzzleBird2.destroy();
  }

  if(sofia3.isTouching(puzzleBird3)){
    points = points - 50;
    puzzleBird3.destroy();
  }

  if(sofia3.isTouching(puzzleBird4)){
    points = points - 50;
    puzzleBird4.destroy();
  }

  textSize(20)
  fill("red");
  text("POINTS: "+ points,1025,50); 

  if(sofia3.y<50 && points>200){
    gameState = END;

    background(0,0,0);

    block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = false;
    block7.visible = false;
    block8.visible = false;
    block9.visible = false;
    block10.visible = false;
    block11.visible = false;
    block12.visible = false;
    block13.visible = false;
    block14.visible = false;
    block15.visible = false;
    block16.visible = false;
    block17.visible = false;
    block18.visible = false;
    block19.visible = false;
    block20.visible = false;
    block21.visible = false;
    block22.visible = false;
    block23.visible = false;
    block24.visible = false;
    block25.visible = false;
    block26.visible = false;
    block27.visible = false;
    block28.visible = false;
    block29.visible = false;
    block30.visible = false;
    block31.visible = false;
    block32.visible = false;
    block33.visible = false;
    block34.visible = false;
    block35.visible = false;
    block36.visible = false;
    block37.visible = false;
    block38.visible = false;
    block39.visible = false;
    block40.visible = false;
    block41.visible = false;
    block42.visible = false;
    block43.visible = false;
    block44.visible = false;

    puzzleCat1.visible = false;
    puzzleCat2.visible = false;
    puzzleCat3.visible = false;
    puzzleCat4.visible = false;

    puzzleDog1.visible = false;
    puzzleDog2.visible = false;
    puzzleDog3.visible = false;
    puzzleDog4.visible = false;

    puzzleBird1.visible = false;
    puzzleBird2.visible = false;
    puzzleBird3.visible = false;
    puzzleBird4.visible = false;

    sofia3.visible = false;

    textSize(50);
    fill("white");
    text("Congratulations, You Won",375,225);

    this.end.html("CONGRATULATIONS")
    this.end.position(475,225);

  }
  
  if(sofia3.y<50 && points<200){

    background(0,0,0);

    block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = false;
    block7.visible = false;
    block8.visible = false;
    block9.visible = false;
    block10.visible = false;
    block11.visible = false;
    block12.visible = false;
    block13.visible = false;
    block14.visible = false;
    block15.visible = false;
    block16.visible = false;
    block17.visible = false;
    block18.visible = false;
    block19.visible = false;
    block20.visible = false;
    block21.visible = false;
    block22.visible = false;
    block23.visible = false;
    block24.visible = false;
    block25.visible = false;
    block26.visible = false;
    block27.visible = false;
    block28.visible = false;
    block29.visible = false;
    block30.visible = false;
    block31.visible = false;
    block32.visible = false;
    block33.visible = false;
    block34.visible = false;
    block35.visible = false;
    block36.visible = false;
    block37.visible = false;
    block38.visible = false;
    block39.visible = false;
    block40.visible = false;
    block41.visible = false;
    block42.visible = false;
    block43.visible = false;
    block44.visible = false;

    puzzleCat1.visible = false;
    puzzleCat2.visible = false;
    puzzleCat3.visible = false;
    puzzleCat4.visible = false;

    puzzleDog1.visible = false;
    puzzleDog2.visible = false;
    puzzleDog3.visible = false;
    puzzleDog4.visible = false;

    puzzleBird1.visible = false;
    puzzleBird2.visible = false;
    puzzleBird3.visible = false;
    puzzleBird4.visible = false;

    sofia3.visible = false;

    textSize(50);
    fill("white");
    text("You Lose, Please try again",325,350);

  }

 }
  drawSprites();

}