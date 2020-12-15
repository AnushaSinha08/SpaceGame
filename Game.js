class Game {
  constructor(){

  }

  

  playlevel1(){
    form.hide();
     background(bg2)

    player = createSprite(190,174,60,70);
    player.addImage('playerIMG',playerIMG);
    player.scale = 0.5
  
    if (frameCount % 60 === 0) {
      Meteor1 = createSprite(700,200,30,100);
      Meteor1.addImage('MeteorIMG1',MeteorIMG1);
    //Meteor1.velocityX = -3;
      Meteor1.scale = 0.5;
     //Meteor.add(Meteor1);

      
    }
    
    if (frameCount % 30 === 0) {
      Meteor2 = createSprite(900,200,30,100);
      Meteor2.addImage('MeteorIMG2',MeteorIMG2);
     // Meteor2.velocityX = -3;
      Meteor2.scale = 0.5;
      //Meteor.add(Meteor2);
      
    }
    
    
    drawSprites();
  }
}
