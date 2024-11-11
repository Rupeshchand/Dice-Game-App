// Getting all the required elements
const newGameBtn = document.querySelector('.btn--new');
const rollBtn =  document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const img = document.querySelector('.dice');
const playerOneScore = document.querySelector('#score--0');
const playerOneCurrentScore = document.querySelector('#current--0');
const playerTwoScore = document.querySelector('#score--1');
const playerTwoCurrentScore = document.querySelector('#current--1');
const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");
let currentScore = 0;
let currentPlayer = 0;
let totalScores = [0,0]

//when we roll dice dice should be rolled randomly and scored should be added to respective player and if the score is 1 then the player should switch
rollBtn.addEventListener("click",()=>{
    //generating some random number
    const diceRoll = Math.floor(Math.random()*6)+1;
    // console.log(diceRoll);
    //adding that random num in src
    img.src = `./images/dice-${diceRoll}.png`;
    if(diceRoll == 1){
        document.querySelector(`#current--${currentPlayer}`).textContent = 0;
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        currentScore = 0;
        playerOne.classList.toggle("player--active");
        playerTwo.classList.toggle("player--active")
    }
    else{
        currentScore += diceRoll;
        // playerOneCurrentScore.textContent = diceRoll;
        document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;
    }
})

//user clicks on hold btn current score should be added to total score
holdBtn.addEventListener("click",()=>{
    totalScores[currentPlayer] += currentScore;
    // console.log(totalScores);
    document.querySelector(`#score--${currentPlayer}`).textContent = totalScores[currentPlayer];
    
    if(totalScores[currentPlayer]>=20){
        document.querySelector(`.player--${currentPlayer}`).style.backgroundColor = "black";
        document.querySelector(`.player--${currentPlayer}`).classList.add("player-wins");
        rollBtn.disabled = true;
        holdBtn.disabled = true;
        document.querySelector(`.player--${currentPlayer}`).textContent = "I won the game";
        document.querySelector(`.player--${currentPlayer}`).textContent.style.color = "white"
    }
    else{
        currentScore = 0;
        document.querySelector(`#current--${currentPlayer}`).textContent = 0;
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        playerOne.classList.toggle("player--active");
        playerTwo.classList.toggle("player--active");
    }
})
// resetting the entire game and player 1 as current player
newGameBtn.addEventListener("click",()=>{
    currentScore = 0;
    currentPlayer = 0;
    totalScores = [0,0]
    playerOneScore.textContent = "0";
    playerTwoScore.textContent = "0";
    playerOneCurrentScore.textContent = "0";
    playerTwoCurrentScore.textContent = "0";
    playerOne.style.backgroundColor = "";
    playerTwo.style.backgroundColor = "";
    playerOne.classList.add('player--active')

    rollBtn.disabled = false;
    holdBtn.disabled = false;
})






