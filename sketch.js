let w = 794;
let h = 1092;

let weight = 0.8;

function setup(){

  createCanvas(w*weight, h*weight);
  background(255, 157, 1);

  let from = color(255, 157, 1);
  let to = color(125, 74, 137);

  horizon(from, to);
  sun();
  foreground();

}

function horizon(from, to){
  noStroke();

  for (i=0; i<800; i+=100){
    let colorChange = map(i, 0, 700, 0, 1);
    let layerColor = lerpColor(from, to, colorChange);
    fill(layerColor);

    beginShape();
    vertex(width, i+i+300);
    vertex(width, i);
    let stepChange = map(i, 0, 700, 200, 30);
    for (j=0; j<width; j+= stepChange){
      vertex(width-j, (noise(j)*(height/9)+i));

    }

    vertex(0,i);
    vertex(0,i+i+300);
    endShape();
  }


}

function sun(){
  noStroke();
  fill(255, 157, 1);
  ellipse(width/2.5, height*0.6, width/4);
  fill(255, 114, 14);
  ellipse(width*0.7, height*0.8, width/4);

}

function foreground() {
  // stroke('red');
  // strokeWeight(5);
  noStroke();
  fill(37, 38, 74);

  // ground
  rect(0, height, width, -height/30);
  // base of building
  rect(width/15, height, width/4.5, -height/15);
  // middle support
  rect(width/11, height, width/5.75, -height/13);
  // roof of building
  ellipse(width/5.60, height-height/13, width/5.75, -height/10);


}
