let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");
let btns = ["yellow", "red", "blue", "green"];

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

document.addEventListener("keypress", () => {
    if (started === false) {
        started = true;
        levelUp();
    }

});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 300);
}
function levelUp() {
    level++;
    userSeq = [];
    h2.innerText = `Level ${level}`;

    let randColor = btns[Math.floor(Math.random() * btns.length)];
    gameSeq.push(randColor);
    console.log(gameSeq)
    let flashBtn = document.querySelector("." + randColor);

    setTimeout(() => {
        btnFlash(flashBtn);
    }, 500);
}
function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 800);
        }
    } else {
       
            
            h2.innerText = " Wrong ans! Press any key to play again";
            h2.style.fontSize="3rem"
            
            gameOver();
     
        
           
       
    }
}

function gameOver() {
    for (let btn of allBtns) {
        btn.classList.remove("userFlash");
    }
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


function btnPress() {
        if (!started) {
        userFlash(this);
        alert("Press any key to start the game!");
        return;
    }
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
