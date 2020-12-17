var ghost,tower,door,climber
var doorsgroup,climbersgroup
var invisibleTower
var gameState="play"

function preload(){
  ghostimg=loadImage("ghost-standing.png")
  towerimg=loadImage("tower.png")
  doorimg=loadImage("door.png")
  climberimg=loadImage("climber.png")
  doorimg=loadImage("door.png")
  
}
function setup(){
createCanvas(600,600)
  
  tower=createSprite(300,300)
  tower.addImage("tower",towerimg)
  
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage("ghost",ghostimg)
  ghost.scale=0.3
  
  invisibleTower=createSprite(300,300)
  invisibleTower.visible=false
  doorsgroup=createGroup()
  climbersgroup=createGroup()
  
  
}
function draw(){
  background("black")
  
  if(gameState==="play"){
    if(keyDown("space")){
    ghost.velocityY=-1
    if(tower.y>400){
      tower.y=300               
    }
  }
  ghost.velocityY=ghost.velocityY +0.3
  
  if(keyDown("right")){
    ghost.velocityX=1
  }
  
  if(keyDown("left")){
    ghost.velocityX  =-1
    tower.velocityY=1
  }
    spawndoors()
  spawnclimbers()
    
     
  if(ghost.isTouching(doorsgroup)||ghost.isTouching(climbersgroup)){
    
  gameState="end"
  }
      
    
  
  }
  
  
  
 
  
  if(gameState==="end"){
    ghost.destroy()
    doorsgroup.destroyEach()
    climbersgroup.destroyEach()
    tower.destroy()
     stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
  
  
  drawSprites()
}
  
  function spawndoors(){
  if(frameCount%240===0){
    var door=createSprite(600,300,50,20)
    door.x = Math.round(random(0,600)) 
    door.y = Math.round(random(0,600)) 
    door.addImage(doorimg)
    door.velocityY=1
    doorsgroup.add(door)
  }
  }
    function spawnclimbers(){
if(frameCount%240===0){
  var climber=createSprite(200,10)
  climber.x=Math.round(random(0,600))
  climber.addImage(climberimg)
  climber.velocityY=1
  climbersgroup.add(climber)
}
    }
