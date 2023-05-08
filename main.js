right_wrist_x =0;
left_wrist_x =0;
difference =0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(400,400);

    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model is initialized");
}
function gotPoses(results){
    if(results.length > 0){
     console.log(results);
     right_wrist_x =results[0].pose.rightWrist.x;
     left_wrist_x = results[0].pose.leftWrist.x;
     difference =floor(left_wrist_x - right_wrist_x);
     console.log("right_wrist_x = "+right_wrist_x+" left_wrist_x = "+left_wrist_x+" difference = "+difference);
    }
}
function draw(){
    background("rgb(225, 158, 0)");
    textSize(difference);
    fill("black");
    text("ABHIJNA", 50,400);
    document.getElementById("value").innerHTML = "The size of the text is = "+difference+"px";
}