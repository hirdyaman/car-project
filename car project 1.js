var car,wall;
var speed,weight;
speed=random(55,90)
weight=random(400,1500)




function setup() {
  createCanvas(800,400);
 car=createSprite(50, 200, 50, 50);
 wall=createSprite(1500,200,60,height/2)

}

function draw() {
  background(255,255,255);  
  drawSprites();
carvelocityX=speed;


deformation=0.5 X weight X speed X speed/22500;


if(wall.X=car.x < (car.width+wall.width)/2);
{
 carvelocityX=0
 var deformation=0.5*weight*speed* speed/22509
 if(deformation>180)
 {
  car.shapeColour=colour(230,230,0);
} 
if (deformation<180 && deformation>1000)
{
 car.shapeColour=colour(230,230,0);
}
if (deformation<100)
{
 car.shapeColour=colour(0,225,0);
}




}


}