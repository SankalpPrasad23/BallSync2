class Player{
    constructor(){
    }
    getCount(){
    var locindb2 = database.ref("PlayerCount");
    locindb2.on("value",readCount);
    function readCount(value){
   count = value.val();
    }
    }
    updateCount(count){
    database.ref('/').update({
        PlayerCount : count
    })
    }
    updateName(name){
    var index = "Player" + count;
    database.ref(index).set({
        Name : name
    })
    }
}