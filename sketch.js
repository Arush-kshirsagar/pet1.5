//Create variables here
var dog,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg1.png");
  dogimg=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(200,200,50,50);
  dog.addImage("dogimg",happyDog);

  foodStock=database.ref();
  foodStock.on("value",readStock);
  
}


function draw() {  
backgroundColor(46,139,87);
  
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
dog.display();
drawSprites();
textSize(20);
fill("blue");
text("Press Spce To Feed the dog milk",100,100);
}



