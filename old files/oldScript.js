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


let playerScore = 0
let computerScore = 0

// Function for playRound(), The Game Logic
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "This is a Stalemate!";  
    } 
        else if(playerSelection == 'rock'){
            if(computerSelection == 'scissors'){
                playerScore += 1;
                return ("You win! " + playerSelection + " beats " + computerSelection);
            } else if(computerSelection == 'paper'){
                computerScore += 1;
                return("You lose, " + computerSelection + " beats " + playerSelection);
                }
        }
        else if(playerSelection == 'paper'){
            if(computerSelection == 'rock'){
                playerScore += 1;
                return ("You win! " + playerSelection + "  beats " + computerSelection);
            } else if(computerSelection == 'scissors'){
                computerScore += 1;
                return("You lose, " + computerSelection + " beats " + playerSelection);
            }
        }
        else if(playerSelection == 'scissors'){
            if(computerSelection == 'paper'){
                playerScore += 1;
                return ("You win! " + playerSelection + " beats " + computerSelection);
            } else if(computerSelection == 'rock'){
                computerScore += 1;
                return("You lose, " + computerSelection + " beats " + playerSelection);

            }
        } //end of 'if statement'
} //end of playRound()





// Function for the game of 5, winner/loser logic
function game(){
    for(let i = 1; i <= 5; i++){
        let playerChoice = prompt("Enter hand gesture: ", '');
        let computerChoice = getComputerChoice();

        if(!(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors')){
            console.log("**Invalid hand gesture, enter again.**");
            console.log("");
            i--;
        } else{
            console.log("Game " + i);
            console.log(playRound(playerChoice, computerChoice));
            console.log("Player = " + playerChoice);
            console.log("Computer = " + computerChoice);
            console.log("");
        }
    }// end of 'for loop'
    
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    // Logic for winner/loser
    if(playerScore === computerScore){
        return "Wow! It's a draw!";
    } else if(playerScore > computerScore){
        return "You win the game of 5!";
    } else if(playerScore < computerScore){
        return "You lose the game of 5!";
    } // end of 'if statement'
}

// console.log(game())

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        playRound(button.value.toLowerCase());
    })
})




