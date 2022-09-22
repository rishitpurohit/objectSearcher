var input_results=""
var model=""
 var object=[]
 var statu='';

function preload(){

}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    webcam=createCapture(VIDEO);
webcam.hide()
}

function detect(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById('status').innerHTML="Status:Detecting objects"
input_result=document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model is loaded");
    statu="true"
}
function draw(){
    image(webcam,0,0,350,350);
    if(statu!=""){
        objectDetector.detect(webcam, gotResults);
for(var i=0; i<object.length; i++){
document.getElementById("detection").innerHTML="The status is detected , Congratulations!!";
document.getElementById("number_of_objects").innerHTML="Number of objects are "+objects.length
rect(object.x , object.y , object.width , object.height);

    }
}
//Define gotResult() function, and inside it write code for fetching results from the model.
//Define an empty array, this array will be used to store the results array obtained from gotResult() function.
//Assign the results array to the array which you have defined in step two.
//Inside p5.js draw() function, and inside it write the following code:
//Add a “if condition” to check that the status of the model is not empty.
//And inside this “if condition” write a for-loop for reading the objects array.
//Inside this for-loop write code for:
//Fetch confidence from the objects array and convert it into percentage.
//Fetch label.
//Fetch x and y coordinates from the objects array and using these coordinates place the label and confidence near the object.
//Fetch width, height, x and y coordinates from the objects array and using these values draw a rectangle near the object.

function gotResults(error,results){
if(error){
    console.log(error)
}
if(results){
    console.log(results)
    object=results;
    }
}}