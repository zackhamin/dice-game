let playerOneRoll = true;

let playerOneScore = 0;

let playerTwoScore = 0;

let randomRoll;


let diceRoll = () =>{
    randomRoll = Math.floor((Math.random() * 6) +1);
    console.log(randomRoll)
}
const gameStart = () =>{
    console.log("lets play!")
    diceRoll()
}
gameStart();

const playerTurn = () => {
    diceRoll()
    playerLose();
    
        console.log(playerOneRoll)
    if (playerOneRoll) {
        playerOneScore += randomRoll
        playerOneRoll = false 
        console.log(`The roll was: ${randomRoll}`)
        console.log(`Player one score: ${playerOneScore}`)
    }
    else {
        playerTwoScore += randomRoll
        playerOneRoll = true
        console.log(`The roll was: ${randomRoll}`)
        console.log(`Player two score: ${playerTwoScore}`)
    }
}

const playerLose = () =>{
    if (randomRoll === 1){
        console.log("You rolled 1, you lose!")
        console.log("------------")
        playerOneScore = 0;
        playerTwoScore = 0;
        console.log(playerOneScore);
        gameStart();
    }
}

playerTurn();
playerTurn();
playerTurn();
playerTurn();
playerTurn();





