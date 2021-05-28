class Form{
    constructor(){


    }
display(){
var title = createElement('h3');
title.html("CAR RACING GAME");
title.position(550,100);
var input = createInput("Enter Your Name");
input.position(550,200);
var button = createButton("PLAY");
button.position(600,400);
button.mousePressed(click);
function click(){
input.hide();
button.hide();
var name = input.value();
count = count + 1;
 player.updateName(name);
 player.updateCount(count);
var greeting = createElement('h2');
greeting.html("Hello" + " " + name);
greeting.position(550,300);
}
}




}