var position;
var form;
var state = 0;
var game;
var player;
var count;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game() ;
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
   
  
}

