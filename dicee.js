var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
var diceImage1 = document.querySelector(".img1");
var diceImage2 = document.querySelector(".img2");
var heading = document.querySelector("h1");

diceImage1.setAttribute("src", "images/dice"+randomNumber1+".png");
diceImage2.setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    heading.innerHTML = "🚩 Player 1 win";
}
else if(randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 win 🚩";
} else{
    heading.innerHTML = "Draw";
}