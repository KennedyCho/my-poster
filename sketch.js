let w = 794;
let h = 1092;

let weight = 0.8;

function setup(){

  createCanvas(w*weight, h*weight);
  background(200);
  foreground();

  // sun();
  let from = color(255, 157, 1);
  let to = color(125, 74, 137);

  horizon(from, to);



}

function horizon(from, to){
  stroke('black');
  // noStroke();
  // noFill();




  for (i=0; i<700; i+=150){
    // noiseDetail(0.4);
    let colorChange = map(i, 0, 700, 0, 1);
    let layerColor = lerpColor(from, to, colorChange);
    fill(layerColor);

    beginShape();
    vertex(width, i+i+300);
    vertex(width, i);

    for (j=0; j<width; j+= 1){
      vertex(width-j, (noise(j)*(height/9)+i));

    }

    vertex(0,i);
    vertex(0,i+i+300);
    endShape();
  }
  // console.log(noise(xPos));


}

function sun(){
  noStroke();
  fill(255, 157, 1);
  ellipse(width/3, height/4, width/5);
  fill(255, 114, 14);
  ellipse(width*0.7, height*0.5, width/5);

}

function draw(){

}



function foreground() {
  // stroke('red');
  // strokeWeight(5);
  noStroke();
  fill(0);

  // ground
  rect(0, height, width, -height/30);
  // base of building
  rect(width/15, height, width/4.5, -height/15);
  // middle support
  rect(width/11, height, width/5.75, -height/13);
  // roof of building
  ellipse(width/5.60, height-height/13, width/5.75, -height/10);


}
