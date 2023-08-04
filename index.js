


document.querySelector("button").addEventListener("click",function(){
    var randomnum1= Math.floor(Math.random()*6)+1;
var randomdice= "dice"+ randomnum1+".png";
var randomimg1 = "images/"+randomdice;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimg1);


var randomnum2 =Math.floor(Math.random()*6)+1;
var randomimg2 = "images/dice" + randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2)

if(randomnum1>randomnum2)
{
document.querySelector("h1").innerHTML = "player 1 Wins🥳!!"
}
else if(randomnum2>randomnum1){

document.querySelector("h1").innerHTML = "player 2 Wins🥳!!";
}
else{
    document.querySelector("h1").innerHTML = "Draw🙌";
}
})

