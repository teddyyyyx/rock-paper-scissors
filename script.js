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
    }

    // console.log(handValue);
    return handValue;
}




function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "This is a Stalemate!";  
    } 
        else if(playerSelection == 'rock'){
            if(computerSelection == 'scissors'){
                return ("You win! " + playerSelection + " beats " + computerSelection);
            } else if(computerSelection == 'paper'){
                return("You lose, " + computerSelection + " beats " + playerSelection);
                }
        }
        else if(playerSelection == 'paper'){
            if(computerSelection == 'rock'){
                return ("You win! " + playerSelection + "  beats " + computerSelection);
            } else if(computerSelection == 'scissors'){
                return("You lose, " + computerSelection + " beats " + playerSelection);
            }
        }
        else if(playerSelection == 'scissors'){
            if(computerSelection == 'paper'){
                return ("You win! " + playerSelection + " beats " + computerSelection);
            } else if(computerSelection == 'rock'){
                return("You lose, " + computerSelection + " beats " + playerSelection);

            }
        }
    // console.log(computerSelection);
    // console.log(playerSelection);
}


// console.log(playRound("Rock", getComputerChoice()));

// console.log("Computer = " + getComputerChoice());

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
console.log("Player = " + playerSelection);
console.log("Computer = " + computerSelection);

