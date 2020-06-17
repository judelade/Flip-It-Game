//For first die
var randNum = Math.random();
randNum = Math.floor(randNum * 6) + 1;

var randImage = "dice" +randNum + ".png";

var randImageSource = "images/" +randImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randImageSource);

//For second die
var randNum2 = Math.random();
randNum2 = Math.floor(randNum2 * 6) + 1;

var randImage2 = "dice" +randNum2+ ".png";
var randImageSource2 = "images/" +randImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randImageSource2);

//Displaying winner
if(randNum > randNum2){
    var win1 = document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randNum2 > randNum){
    var win2 = document.querySelector("h1").innerHTML = "Player 2 Wins"
}
else {
    var draw = document.querySelector("h1").innerHTML = "It's a tie!";
}

