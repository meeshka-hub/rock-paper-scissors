const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getComputerChoice = () => {
    const number = getRandomInt(1, 3)
    switch (number) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default: 
            return 'Not a valid number';
    }
};

const getHumanChoice = () => {
    return prompt("Please enter choice:");
};

const isWinner = (user, comp) => {
    return ( user === 'rock' && comp === 'scissors' )
        || ( user === 'paper' && comp === 'rock' )
        || ( user === 'scissors' && comp === 'paper');
};

const playGame = () => {
    let humanScore = 0;
    let compScore = 0;

    const playRound = (userChoice, compChoice) => {
        const user = userChoice.toLowerCase();
        const comp = compChoice.toLowerCase();
    
        if ( user === comp) {
            console.log(`Tie! Points for both!`);
        } else if ( isWinner(userChoice, compChoice) ) {
            console.log(`You win! ${user} beats ${comp}`);
            humanScore++;
        } else {
            console.log(`You lose! ${comp} beats ${user}`);
            compScore++;
        }
    };

    for( i = 0; i < 5; i++ ) {
        const userChoice = getHumanChoice();
        const compChoice = getComputerChoice();
    
        playRound(userChoice, compChoice); 
    }
};

const main = () => {
    playGame();
};

module.exports = {
    main
}