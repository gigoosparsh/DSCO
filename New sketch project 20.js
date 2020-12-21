var car, wall ;
var speed, weight ;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50)
  car=createSprite(50,200,50,50);
  car.shapeColor="green";
  car.debug=true;
  wall=createSprite(1500,200,50/2);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
  

}

function draw() {
  background(255,255,255);
  car.x=World.mouseX;
  car.y=World.mouseY;  
  console.log(car.x-wall.x);
  if(  car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < fixedrect.width/2 + car.width/2
    && car.y - wall.y < fixedrect.width/2 + car.width/2
    && wall.y - car.y < fixedrect.width/2 + car.width/2)
    {
    car.shapeColor="red";  
    wall.shapeColor="red"; 
  }
  else{
    car.shapeColor="green";
     wall.shapeColor="green";
  }

if (wall.x-car.x<(car.width+wall.width)/2);
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed speed/2209;
    if(deformation>180);
    car.shapeColour=colour(255,0,0);
    if(deformation<180 &&  deformation>100);
    {
           if car.shapeColour=colour(230,230,0);

    }

    if( deformation < 100) ;{

      car.shapeColour=colour(0,255,0);

    }



  drawSprites();
}