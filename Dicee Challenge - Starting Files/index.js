var num1=Math.floor(Math.random()*6)+1;
var num2=Math.floor(Math.random()*6)+1;

var img1="dice"+num1+".png";
var source1="images/"+img1;

var res1=document.querySelector(".img1");

res1.setAttribute("src",source1);


var img2="dice"+num2+".png";
var source2="images/"+img2;

var res2=document.querySelector(".img2");
res2.setAttribute("src",source2);

if(num1>num2)
document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
else if(num2>num1)
document.querySelector("h1").innerHTML="🚩 Player 2 Wins";
else
document.querySelector("h1").innerHTML="Ooops, It's a Draw Shake Hands";