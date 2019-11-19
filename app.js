// to allow people to share code... and thoughts...allow

/*

    A plan:

        Dice game logic - two players is the end result.
        We will start with 1. 

        The rules:
            roll a 1, you lose.
            score 21 or higher and you win.

            Whoever gets there first, wins. 

    There are many ways we can tackle it...
        
        Math.Random - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        with floor / ceil...

        We want a dice to roll between 1 & 6. 
        Random Roll function to allow us to do this repeatedly.
        randomRollFunction() {
            // do the roll here with Math.random
        }

        event listener to run the function... NOT the randomRollLogic
        in the event listener, only call the function...

     FIRST. FIRST. FIIIRST  // first - I would look at console.log the number to see if your roll logic works...
        if you see 1, 2, 3, 4, 5, 6 then you are flying. 
        playerScore += randomRoll
        playerScore = playerScore + randomRoll

        Because everytime you roll, you keep the score + whatever you rolled

     SECOND - SECOND - SECOND   IF - (roll = 1) you lose
        IF (score = 21 or higher) you win
        else (crack on, lad.)
        
     THIRD - make it look less shit than it does. CSS / HTML not the code... 
     we will refactor together


*/

let playerOneRoll = true
playerOneScore = 0
playerTwoScore = 0

// which player is rolling?
// if playerOne has just rolled...
// because there are only two players...
// it is either player One's turn or not...
// for two players, the logic below will help you...

const playerTurn = () => {

    if (playerOneRoll) {
        // playerOneScore += roll
        playerOneRoll = false
        playerOneScore ++
        console.log(`Player one score: ${playerOneScore}`)
    }
    else {
        // playerTwoScore += roll
        playerOneRoll = true
        playerTwoScore ++
        console.log(`Player two score: ${playerTwoScore}`)
        console.log(playerOneRoll)
    }

}


playerTurn()
playerTurn()
playerTurn()
playerTurn()
playerTurn()
playerTurn()
playerTurn()
playerTurn()


