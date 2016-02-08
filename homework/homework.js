/*
  100 things
*/

function setup(){
  createCanvas(windowWidth,windowHeight);

  var circlesize = random(0,windowWidth);
  var circlesizeB = random(0,windowHeight)
  background("midnightblue")

  stroke("#EEE8AA")
  fill("#EEE8AA")
  ellipse(windowWidth/2,windowHeight/2,100,100)

  stroke(0,0,random(255));
  fill(0,0,random(255));
  ellipse(circlesize,circlesize,circlesize,circlesize);

  stroke("#008080");
  fill("#008080");
  ellipse(circlesizeB,circlesizeB,circlesizeB,circlesizeB);

  var starsize = random(2,10)

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 50, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 100, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 150, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 200, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
    ellipse(random(0,500)*i, 250, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 300, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 350, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 450, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 500, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 550, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 600, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 650, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 700, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 750, starsize, starsize);
  }

  fill("white")
  stroke("white")
  for(var i = 0; i < 1000; i = i+1){
  ellipse(random(0,500)*i, 800, starsize, starsize);
  }
}
