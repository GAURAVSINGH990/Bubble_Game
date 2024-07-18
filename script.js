var timer = 5;
var score  = 0;
var hitRN = 0;


function increaseScore(){
    score +=10
    document.getElementById('scoreAdd').textContent = score
}

function makeBubble(){
    var clutter = ""

    for(var  i =1 ; i<=198; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.getElementById('pbtm').innerHTML = clutter
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
        timer--
        document.getElementById('timerValue').textContent = timer
        }else{
            document.getElementById('pbtm').innerHTML = "<h1>Time Finish</h1>"
            clearInterval(timerInt)
        }
    },1000)
}

function getNewHit(){
    hitRN = Math.floor(Math.random()*10)
    document.getElementById('hitValue').textContent = hitRN
}

document.getElementById('pbtm').addEventListener('click', function(details){
    var clickedNumber = (Number(details.target.textContent)) //-- 'target' esse pta chlega kis bubble p e click kiye hai--
    if(clickedNumber==hitRN){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
