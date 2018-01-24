var princeSlider;
var craigSlider;
var joeSlider;

function setup(){
    createCanvas(600,400);
    background(0,2,1);
    
    //createSlider(min,max,default)
    princeSlider = createSlider(0,255,0);
    princeSlider.position(20,20);
    
}

function draw(){
     redValue = princeSlider.value();
     background(redValue,0,0);
}