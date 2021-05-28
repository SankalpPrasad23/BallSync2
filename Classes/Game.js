class Game{
    constructor(){
    }
 getState(){
 var locindb = database.ref("GameState");
 locindb.on("value",readState);
 function readState(value){
     state = value.val()
 }
 }
updateState(state){
   database.ref('/').update({
       GameState : state
   })
}
start(){
if(state === 0){
  player = new Player();
  player.getCount();
  form = new Form();  
  form.display();
}
}
}