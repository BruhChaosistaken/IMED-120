///The price
let Price; 

///Button variables for the tips
let Tip1;
let Tip2;
let Tip3;

///Check if the Customer is tipping or not
let Tipping;


function setup() {
  createCanvas(200, 200);

  Price = createInput('0.00');

///5% tip
  Tip1 = createButton('No Tip', 'red');
  
  Tip1.mousePressed(Tip0Percent) 
  
///5% tip
  Tip1 = createButton('5% Tip', 'red');
  
  Tip1.mousePressed(Tip5Percent)
///10% tip
  Tip2 = createButton('10% Tip', 'red');
  
  Tip2.mousePressed(Tip10Percent)
///20% tip
  Tip3 = createButton('20% Tip', 'red');
  
  Tip3.mousePressed(Tip20Percent)
  
}

///Changing Tip percent for each function, for optimization, as well as notifying in code that they are tipping
let PercentTipNum;

function Tip0Percent() {
  Tipping = false;
  
  PercentTipNum = 0;
}

function Tip5Percent() {
  Tipping = true;
  
  PercentTipNum = 0.05;
}

function Tip10Percent() {
  Tipping = true;
  
  PercentTipNum = 0.10;
}

function Tip20Percent() {
  Tipping = true; 
  
  PercentTipNum = 0.20;
}

///Thank you message
let Message;

function draw() {
  background('green');
  
  fill("white")
  textAlign(CENTER)
  
  textSize(16)
  
  text('Total',100,50)  

  text(Message, 100, 150)
  
  textSize(32);
  
///check if the customer is tipping if they click anything besides no tip
if (Tipping === true) {
  
  let msg = Price.value();
  text('$' + (Number(msg) + Number(msg) * PercentTipNum), 100, 100);
  
  Message = 'Thank you!'
  
} else {
  
  let msg = Price.value();
  text('$' + msg, 100, 100);

  Message = ''
  
}
  
}