let playerOneRoll = true;

let playerOneScore = 0;

let playerTwoScore = 0;

let randomRoll;



let diceRoll = () =>{
    randomRoll = Math.floor((Math.random() * 6) +1);
    console.log(randomRoll)
}



const playerTurn = () => {
    diceRoll()
    
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
        console.log(playerOneRoll)
        console.log(`Player two score: ${playerTwoScore}`)
    }
 
}

playerTurn();
playerTurn();
playerTurn();
playerTurn();
playerTurn();





