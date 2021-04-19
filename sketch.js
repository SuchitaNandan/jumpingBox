    var canvas;
    var music;
    var pinkRect,greenRect,redRect,orangeRect;
    var whiteBoxSprite;
    var edges;
    var randob1 , randob2;
    function preload(){
        music = loadSound("music.mp3");
    }


    function setup(){
    canvas = createCanvas(770,600);

        //create 4 different surfaces
    /*pinkRect=createSprite(90,570,170,50);
    pinkRect.shapeColor="pink";
    greenRect=createSprite(290,570,170,50);
    greenRect.shapeColor="green";
    redRect=createSprite(490,570,170,50);
    redRect.shapeColor="red";
    orangeRect=createSprite(690,570,170,50);
    orangeRect.shapeColor="orange";

        //create box sprite and give velocity
    whiteBoxSprite=createSprite(random(20,600),random(20,200),40,40);
    whiteBoxSprite.shapeColor="white";
    whiteBoxSprite.velocityX=1*(random(-15,15));
    whiteBoxSprite.velocityY=1*(random(-15,15));*/

   randob1=createSprite(100,300,100,50);
    randob1.shapeColor="blue";
    randob1.velocityX=2;
    randob2=createSprite(500,300,100,50)
    randob2.shapeColor="blue";
    randob2.velocityX=-2;

    } 

    function draw() {
        background("black");

        //create edgeSprite
    edges = createEdgeSprites();
   // whiteBoxSprite.bounceOff(edges);
    //bounceOff(pinkRect,whiteBoxSprite);
    
        //add condition to check if box touching surface and make it box
    /*if(isTouching(whiteBoxSprite,pinkRect)){
        whiteBoxSprite.shapeColor="pink";
        
    }
    if(isTouching(whiteBoxSprite,redRect)){
        whiteBoxSprite.shapeColor="red";
    }
    if(isTouching(whiteBoxSprite,orangeRect)){
        whiteBoxSprite.shapeColor="orange";
    }
    if(isTouching(whiteBoxSprite,greenRect)){
        whiteBoxSprite.shapeColor="green";
    }

    whiteBoxSprite.bounceOff(pinkRect);
    whiteBoxSprite.bounceOff(greenRect);
    whiteBoxSprite.bounceOff(redRect);
    whiteBoxSprite.bounceOff(orangeRect);*/

    //bounceOff(randob1,randob2);
  



    drawSprites();
    }
