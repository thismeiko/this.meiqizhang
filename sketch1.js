//meiko's imitation in p5.js
//original by Vera Molnar(b.1924)(des)ordres,1974
let slice;
let space;
let d;
let dr;
let opp;
let ran;
function setup() {
  createCanvas(800, 800);
  slice=10;
  space=width/10;
  d=10;
  dr=10;
  opp=0.5;

}

function draw() {
  background(230);
  for(i=0;i<slice;i++){
    for(var q=0;q<slice;q++){
      for(var c=0; c<=dr;c++){
          ran=random(1);
        if(ran>opp){
        let inc=((space/2)/dr)*c;
          x1=i*space+random(d);
    y1=q*space+random(d);
     x2=(i+1)*space+random(d);
    y2=q*space+random(d);
     x3=(i+1)*space+random(d);
    y3=(q+1)*space+random(d);
     x4=i*space+random(d);
    y4=(q+1)*space+random(d);
  quad(x1+inc,y1+inc,x2-inc,y2+inc,x3-inc,y3-inc,x4+inc,y4-inc);
  }
    }
    }
  }
  
 noLoop();
}

function mousePressed(){
  saveCanvas("randomCool", "png");
}
