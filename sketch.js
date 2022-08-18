//Maria Ma
//Final 
//Polaroid Time!

//font
let handwrittenFont;

//background
var plain;
var frameIcon;
var mycanvas

//sound effect
let shutter;
let yeahhh;
let popsound;
let awww;
let song;

//cameraicon
var cameraIcon = [];
var frameRateNum;
var frameCam;
var frameCamUp;

//frameicon
var frameIcon = [];
var frameShop;
var frameShopUp;

//homepage 
var homepage;
var buttonCam;
var buttonShop;
var gameStart;

//minigame
var coin;
var instruction = [];
var frameInstruction;
var frameInstructionUp;
var cartoonhand;
var frameCartoonhand;
var colorframe;

var winBall;
var awkward;
var confusingBalls = [];
var buttonAgain;
var buttonExit;

//frameshop
  //frame buttons
var frame1;
var frame2;
var frame3;
var frame4;
var frame5;
var frame6;

  //frame arts
var frameart;
var framefinal1;
var framefinal2;
var framefinal3;
var framefinal4;
var framefinal5;

var confirm;
var cancel;
var home;
var homebutton;
var lock;

//usemode 
var usemode;
var uploadbutton;
var takephotobutton;
var screenshot;
let userphoto;
let img;
let video;
let pic;
var snap;
var randomcoloricon;
var downloadicon;
var snapicon;

//color palette
var brushcolor;
var lightyellow;
var lightpurple;
var lightred;
var lightgreen;
var lightblue;
var black;
var white;
var randomcolor;


function preload(){
  
  //load in the handwritten font
  handwrittenFont = loadFont('fonts/handwrittenFont.ttf');
  
  //sound effect
  soundFormats('mp3', 'wav');
  shutter = loadSound('sound/shutter.mp3');
  yeahhh = loadSound('sound/yeahhh.mp3');
  popsound = loadSound('sound/pop.mp3');
  awww = loadSound('sound/awww.mp3');
  song = loadSound('sound/song.mp3');
}

function setup() {
  
  createCanvas(600, 400);
  
  //create a specific area for the screenshot
  mycanvas = createGraphics(280,350);
  mycanvas.noStroke();
  mycanvas.fill(255);
  mycanvas.rect(0,0,280,350);
  
  //style
  textSize(50);
  textAlign(CENTER,CENTER);
  textFont(handwrittenFont);
  
  //for the home page
  homepage = true;
  plain = loadImage("images/background.png");
  frameIcon = loadImage("images/frameIcon.png");
  buttonCam = new PageButton(120,200,120,120,200,100,100);
  buttonShop = new PageButton(350,200,120,120,200,100,100);
  
  //for the camera icon
  for(var i =0; i<7; i++){
    cameraIcon[i] = loadImage("images/icon"+i+".png");
  }
  
  //for the frame shop icon
  for(var w =0; w<8; w++){
    frameIcon[w] = loadImage("images/frameIcon"+w+".png");
  }
  
  //animations set up
  frameRateNum = 6;
  frameCam = 0;
  frameShop = 0;
  frameInstruction = 0;
  frameCartoonhand = 0;
  frameInstructionUp = true;
  frameCamUp = true;
  frameShopUp = true;
  
  //for the mini game
  coin = 10;
  for(var i =0; i<5; i++){
    instruction[i] = loadImage("images/instruction0.png");
  }
  for(var i =5; i<10; i++){
    instruction[i] = loadImage("images/instruction1.png");
  }
  cartoonhand = loadImage("images/cartoonhand0.png");
  awkward = loadImage("images/awkwardface.png");

  
  gameStart = new PageButton(130,330,120,50,200,100,100);
  winBall = new Ball(385,85,random(255),random(255),random(255));
    //makeing other balls for confusion
  for (var l =0;l<20;l++){
    confusingBalls[l] = new Ball(random(600),random(400),random(255),random(255),random(255));
  }
  
  colorframe = new Frame(random(255),random(255),random(255));
  buttonAgain = new PageButton(420,200,120,50,200,100,100);
  buttonExit = new PageButton(420,300,120,50,200,100,100);
  
  
  //for the frame shop
  //set up buttons with the FrameButton class
  frame1 = new FrameButton(60,40,2);
  frame2 = new FrameButton(240,40,3);
  frame3 = new FrameButton(420,40,3);
  frame4 = new FrameButton(60,220,5);
  frame5 = new FrameButton(240,220,5);
  frame6 = new FrameButton(420,220,10);
  
  home = new PageButton(10,10,30,30,200,100,100);
  
  //load images of preview frames
  frameart = loadImage("frames/frameart.png");
  framefinal1 = loadImage("frames/framefinal1.png");
  framefinal2 = loadImage("frames/framefinal2.png");
  framefinal3 = loadImage("frames/framefinal3.png");
  framefinal4 = loadImage("frames/framefinal4.png");
  framefinal5 = loadImage("frames/framefinal5.png");
  
  randomcoloricon = loadImage("images/randomcoloricon.png");
  snapicon = loadImage("images/snapicon.png");
  downloadicon = loadImage("images/downloadicon.png");
  
  //confirmation
  confirm = new PageButton(170,210,80,50,244,194,194);
  cancel = new PageButton(350,210,80,50,244,194,194);
  
  lock = loadImage("images/lock.png");
  homebutton = loadImage("images/homebutton.png");
  
  //for using the frame
  usemode = false;
  uploadbutton = new PageButton(430,100,120,40,200,100,100);
  takephotobutton = new PageButton(430,200,120,40,200,100,100);
  screenshot = new PageButton(470,300,50,50,200,100,100);
  snap = new PageButton(470,200,50,50,200,100,100);
  
  //for the color palette
  brushcolor = color(0);
  lightyellow = new PageButton(60,60,20,20,252, 238, 167);
  lightpurple = new PageButton(60,100,20,20,204,169,221);
  lightred = new PageButton(60,140,20,20,200,100,100);
  lightgreen = new PageButton(60,180,20,20,134,194,156);
  lightblue = new PageButton(60,220,20,20,135,206,235);
  black = new PageButton(60,260,20,20,0,0,0);
  white = new PageButton(60,300,20,20,255,255,255);
  randomcolor = new PageButton(60,340,20,20,random(255),random(255),random(255));
  
}


function draw() {
  background(220);
  plain.resize(600,400);
  image(plain,0,0);
  
  if (homepage == true){
    removeElements();

    textSize(50);
    strokeWeight(1);
    fill(0);
    text("Polaroid Time!",width/2+2,112);
    fill(200,100,100)
    text("Polaroid Time!",width/2,110);
    
    textSize(20);
    fill(0);
    text("SnapShot!",180,340);
    text("Frame Shop",411,340);
    
    buttonCam.display();
    buttonCam.interact();

    buttonShop.display();
    buttonShop.interact();
    display();
    coincounter();
  }
  
  else if (buttonCam.on == true){
    pageGame();
  }
  
  else if (buttonShop.on == true){
    pageShop();
  }
  
  else if(frame6.use == true){
    pageDrawing();
  }
  
  else if (usemode == true && frame6.use != true){
    pageUse();
  }

}

function display(){
  
  //make the camera move if hovered  
  if (buttonCam.hover == true){
    
    frameRate(frameRateNum);

    image(cameraIcon[frameCam],30,150);

    if(frameCamUp == true){
      frameCam += 1;
    }
    else{
      frameCam = 0;
    }

    if(frameCam == 0 && frameCamUp == false){
      frameCamUp = true;
    }
    else if(frameCam == 6 && frameCamUp == true){
      frameCamUp = false;
    }
  }
  else{
    image(cameraIcon[0],30,150);
  }
  
  //make the frame move if hovered
  if (buttonShop.hover == true){
    //display
    frameRate(frameRateNum);

    image(frameIcon[frameShop],200,120);

    if(frameShopUp == true){
      frameShop += 1;
    }
    else{
      frameShop = 0;
    }

    if(frameShop == 0 && frameShopUp == false){
      frameShopUp = true;
    }
    else if(frameShop == 7 && frameShopUp == true){
      frameShopUp = false;
    }
  }
  else{
    image(frameIcon,200,120);
  }

}

//the start page of mini game
function pageGame(){
  
  //contructing the frame
  noStroke();
  fill(255);
  rect(70,50,250,250);
  
  winBall.display();
  if (gameStart.on == false){
    //enable start button
    gameStart.display();
    gameStart.interact();
    textSize(30);
    fill(0);
    text("start",190,355);
    
    //make the instruction animated
    image(instruction[frameInstruction],0,0);

    if(frameInstructionUp == true){
      frameInstruction += 1;
    }
    else{
      frameInstruction = 0;
    }

    if(frameInstruction == 0 && frameInstructionUp == false){
      frameInstructionUp = true;
    }
    else if(frameInstruction == 9 && frameInstructionUp == true){
      frameInstructionUp = false;
    }
    
    home.display();
    home.interact();
    image(homebutton,-1,0);
    
    //retrun to home page
    if (home.on == true){
      homepage = true;
      buttonCam.on = false;
      home.on = false;
    }
    
  }
  else if (gameStart.on == true){
    
    if(winBall.stop ==false){
      if(song.isPlaying() == false){
          song.play();
        }
      image(cartoonhand,0,0);
    }
    
    frameRate(100);
    for (var l =0;l<20;l++){
      confusingBalls[l].display();
      confusingBalls[l].move();
    }
    winBall.display();
    winBall.move();
  }
  
  //setting up conditions where the ball stops within the frame
  if(winBall.stop == true){
    
    //photo frame
    image(plain,320,0);
    image(plain,0,-350);
    image(plain,-530,0);
    image(plain,0,300);
    
    //successfully catch the ball
    if(winBall.x > 70 && winBall.x < 320 && winBall.y > 50 && winBall.y < 300){
      if(yeahhh.isPlaying() == false){
          yeahhh.play();
        }
      console.log("collide!");
      winBall.collide = true;
      image(awkward,winBall.x-30,winBall.y-48);
      colorframe.display();
      fill(0);
      text("Congraz!",470,100);
      text("You win a coin!",470,150);
    }
    //fail to catch the ball
    else{
      if(awww.isPlaying() == false){
        awww.play();
      }
      
      winBall.collide = false;
      colorframe.display();
      fill(0);
      text("you lose!",470,100);
    }
    
    buttonAgain.display();
    buttonAgain.interact();
    
    buttonExit.display();
    buttonExit.interact();
    
    fill(0);
    strokeWeight(1);
    textSize(30);
    text("Again",480,225);
    text("Exit",480,325);
  }
  
  //let the user to play again
  if (buttonAgain.on ==true){
    //accumulated coins
    if (winBall.collide == true){
      coin++;
    }
    for (var l =0;l<20;l++){
      confusingBalls[l].stop = false;
      confusingBalls[l].returnConfuse();
    }
    colorframe.return();
    winBall.returnWin();
    winBall.stop = false;
    gameStart.on = false;
    buttonAgain.on = false;
    frameRate(frameRateNum);
  }
  
  //let the user to exit
  if (buttonExit.on ==true){
    //accumulated coins
    if (winBall.collide == true){
      coin++;
    }
    for (var l =0;l<20;l++){
      confusingBalls[l].stop = false;
      confusingBalls[l].returnConfuse();
    }
    colorframe.return();
    winBall.returnWin();
    winBall.stop = false;
    gameStart.on = false;
    buttonCam.hover = false;
    buttonCam.on = false;
    homepage = true;
    buttonExit.on = false;
    frameRate(frameRateNum);
  }
}

//display the coin counter
function coincounter(){
  noStroke();
  fill(0);
  textSize(20);
  if (coin<2){
    text(coin+" coin",550,20);
  }
  else{
    text(coin+" coins",550,20);
  }
  
}

//the page of frame shop
function pageShop(){
  
  coincounter();
  
  home.display();
  home.interact();
  image(homebutton,-1,0);
  
  //make frames display & interact
  frame1.display();
  frame1.interact();
  frame2.display();
  frame2.interact();
  frame3.display();
  frame3.interact();
  frame4.display();
  frame4.interact();
  frame5.display();
  frame5.interact();
  frame6.display();
  frame6.interact();
  strokeWeight(1);
  
  //display frame arts
  image(frameart,1,0);
  
  frame1.lockmode();
  frame2.lockmode();
  frame3.lockmode();
  frame4.lockmode();
  frame5.lockmode();
  frame6.lockmode();
  
  frame1.confirmation();
  frame2.confirmation();
  frame3.confirmation();
  frame4.confirmation();
  frame5.confirmation();
  frame6.confirmation();
  
  //retrun to home page
  if (home.on == true){
    homepage = true;
    buttonShop.on = false;
    home.on = false;
  }
  
  
}

//use the frame and upload image
function pageUse(){ 
  
  //frame 1
  if (frame1.use == true){
    mycanvas.image(framefinal1,-101,-25);
  }
  else if (frame2.use == true){
    mycanvas.image(framefinal2,-101,-25);
  }
  else if (frame3.use == true){
    mycanvas.image(framefinal3,-101,-25);
  }
  else if (frame4.use == true){
    mycanvas.image(framefinal4,-101,-25);
  }
  else if (frame5.use == true){
    mycanvas.image(framefinal5,-101,-25);
  }
  
  
  
  if(uploadbutton.on ==true){
    
    screenshot.display();
    screenshot.interact();
    
    image(downloadicon,1,0);
    
    mycanvas.userphoto = createFileInput(uploadFile);
    mycanvas.userphoto.position(405, 100);

    if (img) {
      mycanvas.image(img, 15,15, 250, 250);
    }
    
    fill(0);
    textSize(15);
    noStroke();
    text("*suggestion*\nPlease make sure \nyour image is sqaured \nbefore uploading :-)",495,200);
    
  }
  
  else if (takephotobutton.on ==true){
    
    screenshot.display();
    screenshot.interact();
    
    snap.display();
    snap.interact();
    
    image(downloadicon,1,0);
    image(snapicon,1,0);
    
    fill(0);
    textSize(15);
    noStroke();
    text("*suggestion*\nFind your best pose \nand SNAP! :-)",495,100);
    
    if (snap.on == false){
      //access live webcam
      video = createCapture(VIDEO); 
      video.hide();
      if (pic) {
        mycanvas.image(pic, 15, 15, 400, 300);
      }
    }
    else if (snap.on == true){
      if(shutter.isPlaying() == false){
          shutter.play();
        }
      //draw the image being captured on webcam onto the canvas
      pic = createImage(640,480);

      pic.copy(video, 0, 0, 640,480, 0,0, 400, 400);
      redraw();
      console.log('snap!')
      snap.on = false;
    }
  }
  
  else{

    uploadbutton.display();
    uploadbutton.interact();
    
    takephotobutton.display();
    takephotobutton.interact();
    
    
    fill(0);
    textSize(15);
    noStroke();
    text("Upload ur pic",490,120);
    text("Take a selfie",490,220);
  }
  
  //frame 1
  if (frame1.use == true){
    mycanvas.image(framefinal1,-101,-25);
  }
  else if (frame2.use == true){
    mycanvas.image(framefinal2,-101,-25);
  }
  else if (frame3.use == true){
    mycanvas.image(framefinal3,-101,-25);
  }
  else if (frame4.use == true){
    mycanvas.image(framefinal4,-101,-25);
  }
  else if (frame5.use == true){
    mycanvas.image(framefinal5,-101,-25);
  }
  
  image(mycanvas,100,25);
  
  home.display();
  home.interact();
  image(homebutton,-1,0);
      
  //retrun to home page
  if (home.on == true){
    mycanvas.noStroke();
    mycanvas.fill(255);
    mycanvas.rect(0,0,280,350);
    if(takephotobutton.on == true){
      video.remove();
    }
    uploadbutton.on = false;
    takephotobutton.on = false;
    homepage = true;
    frame1.use = false;
    frame2.use = false;
    frame3.use = false;
    frame4.use = false;
    frame5.use = false;
    frame6.use = false;
    usemode = false;
    removeElements();
    home.on = false;
  }

  downloadpic();
}

function downloadpic(){
  frameRate(6);
  if (screenshot.on == true){
    console.log("download!")
    save(mycanvas,"MyPolaroidPic.jpg");
    screenshot.on = false;
  }
}

function uploadFile(file) {
  
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

//drawingmode
function pageDrawing(){

  image(mycanvas,100,25);
  
  home.display();
  home.interact();
  image(homebutton,-1,0);
  
  //color icons
  stroke(0);
  lightyellow.display();
  lightyellow.interact();  
  lightpurple.display();
  lightpurple.interact();
  lightred.display();
  lightred.interact();  
  lightgreen.display();
  lightgreen.interact();
  lightblue.display();
  lightblue.interact();
  black.display();
  black.interact();
  white.display();
  white.interact();
  randomcolor.display();
  randomcolor.interact();
  
  image(randomcoloricon,0,0);
  
  //change brushcolor when color is clicked
  if(lightyellow.on == true){
    brushcolor = color(252, 238, 167);
    lightyellow.on = false;   
  }
  else if(lightpurple.on == true){
    brushcolor = color(204,169,221);
    lightpurple.on = false;
    
  }
  else if(lightred.on == true){
    brushcolor = color(200,100,100);
    lightred.on = false;
    
  }
  else if(lightgreen.on == true){
    brushcolor = color(134,194,156);
    lightgreen.on = false;
    
  }
  else if(lightblue.on == true){
    brushcolor = color(135,206,235);
    lightblue.on = false;
    
  }
  else if(black.on == true){
    brushcolor = color(0);
    black.on = false;
    
  }
  else if(white.on == true){
    brushcolor = color(255);
    white.on = false;

  }
  else if(randomcolor.on == true){
    brushcolor = color(random(255),random(255),random(255));
    randomcolor.on = false;
  }
  
  //functions of pageUse
  if(uploadbutton.on ==true){
    
    screenshot.display();
    screenshot.interact();
    
    image(downloadicon,1,0);
    
    mycanvas.userphoto = createFileInput(uploadFile);
    mycanvas.userphoto.position(405, 100);

    if (img) {
      mycanvas.image(img, 15,15, 250, 250);
    }
    
    fill(0);
    textSize(15);
    noStroke();
    text("*suggestion*\nPlease make sure \nyour image is sqaured \nbefore uploading :-)",495,200);
    
  }
  
  else if (takephotobutton.on ==true){
    
    screenshot.display();
    screenshot.interact();
    
    snap.display();
    snap.interact();
    
    image(downloadicon,1,0);
    image(snapicon,1,0);
    
    fill(0);
    textSize(15);
    noStroke();
    text("*suggestion*\nFind your best pose \nand SNAP! ;-)",495,100);
    
    if (snap.on == false){
      //access live webcam
      video = createCapture(VIDEO); 
      video.hide();
      if (pic) {
        mycanvas.image(pic, 15, 15, 400, 300);
      }
    }
    else if (snap.on == true){
      if(shutter.isPlaying() == false){
          shutter.play();
        }
      //draw the image being captured on webcam onto the canvas
      pic = createImage(640,480);

      pic.copy(video, 0, 0, 640, 480, 0,0, 400, 400);
      redraw();
      console.log('snap!')
      snap.on = false;
    }
    
  }
  
  else{
    
    mycanvas.noStroke();
    mycanvas.fill(255,238,236);
    mycanvas.rect(15,15,250,250);
    uploadbutton.display();
    uploadbutton.interact();
    
    takephotobutton.display();
    takephotobutton.interact();
    
    fill(0);
    textSize(15);
    noStroke();
    text("Upload ur pic",490,120);
    text("Take a selfie",490,220);
    
    fill(0);
    textSize(15);
    noStroke();
    text("*instruction*\nUse the colors \non the left \nand creat your unique \nPolaroid frame! :-)",495,320);
  }
  
  home.display();
  home.interact();
  image(homebutton,-1,0);
      
  //retrun to home page
  if (home.on == true){
    mycanvas.noStroke();
    mycanvas.fill(255);
    mycanvas.rect(0,0,280,350);
    if(takephotobutton.on == true){
      video.remove();
    }
    uploadbutton.on = false;
    takephotobutton.on = false;
    homepage = true;
    frame6.use = false;
    usemode = false;
    removeElements();
    home.on = false;
  }

  downloadpic();
}

function mouseDragged() {

  if(frame6.use == true){
    frameRate(100);  
    mycanvas.stroke(brushcolor);
    mycanvas.strokeWeight(10);
    mycanvas.line(mouseX-100, mouseY-25, pmouseX-100, pmouseY-25);
  }

}

//Make the class for page buttons!
class PageButton{
  
  constructor(posX,posY,width,height,red,green,blue){
    
    
    //setting all of the properties that have an unique inputted parameter
    this.x = posX;
    this.y = posY;
    this.w = width;
    this.h = height;
    this.r = red;
    this.g = green;
    this.b = blue;
    
    //set all of the constant parameters
    this.hover = false;
    this.on = false;

  }
  
  display(){
    if (this.hover == true){
      stroke(this.r,this.g,this.b);
      strokeWeight(5);
    }
    else{
      stroke(this.r,this.g,this.b);
      strokeWeight(1);
    }
    
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,this.w,this.h,10);
  }
  
  interact(){
    //check if we are hovering over the button
    if(mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h){
      this.hover = true;
    }
    else{
      this.hover = false;
    }
    
    
    if (this.hover == true){
      if(mouseIsPressed){
        this.on = true;
        if(popsound.isPlaying() == false){
          popsound.play();
        }
        homepage = false;
        console.log("pressed!")
      }
    }
  }

}

class Ball{
  
  //make the construsctor 
  constructor(xPos,yPos,red,green,blue){
    
    this.x = xPos;
    this.y = yPos;
    this.r = red;
    this.g = green;
    this.b = blue;
    
    this.size = 50;
    this.xSpeed = random(-10,10);
    this.ySpeed = random(-10,10);
    
    this.collide = false;
    this.stop = false;
  }
  
  display(){
    
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,this.size);
  }
  
  move(){
    
    if (this.stop == false){
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      if(this.x > width || this.x < 0){
        this.xSpeed *= -1;
      }
      if(this.y > height || this.y < 0){
        this.ySpeed *= -1;
      }
      console.log("move!");
    }
    
    if(keyIsPressed){
      if(key == " "){
        
        this.stop = true;
        console.log("stop!");
      }
    }
  }
  
  returnWin(){
    this.x = 385;
    this.y = 85;
    
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    
    this.xSpeed = random(-10,10);
    this.ySpeed = random(-10,10);
  }
  
  returnConfuse(){
    this.x = random(600);
    this.y = random(400);
    
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    
    this.xSpeed = random(-10,10);
    this.ySpeed = random(-10,10);
  }
  
}

//randomize the color of the frame for the mini game
class Frame{
  constructor(red,green,blue){
    this.r = red;
    this.g = green;
    this.b = blue;
    
  }
  
  display(){
    fill(this.r,this.g,this.b);
    rect(50,30,290,20);
    rect(50,30,20,350);
    rect(320,30,20,350);
    rect(50,300,290,80);
    fill(this.r,this.g,this.b,50);
    rect(70,50,250,250);
  }
  
  return(){
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
}

//buttons for frames
class FrameButton{
  
  constructor(posX,posY,price){
    
    
    //setting all of the properties that have an unique inputted parameterx
    this.x = posX;
    this.y = posY;
    
    this.w = 120;
    this.h = 140;
    
    this.price = price;
      
    this.hover = false;
    this.on = false;
    
    this.lock = true;
    
    this.buy = 0;
    
    this.use = false;
  }
  
  display(){
    if (this.hover == true){
      stroke(200,100,100);
      strokeWeight(5);
    }
    else{
      stroke(200,100,100);
      strokeWeight(1);
    }
    
    fill(200,100,100);
    rect(this.x,this.y,this.w,this.h,10);
    
    if (this.lock == true){
      textFont("Georgia");
      fill(0);
      noStroke();
      text("- $ "+this.price+" -",this.x+60,this.y+155);
      textFont(handwrittenFont);
    }

  }
  
  interact(){
    //check if we are hovering over the button
    if(mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h){
      this.hover = true;
    }
    else{
      this.hover = false;
    }
    
    
    if (this.hover == true){
      if(mouseIsPressed){
        this.on = true;
        if(popsound.isPlaying() == false){
          popsound.play();
        }
        console.log("pressed!")
      }
    }
  }
  
  confirmation(){
    //if the frame is selected
    if (this.on == true){
      
      //hide the home button
      image(plain,-550,-350);
      
      //if the frame is available for purchase
      if (this.lock == true){
        
        //the buying proccess
        if (confirm.on == true){
          
          //check whether the user have enough coins
          //insufficient balance
          if (this.buy == 0 && coin < this.price){
          
            noStroke();
            fill(0);
            rect(140,120,320,160,10);
            fill(200,100,100);
            rect(150,130,300,140,10);

            fill(0);
            text('Insufficient balance :-/',width/2,height/2-20);

            cancel.display();
            cancel.interact();

            noStroke();
            fill(0);
            text("Exit",390,235);
            
            //exit
            if (cancel.on == true){
              confirm.on = false;
              cancel.on = false;
              this.on = false;
            }

          }
          
          //purchasing
          else if(this.buy == 0 && coin >= this.price){
              coin -= this.price;
              this.buy ++;
              console.log(this.buy);
          }
          
          //successfully purchased message
          else if (this.buy > 0){
            
            noStroke();
            fill(0);
            rect(140,120,320,160,10);
            fill(200,100,100);
            rect(150,130,300,140,10);

            fill(0);
            text('You got it!',width/2,height/2-20);

            cancel.display();
            cancel.interact();

            noStroke();
            fill(0);
            text("Exit",390,235);
            
            //exit
            if (cancel.on == true){
              confirm.on = false;
              cancel.on = false;
              this.on = false;
              this.lock = false;
            }
          }
        }
        
        //cancel the payment
        else if (cancel.on == true){
          confirm.on = false;
          cancel.on = false;
          this.on = false;
        }
        
        //send confirmation message
        else{
          noStroke();
          fill(244,194,194);
          rect(140,120,320,160,10);
          fill(200,100,100);
          rect(150,130,300,140,10);

          confirm.display();
          confirm.interact();
          cancel.display();
          cancel.interact();

          noStroke();
          fill(0);
          text('You will use '+this.price+'\n coins to purchase',width/2,height/2-30);
          text("OK!",210,235);
          text("Cancel",390,235);
        }
      }
      
      //if already purchased: start use
      else{
        this.use = true;
        usemode = true;
        this.confirm = false;
        this.on = false;
        buttonShop.on = false;
        
           
      }
    }
  }
  
  lockmode(){
    //make the lock mode
    if (this.lock == true){
      fill(255,80);
      rect(this.x,this.y,this.w,this.h,10);
      image(lock,this.x+45,this.y+45);
    }
  }
  
}