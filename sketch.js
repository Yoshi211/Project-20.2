var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500))

  car = createSprite(100,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  car.velocityX = speed;
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  

  if(wall.x - car.x < 50){
    var deform = 0.5 * weight * speed * speed / 22500;

    car.velocityX = 0;

    if(deform < 100){
     car.shapeColor = color(0,255,0);
     textSize(50);
     fill("green");
     text("The Deformation of this Car is Good",200,200);
   }

    if(deform > 100 && deform < 180){
     car.shapeColor = color(230,230,0);
     textSize(50);
     fill("yellow");
     text("The Deformation of this Car is Average",200,200);
   }
 
    if(deform > 180){
      car.shapeColor = color(255,0,0);
      textSize(50);
      fill("red");
      text("The Deformation of this Car is Lethal",200,200);
   }
  }

  console.log(wall.x - car.x);

  drawSprites();
}