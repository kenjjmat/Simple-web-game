// we are gonna create the game object
let GameManager = {
  setGameStart: function(classType){
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType){
 switch (classType) {
   case "Warrior":
     player = new Player(classType , 200 , 20 , 200 , 100 , 50 );
     break;
   case "Rogue":
     player = new Player(classType , 100 , 30 , 100 , 150 , 200 );
     break;
   case "Mage":
     player = new Player(classType , 80 , 40 , 50 , 200 , 50 );
     break;
   case "Hunter":
     player = new Player(classType , 200 , 50 , 100 , 200 , 150 );
     break;
}
// this code is to get elements from the website/document
let  getInterface = document.querySelector(".interface");
// this is now using javascript to set the elements in the websites
getInterface.innerHTML = '<img src = "'+ classType +'.jpg" class = "img-avatar"><div><h3>' + classType.toLowerCase() +'<h3><p>Speed :'+player.speed+'</p><p>Mana :'+player.mana+'</p><p>Strength :'+player.strength+'</p><p>Agility :'+player.agility+'</p><p class = "health-player">Health :'+player.health+'</p></div> ';
},
setPreFight: function(){
// this code is get elements
let getHeader = document.querySelector(".header");
let getArena = document.querySelector(".arena");
let getActions = document.querySelector(".actions");
// using html to set the elements
getHeader.innerHTML = '<p class= "p-header">Task: Find an enemy!</p>';
getActions.innerHTML = '<a href ="#" class= "btn-prefight" onclick="GameManager.setFight()">Search for enemy</a>';
// using css to set elements visibility
getArena.style.visibility = "visible";
},
  setFight: function(){
    getHeader = document.querySelector(".header");
    getActions = document.querySelector(".actions");
    getEnemy = document.querySelector(".enemy");

  // create enemy !
  let enemy00 = new Enemy("Goblin", 100, 50 , 50 , 100, 100);
  let enemy01 = new Enemy("Troll", 200, 80 , 150 , 80, 150);
  // creating a random number in javascript
  let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
  switch (chooseRandomEnemy) {
    case 0:
      enemy = enemy00;
      break;
    case 1:
    enemy = enemy01;
    break;

  }
  getHeader.innerHTML = '<p>Task: Choose your move </p>';
  getActions.innerHTML = '<a href ="#" class= "btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';
  // using javascript so set up elements in hmtl
  getEnemy.innerHTML =  '<img src = "'+ enemy.enemyType +'.jpg" class = "img-avatar"><div><h3>' + enemy.enemyType +'<h3><p>Speed :'+enemy.speed+'</p><p>Mana :'+enemy.mana+'</p><p>Strength :'+enemy.strength+'</p><p>Agility :'+ enemy.agility+'</p><p class = "health-enemy">Health :'+ enemy.health+'</p></div>';
  }

};
