var canvas, backgroundImage;

var gameState = 0;

function preload(){
track = loadImage("bg.png");
sand = loadImage("sand.png")
 trexImage = loadImage("t-rex.png");
 obs1 = loadImage("tre1.png");
 obs2 = loadImage("tre2.png");
 obs3 = loadImage("tre3.png");
 obs4 = loadImage("tre4.png");
 obs5 = loadImage("rabbit.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  trex=createSprite(displayWidth/2,displayHeight/2);
  trex.addImage("running",trexImage);
  trex.scale = 0.5
  score = 0;

  obstaclesGroup = new Group();
}

function draw(){
  background(sand)

  if(gameState === 0){
   play();
    textSize(15);
   FileList("white")
   text("Score: "+ score, displayWidth/2+500,camera.y-300); 
 }

trex.display();
}

function play(){
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      // if (track.y < 0){
      //   track.y = track.displayHeight/2;
      // }
            camera.position.x = displayWidth/2;
          camera.position.y = trex.y

          

          if(keyIsDown(UP_ARROW)){
            trex.y = trex.y-10;
            score = score + Math.round(getFrameRate()/60);
          }
          if(keyIsDown(RIGHT_ARROW)){
            trex.x = trex.x+10;
            score = score + Math.round(getFrameRate()/60);
          }
          if(keyIsDown(LEFT_ARROW)){
            trex.x = trex.x-10;
            score = score + Math.round(getFrameRate()/60);
         }
         spawnObstacles();
        }

        function spawnObstacles() {
          if(frameCount % 60 === 0) {
            var obstacle = createSprite(displayWidth/2-100,displayHeight/2+300,10,40);
            obstacle.debug = true;
            // obstacle.velocityX = -(6 + 3*score/100);
            
            //generate random obstacles
            var rand = Math.round(random(1,5));
            switch(rand) {
              case 1: obstacle.addImage(obs1);
                      break;
              case 2: obstacle.addImage(obs2);
                      break;
              case 3: obstacle.addImage(obs3);
                      break;
              case 4: obstacle.addImage(obs4);
                      break;
              case 5: obstacle.addImage(obs5);
                      break;
              default: break;
            }
            
            //assign scale and lifetime to the obstacle           
            obstacle.scale = 0.5;
            obstacle.lifetime = 300;
            //add each obstacle to the group
            obstaclesGroup.add(obstacle);
          }
        }
    
