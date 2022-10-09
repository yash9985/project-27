song1 = "";
song2 ="";

function setup(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("Original Pokemon Theme Singer Jason Paige In Studio Full Pokemon Theme Song.mp3");
}

function play(){
    song.play();
    
}
