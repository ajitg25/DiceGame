
function getval(){
    var a = Math.random();
    a = (Math.floor(a*6))+1;
    return a;
}
var val1 = getval();
var val2 = getval();

// {/* <button onclick="myFunction()">Add Class</button> */}
 
const targetimg1 = document.getElementById("im1") 
const targetimg2 = document.getElementById("im2") 

targetimg1.setAttribute("src",`images/dice${val1}.png`);
targetimg2.setAttribute("src",`images/dice${val2}.png`);
console.log(val1);
console.log(val2);
if(val1>val2){
  //const head = document.getElementById("header") 
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";

}
else if(val1==val2){
    document.querySelector("h1").innerHTML = "🚩 DRAW!! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!! 🚩";

}
