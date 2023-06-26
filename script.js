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
        } //end of if statement
} //end of playRound()






function game(){

    for(let i = 1; i <= 5; i++){
        let player = prompt("Enter hand gesture: ", '');
        let computer = getComputerChoice();

        if(!(player === 'rock' || player === 'paper' || player === 'scissors')){
            console.log("**Invalid hand gesture, enter again.**");
            console.log("");
            i--;
        } else{
            console.log("Game " + i);
            console.log(playRound(player, computer));
            console.log("Player = " + player);
            console.log("Computer = " + computer);
            console.log("");
        }

    }
    
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    if(playerScore === computerScore){
        return "Wow! It's a draw!";
    } else if(playerScore > computerScore){
        return "You win the game of 5!";
    } else if(playerScore < computerScore){
        return "You lose the game of 5!";
    }
}

console.log(game())






