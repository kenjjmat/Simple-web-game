// we are gonna create the game object
let GameManager = {
  setGameStart: function(classType){
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType){
 switch (classType) {
   case "Warrior":

   let warrior_speed = Math.floor(Math.random() * Math.floor(500));
     player = new Player(classType , 200 , 20 , 200 , 100 , warrior_speed );
     break;
   case "Rogue":
   let rogue_speed = Math.floor(Math.random() * Math.floor(500));
     player = new Player(classType , 100 , 30 , 100 , 150 , rogue_speed );
     break;
   case "Mage":
   let mage_speed = Math.floor(Math.random() * Math.floor(500));
     player = new Player(classType , 80 , 40 , 50 , 200 , mage_speed );
     break;
   case "Hunter":
   let hunter_speed = Math.floor(Math.random() * Math.floor(500));
     player = new Player(classType , 200 , 50 , 100 , 200 , hunter_speed );
     break;
}
// this code is to get elements from the website/document
let  getInterface = document.querySelector(".interface");
// this is now using javascript to set the elements in the websites
getInterface.innerHTML = '<img src = "'+ classType +'.jpg" class = "img-avatar"><div><h3>' + classType.toLowerCase() +'<h3><p>Speed :'+player.speed+'</p><p>Mana :'+player.mana+'</p><p>Strength :'+player.strength+'</p><p>Agility :'+player.agility+'</p><p class = "health-player">Health :'+player.health+'</p></div> ';
},

// this is the setPreFight function

setPreFight: function(){
// this code is get elements
let getHeader = document.querySelector(".header");
let getArena = document.querySelector(".arena");
let getActions = document.querySelector(".actions");
let getEnemy = document.querySelector(".enemy");
// using html to set the elements
getHeader.innerHTML = '<p class= "p-header">Task: Find an enemy!</p>';
getActions.innerHTML = '<a href ="#" class= "btn-prefight" onclick="GameManager.setFight()">Search for enemy</a>';
// using css to set elements visibility

},

// this is the setFight function

setFight: function(){

    getHeader = document.querySelector(".header");
    getActions = document.querySelector(".actions");
    getEnemy = document.querySelector(".enemy");

  // create enemy !
  let enemy00_speed = Math.floor(Math.random()* Math.floor(500));
  let enemy01_speed = Math.floor(Math.random() * Math.floor(500));
  let enemy00 = new Enemy("Goblin", 100, 50 , 50 , 100,enemy00_speed );
  let enemy01 = new Enemy("Troll", 200, 80 , 150 , 80, enemy01_speed);
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
  getEnemy.style.visibility = "visible";
  getHeader.innerHTML = '<p class = "header_attack">Task: Choose your move </p>';
  getActions.innerHTML = '<a href ="#" class= "btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';
  alert("Enemy Have been found>>> Now Press Attack until either of the has been defeated ");
  // using javascript so set up elements in hmtl
  getEnemy.innerHTML =  '<img src = "'+ enemy.enemyType +'.jpg" class = "img-avatar"><div><h3>' + enemy.enemyType +'<h3><p>Speed :'+enemy.speed+'</p><p>Mana :'+enemy.mana+'</p><p>Strength :'+enemy.strength+'</p><p>Agility :'+ enemy.agility+'</p><p class = "health-enemy">Health :'+ enemy.health+'</p></div>';
  }

};
