let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn");
const winnerText = document.getElementById('winnerText');
const restartBtn = document.getElementById('restartBtn');
const playerText = document.getElementById('playerText');
const computerText = document.getElementById('computerText');
const resultText = document.getElementById('resultText');
const pScoreText = document.getElementById('pScoreText');
const cScoreText = document.getElementById('cScoreText');
const mainDiv = document.querySelector('.mainDiv');
const mainChild = mainDiv.children;

// Function for getting 3 possible random hand sign
function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    let handValue;
    // console.log(randomValue);

    switch(randomValue){
        case 0: 
            handValue = "Rock";
            break;
        
        case 1:
            handValue = "Paper";
            break;
        
        case 2:
            handValue = "Scissors";
            break;
    } //end of switch statement

    return handValue;
} //end of getComputerChoice()


// compares player choice and computer choice 
function playRound(playerChoice){
    playerSelection = playerChoice.toLowerCase();
    computerSelection = getComputerChoice().toLocaleLowerCase();

    
    playerText.innerHTML = `You choose: ${playerSelection}`;
    computerText.innerHTML = `Computer choose: ${computerSelection}`;

    if(playerSelection === computerSelection){
          resultText.innerHTML = "This is a Stalemate!";  
    } 
        else if(playerSelection == 'rock'){
            if(computerSelection == 'scissors'){
                playerScore += 1;
                resultText.innerHTML = ("You win! " + playerSelection + " beats " + computerSelection);
            } else if(computerSelection == 'paper'){
                computerScore += 1;
                resultText.innerHTML = ("You lose, " + computerSelection + " beats " + playerSelection);
                }
        }
        else if(playerSelection == 'paper'){
            if(computerSelection == 'rock'){
                playerScore += 1;
                resultText.innerHTML = ("You win! " + playerSelection + "  beats " + computerSelection);
            } else if(computerSelection == 'scissors'){
                computerScore += 1;
                resultText.innerHTML = ("You lose, " + computerSelection + " beats " + playerSelection);
            }
        }
        else if(playerSelection == 'scissors'){
            if(computerSelection == 'paper'){
                playerScore += 1;
                resultText.innerHTML = ("You win! " + playerSelection + " beats " + computerSelection);
            } else if(computerSelection == 'rock'){
                computerScore += 1;
                resultText.innerHTML = ("You lose, " + computerSelection + " beats " + playerSelection);

            }
        } //end of 'if statement'


        pScoreText.innerHTML = `Player Score: ${playerScore}`;
        cScoreText.innerHTML = `Computer Score: ${computerScore}`;    
} //end of playRound()



// Function for the game of 5, winner/loser logic
function game(){

    if(playerScore == 5){
        disableButtons();
        winnerText.innerHTML = ("You win by 5!");
        winnerText.style.display = "block";
        restartBtn.style.display = "block";
    } else if(computerScore == 5){
        disableButtons();
        winnerText.innerHTML = ("Computer wins by 5");
        winnerText.style.display = "block";
        restartBtn.style.display = "block";
    } else {
        restartBtn.style.display = "none";
        // winnerText.style.display = "none";
    }

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);    
} // end of function game()



// Function to disable buttons, called when player/computer wins 
function disableButtons(){
    buttons.forEach(btn => {
        btn.disabled = true;
    })
} // end of function disableButtons()

// Function to restart the game, called once the game ends
function restartGame(){
   buttons.forEach(btn => btn.disabled = false)
    playerScore = 0;
    computerScore = 0;
    console.log(playerScore);
    winnerText.style.display = "none";

    restartBtn.style.display = "none";

    for(let i = 0; i < mainChild.length; i++){
        mainChild[i].style.display = "none";
    }

} // end of function restartGame()

restartBtn.addEventListener("click", restartGame);



buttons.forEach(button => { 
    button.addEventListener("click", function(){
        playRound(button.value);
        game();

        for(let i = 0; i < mainChild.length; i++){
            mainChild[i].style.display = "block";
        }
        
        // playRound(event.target.innerText.toLowerCase());
        // console.log(event.target.innerText.toLowerCase());
    })

})









// restartBtn.addEventListener("click", function(){
//     buttons.forEach(btn =>{
//         btn.disabled = false;
//         playerScore = 0;
//         computerScore = 0;
//         console.log(playerScore);

//     })
// });
