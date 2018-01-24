var princeSlider;
var craigSlider;
var joeSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    
    //createSlider(min,max,default)
    princeSlider = createSlider(0,255,0);
    princeSlider.position(20,20);
    
    joeSlider = createSlider(0,255,0);
    joeSlider.position(20,50);
    
    craigSlider = createSlider(0,255,0);
    craigSlider.position(20,80);
}

function draw(){
    redValue = princeSlider.value();
    greenValue = joeSlider.value();
    blueValue = craigSlider.value();
    background(redValue, greenValue, blueValue);
}