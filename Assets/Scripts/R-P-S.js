const userName= document.querySelector('#userName');
const startBtn = document.querySelector('#startBtn');
const gameShow = document.querySelector('#gameBlk');
const scoreBoard = document.querySelector('.scores');
const choice = document.querySelector('.images');
const restatBtn = document.querySelector('#restartBtn');
const result =document.querySelector('#result');
const modal = document.querySelector('.modal');

let scores ={player : 0, computer : 0};




function validateUser(){
    if (userName.value.trim() === ""){
        alert("Enter Name to Start the Game");
        userName.focus();
    }
    else{
        console.log("welcome "+userName.value);
        userName.style.display='none';
        startBtn.style.display='none';
        gameShow.style.display='block';
        scoreBoard.innerHTML=`<p>${userName.value} : ${scores.player}</p><p>Computer : ${scores.computer}</p>`;
        choice.addEventListener('click',playGame);
    }
}


function playGame(e){
    const playerChoice = e.target.getAttribute('alt');
    const computerChoice = getComputerChoice();
    console.log("Player :"+playerChoice);
    console.log("computer :"+computerChoice);
    if(playerChoice === computerChoice){
        console.log("draw");
        result.innerHTML = `
      <h1 class="text-win">It's a Draw</h1>
      <img id="rock" class="choice" src="Assets/images/${computerChoice}.jpg" alt="rock"  width="150">
      <p>Computer Chose <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>`;
      modal.style.display = "block";
    }
    else if(playerChoice === 'rock'){
        if(computerChoice === 'scissor'){
            console.log("player Won");
            scores.player++;
            scoreBoard.innerHTML=`<p>${userName.value} : ${scores.player}</p><p>Computer : ${scores.computer}</p>`;
            result.innerHTML = `
      <h1 class="text-win">You Won</h1>
      <img id="rock" class="choice" src="Assets/images/${computerChoice}.jpg" alt="rock"  width="150">
      <p>Computer Chose <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>`;
      modal.style.display = "block";
            
        }
        else{
            console.log("computer Won");
            scores.computer++;
            scoreBoard.innerHTML=`<p>${userName.value} : ${scores.player}</p><p>Computer : ${scores.computer}</p>`;
            result.innerHTML = `
            <h1 class="text-win">You Lose</h1>
            <img id="rock" class="choice" src="Assets/images/${computerChoice}.jpg" alt="rock"  width="150">
            <p>Computer Chose <strong>${
                computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
            }</strong></p>`;
            modal.style.display = "block";
        }
    }
    else if(playerChoice === 'paper'){
        if (computerChoice === 'rock'){
            console.log("player Won");
            scores.player++;
            scoreBoard.innerHTML=`<p>${userName.value} : ${scores.player}</p><p>Computer : ${scores.computer}</p>`;
            result.innerHTML = `
            <h1 class="text-win">You Won</h1>
            <img id="rock" class="choice" src="Assets/images/${computerChoice}.jpg" alt="rock"  width="150">
            <p>Computer Chose <strong>${
                computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
            }</strong></p>`;
            modal.style.display = "block";
        }
        else{
            console.log("computer Won");
            scores.computer++;
            scoreBoard.innerHTML=`<p>${userName.value} : ${scores.player}</p><p>Computer : ${scores.computer}</p>`;
            result.innerHTML = `
                <h1 class="text-win">You Lose</h1>
                <img id="rock" class="choice" src="Assets/images/${computerChoice}.jpg" alt="rock"  width="150">
                <p>Computer Chose <strong>${
                    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
                }</strong></p>`;
                modal.style.display = "block";
        }

    }
    else{
        if (computerChoice === 'paper'){
            console.log("player Won");
            scores.player++;
            scoreBoard.innerHTML=`<p>${userName.value} : ${scores.player}</p><p>Computer : ${scores.computer}</p>`;
            result.innerHTML = `
                <h1 class="text-win">You Won</h1>
                <img id="rock" class="choice" src="Assets/images/${computerChoice}.jpg" alt="rock"  width="150">
                <p>Computer Chose <strong>${
                    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
                }</strong></p>`;
                modal.style.display = "block";
        }
        else{
            console.log("computer Won");
            scores.computer++;
            scoreBoard.innerHTML=`<p>${userName.value} : ${scores.player}</p><p>Computer : ${scores.computer}</p>`;
            result.innerHTML = `
                <h1 class="text-win">You Lose</h1>
                <img id="rock" class="choice" src="Assets/images/${computerChoice}.jpg" alt="rock"  width="150">
                <p>Computer Chose <strong>${
                    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
                }</strong></p>`;
                modal.style.display = "block";
        }

    }

    

}

function getComputerChoice(){
    let computerOption = Math.floor(Math.random()*3);
    if(computerOption === 0){
        return 'rock';
    }
    else if(computerOption === 1){
        return 'paper';
    }
    else{
        return 'scissor';
    }
    
}

function restartGame(){
    scores.player=0;
    scores.computer=0;
    userName.style.display='block';
    startBtn.style.display='block';
    gameShow.style.display='none';
    userName.value ="";
    userName.focus();

}

function clearModal(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }

window.addEventListener("click", clearModal);


restatBtn.addEventListener('click',restartGame)
startBtn.addEventListener('click',validateUser);