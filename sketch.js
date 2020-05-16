var obj1, obj2;

function setup() {
  createCanvas(1200,800);
  obj2 = createSprite(400, 100, 50, 80);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj1 = createSprite(400, 800,80,30);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj1.velocityY = -5;
  obj2.velocityY = +5;
}

function draw() {
  background(0,0,0);
  
  bounceOff(obj1, obj2)

  drawSprites();
}

 