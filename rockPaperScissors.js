const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Won!';
        } else {
            return 'You won!';
        };
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        };
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'The computer won!';
            } else {
                return 'You won!';
            }
        }
    }
}
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
