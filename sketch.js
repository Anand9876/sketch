function preload(){
    backgroundimage=loadImage("images/solarsystem.jpg")
    question1image=loadImage("images/question1.jpg")
    option1image=loadImage("images/option1.jpg")
    option2image=loadImage("images/option2.jpg")
    question2image=loadImage("images/question2.jpg")
    option21image=loadImage("images/option22.jpg")
    option22image=loadImage("images/option222.jpg")
    question3image=loadImage("images/question3.jpg")
    option31image=loadImage("images/option31.jpg")
    option32image=loadImage("images/option32.jpg")
    congratsimage=loadImage("images/congratulations.jpg")
}
function setup(){
question1=createSprite(windowWidth/2,windowHeight/4,10,10)
question1.addImage(question1image)
question1.scale=2
option1=createSprite(windowWidth/2-100,windowHeight/2,10,10)
option1.addImage(option1image)
option1.scale=2
option2=createSprite(windowWidth/2+100,windowHeight/2,10,10)
option2.addImage(option2image)
option2.scale=2
}
function draw(){
createCanvas(windowWidth,windowHeight)
background(backgroundimage);
if(keyDown("8")){
    Question2();
}
if(keyDown("1")){
   congratulations();
}
drawSprites();
    stroke("red")
    strokeWeight(7)
    text("1)",windowWidth/2-200,windowHeight/2)
    stroke("red")
    strokeWeight(7)
    text("2)",windowWidth/2+50,windowHeight/2) 
}
function Question2(){
    question1.visible=false;
    option1.visible=false;
    option2.visible=false;
    question2=createSprite(windowWidth/2,windowHeight/4,10,10)
    question2.addImage(question2image)
    question2.scale=2
    option21=createSprite(windowWidth/2-100,windowHeight/2,10,10)
    option21.addImage(option21image)
    option21.scale=2
    option22=createSprite(windowWidth/2+100,windowHeight/2,10,10)
    option22.addImage(option22image)
    option22.scale=2
}
function congratulations(){
    Congrats=createSprite(windowWidth/2,windowHeight/2)
    Congrats.addImage(congratsimage)
    Congrats.scale=2

}
