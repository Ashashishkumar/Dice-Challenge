let imagenumber1=Math.round(Math.random()*6)+1;
let imagename="dice"+imagenumber1+".png";
let imagesource="images/" + imagename;
document.querySelectorAll("img")[0].setAttribute("src",imagesource);

let imagenumber2=Math.round(Math.random()*6)+1;
let imagename2="dice"+imagenumber2+".png";
let imagesource2="images/" + imagename2;
document.querySelectorAll("img")[1].setAttribute("src",imagesource2);

if(imagenumber1>imagenumber2){
document.querySelector("h1").innerHTML=" 🚩 Player 1 is Winner";
var winner=new Audio("Sounds/winner.mp3")
winner.play()
}
else if(imagenumber1<imagenumber2){
    document.querySelector("h1").innerHTML=" 🚩 Player 2 is Winner";
}
else 
{
    document.querySelector("h1").innerHTML="Draw";
}


