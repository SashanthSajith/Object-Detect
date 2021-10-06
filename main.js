img = "";
status = "";
objects = [];
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload(){
    img = loadImage('laptop and tab image.jpg');
}
function draw(){
   /* image(img, 0, 0, 640, 420);
    fill("#00FF00");
    text("Laptop", 220, 40);
    noFill();
    stroke("#00FF00");
    rect(220, 50, 350, 300);
    fill("#00FF00")
    text("Tablet", 70, 95);
    noFill();
    stroke("#00FF00");
    rect(70, 100, 220, 220);
    */
    if(status !="")
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}