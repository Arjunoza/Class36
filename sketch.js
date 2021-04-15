var  database;
var canvas,backgroundImg;
var form,player,game;

var playerCount = 0;
var gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();
}




function draw(){
  background("white");

  
}
