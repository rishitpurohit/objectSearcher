var input_results=""
var model=""

function preload(){

}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    webcam=createCapture(VIDEO);
webcam.hide()
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById('status').innerHTML="Status:Detecting objects"
input_result=document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model is loaded");
    model="true"
}
function draw(){
    image(webcam,0,0,350,350);
}