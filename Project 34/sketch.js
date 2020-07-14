//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var feedback;
function preload()
{
  //load images here
  this.dog.loadImage(images/dogImg.png);
  this.dog.loadImage(images/dogImg1.png);
}

function setup() {
  createCanvas(500, 500);
  dog.drawSprites();
  dog.loadImage(images/dogImg);
  dog.loadImage(images/dogImg1);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}