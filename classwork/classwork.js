//classwork

var cellSize = 100;

function setup(){
  createCanvas(windowWidth,windowHeight);
  //fill(0, 0, random(255));
  background("cadetblue");

  for(var row = 0; row <5;row++){

    for(var column =0; column <5;column++){

      //rect(cellSize*column, cellSize*row, cellSize, cellSize);
      stroke("cadetblue");
        line(random(cellSize*column, cellSize*column+cellSize),cellSize*row,random(cellSize*column, cellSize*column+cellSize),cellSize*row+cellSize);
      stroke(0,0,random(255));
        line(random(cellSize*column, cellSize*column+cellSize),cellSize*row,random(cellSize*column, cellSize*column+cellSize),cellSize*row+cellSize);
      stroke("DarkCyan")
      fill(0,0,random(255));
        arc(random(cellSize*column), random(cellSize*column+cellSize) , random(50,90), random(50,90), 50, PI+QUARTER_PI, OPEN);
      stroke("SlateGrey")
      fill("SlateGrey");
          arc(random(cellSize*row), random(cellSize*row+cellSize) , random(50,90), random(50,90), 50, PI+QUARTER_PI, OPEN);
      stroke("lightblue");
        line(random(cellSize*column, cellSize*column+cellSize),cellSize*row,random(cellSize*column, cellSize*column+cellSize),cellSize*row+cellSize);
      stroke("DeepSkyBlue");
        line(random(cellSize*row, cellSize*row+cellSize),cellSize*column,random(cellSize*row, cellSize*column+cellSize),cellSize*column+cellSize);
      }
    }

}
