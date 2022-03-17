img = "";
status = "";

function preload()
{
    img = loadimage("dog_cat.jpg");
}

function setup()
{
    canvas = CreateCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossed', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#52697d");
    Text("Dog", 45, 75);
    noFill();
    stroke("#52697d");
    rect(30, 60, 450, 350 ); 
    
    fill("#52697d");
    Text("Cat", 320, 120);
    noFill();
    stroke("#52697d");
    rect(300, 90, 270, 320);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}