    var gardenImg,garden;
    var cat,mouse,mouseImg1,mouseImg2,catImg1,catImg2;

    function preload() {
        //load the images here
        gardenImg = loadImage("images/garden.png");
        catImg1 = loadAnimation("images/cat1.png");
        mouseImg1 = loadAnimation("images/mouse1.png");
        catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
        mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
        
    }

    function setup(){
        createCanvas(1000,800);
        //create tom and jerry sprites here
        cat = createSprite(900,100);
        mouse = createSprite(200,750);
        cat.addAnimation(catImg1);
        mouse.addAnimation(mouseImg1);
        
       
    }

    function draw() {

        background(gardenImg);
        //Write condition here to evalute if tom and jerry collide
        if(cat.x - mouse.x < (cat.width - mouse.width)/2){
            cat.addAnimation("catRunning",catImg2);
            cat.changeAnimation("catRunning");
        }
        drawSprites();
    }


    function keyPressed(){

    //For moving and changing animation write code here
       if(keyCode === LEFT_ARROW){
           mouse.addAnimation("mouseTeasing", mouseImg2);
           mouse.changeAnimation("mouseTeasing");
           mouse.frameDelay = 25;
       }

    }
