var timer = 60;
var score = 0;
var hitGen = 0

function makeBubble(){
    var clutter = " ";

for(var i = 1 ; i <= 168 ; i++){
    var  numGenra = Math.floor(Math.random()*10);
    clutter += ` <p class="Bubble">${numGenra}</p>`

}
document.querySelector("#Bottom-bubble").innerHTML = clutter
}


function runTimer(){
var stopperTme = setInterval(function () {
    if(timer > 0){
        timer--;
document.querySelector("#timeVal").innerText = timer

    }else{
        clearInterval(stopperTme)
        document.querySelector("#Bottom-bubble").innerHTML = "Game Over";
    }

} , 1000)
}

function getNewHit(){

    hitGen = Math.floor(Math.random()*10)
document.querySelector("#hitVal").innerText = hitGen
}

function getNewScore(){
  score += 10;
  document.querySelector("#scoreVal").innerText = score;
}


document.querySelector("#Bottom-bubble").addEventListener("click" , (details) => {
var clickNum = Number(details.target.innerText);
if(clickNum === hitGen){
    getNewScore();
    makeBubble();
getNewHit()


}
})


getNewHit()
runTimer()
makeBubble()