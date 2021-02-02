var bg, cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;


function preload() {
    bg = loadImage("garden.png");
    catImg1= loadAnimation("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3= loadAnimation("cat4.png");
    mouseImg1=loadAnimation("mouse1.png");
    mouseImg2= loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadAnimation("mouse4.png")

}



function setup(){
    createCanvas(1000,800);

   cat = createSprite(870, 600);
   cat.addAnimation(catImg1);
   cat.scale = 0.2;

   mouse = createSprite(200, 600);
   mouse.addAnimation(mouseImg1);
   mouse.scale = 0.15;

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){ 
        cat.velocityX=0;
        cat.addAnimation(catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("cat4.png");
        mouse.addAnimation(mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouse4.png");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation( catImg2);
        cat.changeAnimation("cat2.png");
        
        mouse.addAnimation(mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouse1.png");
    }
}