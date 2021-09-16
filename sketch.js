var hypnoticBall, database;
var position;
var form,game,player
var playerCount,gameState=0
var distant=0
var allPlayers

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
//form=new Form()
game=new Game ()
game.getState()
game.start()
//form.display()
console.log(gameState)
}
function draw(){
  if(playerCount===4){
    game.update(1)
  }
  if (gameState===1){
    clear ()
    game.play()
  }
}