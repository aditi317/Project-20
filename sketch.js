var mouse,cat,catImg1,catImg2,mouseImg1;
var garden,gardenImage;

function preload() {
    //load the images here
    catsitImg=loadAnimation("cat1.png");
    catrunImg=loadAnimation("cat3.png","cat2.png","cat2.png");
    cathappyImg=loadAnimation("cat4.png")
    mousestandImg=loadAnimation("mouse2.png");
    mouseteaseImg=loadAnimation("mouse3.png");
    mousehappyImg=loadAnimation("mouse1.png");
    gardenImage=loadImage("garden.png");
}

function setup(){
    createCanvas(800,650);
    //create tom and jerry sprites here
    garden=createSprite(400,300);
    garden.addImage(gardenImage);

    mouse=createSprite(100,550,20,20);
    mouse.addAnimation("stand",mousestandImg);
    mouse.scale=0.09;

    cat=createSprite(700,530,40,40);
    cat.addAnimation("sit",catsitImg); 
    cat.scale=0.15;
    
   
}

function draw() {

    background("garden");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width - mouse.width)/2){
        mouse.addAnimation("stand",mousehappyImg);
        cat.addAnimation("sit",cathappyImg);
        cat.velocityX=0;
        cat.x=200;
    }
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
      mouse.addAnimation("stand",mouseteaseImg);
      cat.addAnimation("sit",catrunImg);
      cat.velocityX=-2;
  }


}
