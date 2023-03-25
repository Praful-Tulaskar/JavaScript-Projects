let game = document.getElementById('game');
const gap = document.getElementById('gap');
let result = document.getElementById('result');
let text = document.getElementById('text');
var score = 0;
var jumping = 0;

gap.addEventListener("animationiteration", hole)

function hole() {
    let random = -((Math.random() * 350) + 150);
    gap.style.top = random + "px";
    score++;
}


// Fall

let fall = setInterval(function() {
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0){
        bird.style.top = (birdTop + 2) + "px";
    }

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
    var gTop = (500 + gapTop);
    if((birdTop > 465) || ((blockLeft < 50 ) && (blockLeft > -50) && ((birdTop < gTop) || (birdTop > gTop + 100)))){
        
        result.style.display = "block";
        text.innerText = `Score : ${score}`;

        game.style.display = "none";
        // score = 0;

    }
},10)



// Jump

function jump() {
    jumping = 1;
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    if(birdTop > 6){
        bird.style.top = (birdTop - 60) + "px";
    }

    setTimeout(function(){
        jumping = 0;
    }, 100)
}

window.addEventListener("keydown",jump)