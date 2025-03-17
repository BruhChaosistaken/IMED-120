var cheight = 100
var cwidth = 400

function setup() {
  createCanvas(cwidth, cheight);

}
  
function draw() {
  background(220);

  var diameter = 30
  
  fill("white")
  for (var i = 0; i < 10; i++) {

  rect(diameter / 100 + i * diameter, diameter - 50, diameter, cheight);
  }
  
  var blackwidth = 20
  
  fill("black")
  rect(40, 0, blackwidth, cheight / 1.5);
  rect(40 * 2, 0, blackwidth, cheight / 1.5);
  rect(40 * 3, 0, blackwidth, cheight / 1.5);
  rect(40 * 4, 0, blackwidth, cheight / 1.5);
  rect(40 * 5, 0, blackwidth, cheight / 1.5);

}