function computerPlay(){
    let a = Math.floor(Math.random() * 3);
    if (a === 0){
        a = "Rock";
        }
    else if (a === 1){
        a = "Paper";
    }
    else {
        a = "Scissors";
    }
return a;
}


function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === "rock"){
        if (computerSelection === "Rock"){
            return `It's a draw! Both chose ${computerSelection}`;
        }
        else if (computerSelection === "Paper"){
            return `You Lose! Computer chose ${computerSelection}`;
        }
        else if (computerSelection === "Scissors"){
            return `You Win! Computer chose ${computerSelection}`;
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "Rock"){
            return `You Win! Computer chose ${computerSelection}`;
        }
        else if (computerSelection === "Paper"){
            return `It's a draw! Both chose ${computerSelection}`;
        }
        else if (computerSelection === "Scissors"){
            return `You Lose! Computer chose ${computerSelection}`;
        }
    }

    else if (playerSelection === "scissors"){
        if (computerSelection === "Rock"){
            return `You Lose! Computer chose ${computerSelection}`;
        }
        else if (computerSelection === "Paper"){
            return `You Win! Computer chose ${computerSelection}`;
        }
        else if (computerSelection === "Scissors"){
            return `It's a Draw! Both chose ${computerSelection}`;
        }
    }
}

function game(){
    let a = prompt("choose your thing",);
    console.log(round(a));
    console.log(round(a));
    console.log(round(a));
    console.log(round(a));
    console.log(round(a));
}