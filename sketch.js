var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var day, monthNAME, year;

function setup(){
  createCanvas(400,400);

  year  = year();
  month = month();
  day   = day();

  angleMode(DEGREES);
}

function draw(){
  background("white");

  monthNAME = monthName(month);

  push();
  noStroke();fill("black");
  ellipseMode(RADIUS);
  ellipse(200,200,155,155);
  pop();

  push();
  fill("#cfaa01");textSize(60);
  text(day+" "+monthNAME,137,140);
  text(year,137,300);
  pop();

  translate(200,200)
  rotate(-90)
  
  hr    = hour();
  mn    = minute();
  sc    = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  stroke(255,0,255);
  point(0,0)

  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

}

function monthName(monthNumber){

  if(monthNumber===1){
    return "jan";
  }
  else if(monthNumber===2){
    return "feb";
  }
  else if(monthNumber===3){
    return "mar";
  }
  else if(monthNumber===4){
    return "apr";
  }
  else if(monthNumber===5){
    return "may";
  }
  else if(monthNumber===6){
    return "jun";
  }
  else if(monthNumber===7){
    return "jul";
  }
  else if(monthNumber===8){
    return "aug";
  }
  else if(monthNumber===9){
    return "sep";
  }
  else if(monthNumber===10){
    return "oct";
  }
  else if(monthNumber===11){
    return "nov";
  }
  else if(monthNumber===12){
    return "dec";
  }
  else{
    return monthNumber;
  }

}