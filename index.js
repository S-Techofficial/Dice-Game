var randomNumber1=Math.floor(Math.random()*6);
randomNumber1+=1;
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2=Math.floor(Math.random()*6);
randomNumber2+=1;
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumber2+".png");

var randomColor=Math.floor(Math.random()*9);
randomColor+=1;
document.querySelector("body").style.backgroundColor="#"+randomNumber1+"9"+randomColor+"E"+randomNumber2+"6";

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else{
    document.querySelector("h1").innerHTML;
}