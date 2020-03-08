let w = 794;
let h = 1092;

let weight = 0.8;

function setup(){

  createCanvas(w*weight, h*weight);
  background(200);
  foreground();

  sun();

  // horizon();
}

function sun(){
  noStroke();
  fill("red");
  ellipse(width/3, height/4, width/5);

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
