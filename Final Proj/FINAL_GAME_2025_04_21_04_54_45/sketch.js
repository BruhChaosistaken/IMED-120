let Clicked = false
let Clicks = 0

let CHeight = 360
let CWidth = 500

let CButton = '#b46243'
let RButton = '#873e23'

let mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('/sound/Click.wav');
}

function setup() {
  createCanvas(CWidth, CHeight);
  
  frameRate(30);
  
  fill(RButton)
  let ClickButton = createButton('Click!');
  
  ClickButton.position(125, 125);
  ClickButton.size(150,150);
  ClickButton.style('color:black')
  ClickButton.style('background-color:transparent')
  ClickButton.style('border: none')
  
  ClickButton.mousePressed(Clicked_Button);
  ClickButton.mouseReleased(Released_Button);
 
  let Powerup1B = createButton('X2 Clicks!');
  let Powerup2B = createButton('X4 Clicks!');
  let Powerup3B = createButton('Auto Clicker!');
  
  Powerup1B.position(350,10);
  Powerup1B.style('border: none');
  Powerup1B.mousePressed(Powerup1);
  
  Powerup2B.position(350,70);
  Powerup2B.style('border: none');
  Powerup2B.mousePressed(Powerup2);
  
  Powerup3B.position(350,130);
  Powerup3B.style('border: none');
  Powerup3B.mousePressed(Powerup3);

  
}

let Boost1 = false
let Boost2 = false
let Boost3 = false

function Powerup1() {
 if (Clicks >= 200) {
   Boost1 = true
 }
}

function Powerup2() {
  if (Clicks >= 200) {
   Boost2 = true
 }
}

function Powerup3() {
  if (Clicks >= 600) {
   Boost3 = true
 }
}

function draw() {
  background('white');
  
  text('Get 5,000 Clicks!', 250, 350)
  
  textAlign(CENTER)
  text('Requires 200 Clicks',400,50);
  text('Requires 400 Clicks',400,110);
  text('Requires 600 Clicks',400,170);
  
  textStyle(BOLD);
  text('Clicks ' + Clicks, 50,150);
  text(frameCount, 195, 50)
  
  circle(200, 200, 200);
  
  strokeWeight(2);
  
    if (Clicked === true){
    
     fill(CButton);
  } else {
     fill(RButton);
  }
  
  if (frameCount >= 200) {
    frameCount = 0
    Clicks = 0
  }
  
  if (Boost1 === true and frameCount % 10 === 0) {
    
  }
  if (frameCount % 10 === 0) {
  Clicks += 1
  }
  
}

function Clicked_Button() {
  if (Boost1 === true) {
    Clicks += 1
  }
  if (Boost2 === true) {
  Clicks += 2
  }
  Clicks ++
  Clicked = true
  frameCount = 0
  
  mySound.play();
 
}

function Released_Button() {
  
  Clicked = false
}