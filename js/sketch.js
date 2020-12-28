var player1_moving_r,player1_moving_l
var player1_shoot_r,player1_shoot_l
var player1_jump_r;
var player1_sit_r

var player1_still;

var player_wo_gun_moving_right
var player_wo_gun_moving_left


var soldier

var bgImg;

var house1,house2,house3

var house

var button1_img
var button2_img
var button3_img

var collect_img, collect1;

var inside1_img,inside2_img,inside3_img
var flag1 =0, flag2 = 0, flag3 = 0;


var weapon1,weapon2,crown_spr;
var open_img
var player2_shoot_img
var shootWeapon=0
var bullet2Group,player2Group,bullet1Group
var heart_img,heart1,heart2,heart3;
var life = 0;
var over
var win_img
var bullet_mp3
var die
var win
var instruction_img
var game = 0 
var trial
var trial2
var trial3



function preload(){
  

      //player_wo_gun
      player_wo_gun_moving_right=loadAnimation("assets/images/without gun/right/a.png","assets/images/without gun/right/b.png",
      "assets/images/without gun/right/c.png",
      "assets/images/without gun/right/e.png","assets/images/without gun/right/f.png",
      "assets/images/without gun/right/g.png","assets/images/without gun/right/h.png")
      player_wo_gun_moving_left=loadAnimation("assets/images/without gun/left/a.png","assets/images/without gun/left/b.png",
      "assets/images/without gun/left/c.png",
      "assets/images/without gun/left/e.png","assets/images/without gun/left/f.png",
      "assets/images/without gun/left/g.png","assets/images/without gun/left/h.png")

      player_wo_gun_still=loadAnimation("assets/images/without gun/right/a.png","assets/images/without gun/right/e.png")

      bgImg=loadImage("assets/images/bg/img.png")

      house1_img=loadImage("assets/images/house/h1.png")
      house2_img=loadImage("assets/images/house/h2.png")
      house3_img=loadImage("assets/images/house/h3.png")

      button1_img=loadImage("assets/images/button.png");
      button2_img=loadImage("assets/images/button.png");
      button3_img=loadImage("assets/images/button.png");

       //inside
       inside1_img=loadImage("assets/images/inside/ins1.png")
       inside2_img=loadImage("assets/images/inside/ins2.png")
       inside3_img=loadImage("assets/images/inside/ins3.png")

      //weapon
      weapon1_img=loadImage("assets/images/weapon/w1.png")
      weapon2_img=loadImage("assets/images/weapon/w2.png")
      crown_img=loadImage("assets/images/crown.png")

      collect_img=loadImage("assets/images/collect.png")

      //shooting
            //r
            player2_shoot_img=loadAnimation("assets/images/enemy/shoot/left/1.png",
            "assets/images/enemy/shoot/left/2.png","assets/images/enemy/shoot/left/3.png",
            "assets/images/enemy/shoot/left/4.png")

            bullet2_img=loadImage("assets/images/bullets/bullet2.png")
            
      
            bullet1_img=loadImage("assets/images/bullets/bullet1.png")

               //player1
       //moving
            //r
            player1_moving_r=loadAnimation("assets/images/soldier/run/right/1.png","assets/images/soldier/run/right/2.png"
            ,"assets/images/soldier/run/right/3.png","assets/images/soldier/run/right/4.png"
            ,"assets/images/soldier/run/right/5.png","assets/images/soldier/run/right/6.png")
            //l
            player1_moving_l=loadAnimation("assets/images/soldier/run/left/1.png","assets/images/soldier/run/left/2.png"
            ,"assets/images/soldier/run/left/3.png","assets/images/soldier/run/left/4.png"
            ,"assets/images/soldier/run/left/5.png","assets/images/soldier/run/left/6.png")

       //shooting
            //r
            player1_shoot_r=loadAnimation("assets/images/soldier/shoot/right/1.png",
            "assets/images/soldier/shoot/right/2.png","assets/images/soldier/shoot/right/3.png",
            "assets/images/soldier/shoot/right/4.png",)
            //l
            player1_shoot_l=loadAnimation("assets/images/soldier/shoot/left/1.png",
            "assets/images/soldier/shoot/left/2.png","assets/images/soldier/shoot/left/3.png",
            "assets/images/soldier/shoot/left/4.png",)
            
       //still
            player1_still_r=loadImage("assets/images/soldier/shoot/right/3.png")
            player1_still_l=loadImage("assets/images/soldier/shoot/left/3.png")

            heart_img = loadImage("assets/images/heart.png");

            over = loadImage("assets/images/gameOver2.png")

            win_img=loadImage("assets/images/you win1.png")

            bullet_mp3=loadSound("assets/sounds/bullet.mp3")
         

            die = loadSound("assets/sounds/die.mp3")
            win = loadSound("assets/sounds/win.mp3")

            instruction_img = loadImage("assets/images/instruct.png")
   
            icon_img = loadImage("assets/images/Icon.png");
    
}
function setup(){
    createCanvas(windowWidth,windowHeight)

    

   house1=createSprite(windowWidth+2000,windowHeight-300,20,20)
          house1.addImage("h1",house1_img)
          house1.scale=3;
          door1 = createSprite(house1.x-50,windowHeight-350,100,200)   
          door1.addImage("1",button1_img)
          door1.scale=0.1
          collect1 = createSprite(house1.x-50,windowHeight-300);
          collect1.scale=0.1
          collect1.visible=false;
          
 
 house2=createSprite(windowWidth+6500,windowHeight-300,20,20)
          house2.addImage("h2",house2_img)
          house2.scale=2;   
          door2 = createSprite(house2.x,windowHeight-350,100,200)   
          door2.addImage("1",button2_img)
          door2.scale=0.1
          collect2 = createSprite(house2.x,windowHeight-300);
          collect2.scale=0.1
          collect2.visible=false;

     
  house3=createSprite(windowWidth+9000,windowHeight-310,20,20)
          house3.addImage("h3",house3_img)
          house3.scale=2 
          door3 = createSprite(house3.x,windowHeight-350,100,200)   
          door3.addImage("1",button3_img)
          door3.scale=0.1
          collect3 = createSprite(house3.x+1000,windowHeight-300);
          collect3.scale=0.1
          collect3.visible=false;

    

    soldier = createSprite(windowWidth-1300,windowHeight-200,20,20);
    soldier.addAnimation("playerstill",player_wo_gun_still)
    soldier.addAnimation("player_r",player_wo_gun_moving_right)
    soldier.addAnimation("player_l",player_wo_gun_moving_left)
    soldier.addAnimation("player1still_r",player1_still_r)
    soldier.addAnimation("player1still_l",player1_still_l)
    soldier.addAnimation("player1_r",player1_moving_r)
    soldier.addAnimation("player1_l",player1_moving_l)
    soldier.addAnimation("player1shoot_r",player1_shoot_r)
    soldier.addAnimation("player1shoot_l",player1_shoot_l)
    soldier.scale=2.5

    weapon1 = createSprite(windowWidth+2000,windowHeight-150,20,20);
    weapon1.visible = false;
    weapon1.depth=soldier.depth-1
    weapon1.scale=0.8

  weapon2 = createSprite(windowWidth+6500,windowHeight-150,20,20);
    weapon2.visible = false
    weapon2.depth=soldier.depth-1;
    weapon2.scale=0.6
    crown_spr = createSprite(windowWidth+10000,windowHeight-100,20,20);
    crown_spr.visible = false;
    crown_spr.depth=soldier.depth-1;
    crown_spr.scale=0.3

    bullet2Group = new Group();
    bullet1Group = new Group();
    player2Group = new Group();

    heart1 = createSprite(camera.position.x,windowHeight-550)
    heart1.addImage("heart1",heart_img)
    heart1.scale=0.3 
    heart2 = createSprite(camera.position.x-100,windowHeight-550)
    heart2.addImage("heart2",heart_img)
    heart2.scale=0.3
    heart3 = createSprite(camera.position.x-200,windowHeight-550)
    heart3.scale=0.3
    heart3.addImage("heart1",heart_img)

    instruction = createSprite(windowWidth-1350,windowHeight-400,50,50)
    instruction.addImage("ins",instruction_img)
    instruction.scale=2
    
    trial = createSprite(door1.x,door1.y+100,200,200);
    trial.visible=false;
    trial2 = createSprite(door2.x,door2.y+100,200,200);
    trial2.visible=false;
    trial3 = createSprite(door3.x,door3.y+100,200,200);
    trial3.visible=false;

 
}

function draw(){
    camera.position.x=soldier.x
   
   var instruct = setTimeout(myFunc,20000)
    background(180)
    image(bgImg, 0,0,width*10,height );
 if(game === 1){
    textSize(24)
    fill("green")
    stroke("orange")
    text("Collect the Weapon from the house to shoot at enemies",camera.position.x-450,windowHeight-650)
    text("Collect The 'CROWN' from the last house to win the game",camera.position.x-450,windowHeight-730)
    createPlayer2(); 
}
    
if(touches.length > 0 && shootWeapon===1) {
    touches = [];
        soldier.changeAnimation("player1shoot_r",player1_shoot_r)
           createBullet1();
            bullet_mp3.play();
    }  

    
   
 
 
  if(soldier.isTouching(trial)){  
      flag1=1      
  }  
  if(flag1===1){
                image(inside1_img,windowWidth+1500,windowHeight-windowHeight,width,height);
                house1.destroy();
                door1.destroy();
                weapon1.visible = true;
                weapon1.x=trial.x+100
                weapon1.addImage(weapon1_img);
        
                if(soldier.isTouching(weapon1)){
                    weapon1.destroy();
                    flag1 = 0
                    shootWeapon=1
                        soldier.changeAnimation("player1still_r",player1_still_r)
                      
                }
        
            } 
        
        
    
          

    //2nd house
 
    if(soldier.isTouching(trial2)){  
        flag2=1 
    } 
    if(flag2 ===1){
        image(inside2_img, windowHeight+6000,windowHeight-windowHeight,width,height);
        house2.destroy();
        door2.destroy();
        weapon2.visible = true;
        weapon2.x=trial2.x+1000
        weapon2.addImage(weapon2_img);
        if(soldier.isTouching(weapon2)){
                weapon2.destroy();
                flag2 = 0;
                shootWeapon = 1;
                ShootCircle.visible=true;
               
            
        }
    }

    if(soldier.isTouching(trial3)){  
        flag3=1  
    }
    if(flag3===1){
        image(inside3_img, windowWidth+9000,windowHeight-windowHeight,width,height);
        house3.destroy();
        door3.destroy();
        crown_spr.visible = true;
        crown_spr.x=trial3.x+1000
        crown_spr.scale=0.8
        crown_spr.addImage(crown_img);
        if(soldier.isTouching(crown_spr)){
                crown_spr.destroy();
                flag3=2;
                win.play();
                shootWeapon = 1;
                soldier.destroy();
                background(inside3_img)
                ShootCircle.visible=true;

               

            
        }
    }

  
   if(bullet1Group.isTouching(bullet2Group)){
       bullet2Group.destroyEach();
       bullet1Group.destroyEach();
   }
   else if(bullet1Group.isTouching(player2Group)){
       player2Group.destroyEach();
       bullet1Group.destroyEach();
   }

   

if(life ===0 && soldier.isTouching(bullet2Group)){
    bullet2Group.destroyEach();
    player2Group.destroyEach();
    life=1;
    heart1.visible=false;
    die.play();

}

//soldier.debug=true

if(life ===1 && soldier.isTouching(bullet2Group)){
   bullet2Group.destroyEach();
   player2Group.destroyEach();
    life=2
    heart2.visible=false;
    die.play();
}

if(life === 2 &&soldier.isTouching(bullet2Group)){
    bullet2Group.destroyEach();
    player2Group.destroyEach();
    life=3
    heart3.visible=false;
    die.play();
    
}  
if(life !== 3){
    drawSprites();
}

if(game === 0){
    textSize(24)
fill("green")
stroke("orange")
text("Game will start in 20 seconds",camera.position.x-450,windowHeight-850)

}
if(life===3){
    background(255)
    image(over,camera.position.x-750,windowHeight-windowHeight,1500,0)
}

if(flag3 ===2){
  win = createSprite(camera.position.x,windowHeight-500,3500,1500)
  win.addImage("win",win_img)
  win.scale=2
 
}

    

}

function myFunc(){
  
    instruction.destroy();
    game = 1

}
  

function createPlayer2(){
    
    if(frameCount % 200 === 0){
    //var rand=Math.round(random(3000,10000))
    player2=createSprite(random(windowWidth+1500,windowWidth+7500),windowHeight-250);
    player2.addAnimation("player2_img",player2_shoot_img);
    player2.velocityX=-7
    player2.scale=2
    bullet2=createSprite(player2.x-20,soldier.y)
    bullet2.addImage("bullet",bullet2_img)
    bullet2.velocityX=-10
    bullet2.scale=0.1
   // bullet2.debug=true
    bullet2Group.add(bullet2)
    player2Group.add(player2)
    }
}

function createBullet1(){
    bullet1=createSprite(soldier.x-20,soldier.y)
    bullet1.addImage("bullet1",bullet1_img)
    bullet1.scale=0.1
    bullet1.velocityX=10
    bullet1Group.add(bullet1)
}
function touchMoved() {
    if(shootWeapon===0){
        soldier.changeAnimation("playerstill",player_wo_gun_still)
    }
    else if(shootWeapon===1){
        soldier.changeAnimation("player1still_r",player1_still_r)
    }
    for (var i = 0; i < touches.length; i++) {
  
        if(game===1){
            if(touches[i].x>=width/2 && shootWeapon === 0){
                heart1.x+=10
                heart2.x+=10
                heart3.x+=10
                soldier.x+=10
                soldier.changeAnimation("player_r",player_wo_gun_moving_right)
              
            }
            else  if(touches[i].x<width/2  && shootWeapon === 0){
            heart1.x-=10
            heart2.x-=10
            heart3.x-=10    
            soldier.x-=10
            soldier.changeAnimation("player_l",player_wo_gun_moving_left)
            }
            else{
            soldier.changeAnimation("playerstill",player_wo_gun_still)
            }
            }
                if(touches[i].x>=width/2&& shootWeapon===1){
                    heart1.x+=10
                    heart2.x+=10
                    heart3.x+=10
                    soldier.x+=10
                    soldier.changeAnimation("player1_r",player1_moving_r)
            }
            else  if(touches[i].x<width/2&& shootWeapon===1){
                heart1.x-=10
                    heart2.x-=10
                    heart3.x-=10 
                    soldier.x-=10
                soldier.changeAnimation("player1_l",player1_moving_l)
                
            }
            else if(shootWeapon===1){
                soldier.changeAnimation("player1still_r",player1_still_r)
            }
            
    
         
            
            
    
            
       }
   
  }
function mousePressed() {
    return false;
  }
  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  });

