img = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
    img = loadImage('laptop and tab image.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);
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
}