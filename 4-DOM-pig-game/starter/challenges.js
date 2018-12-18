/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

// select dice roll event
btn = () => {
  if (gamePlaying){
    // 1. Generate random number
    let dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display result
    let diceDOM = document.querySelector('.dice')
    // show dice
    diceDOM.style.display = 'block';
    diceDOM.src = `dice-${dice}.png`;
    // 3. Update the round score IF result !== 1
    if (dice === 6 && lastDice === 6){
      // Player loses scores
      scores[activePlayer] = 0;
      // Update DOM
      document.querySelector(`#score-${activePlayer}`).textContent = '0';
      nextPlayer();
    } else if (dice !== 1){
      // add score
      roundScore += dice;
      document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
      nextPlayer();
    }

    lastDice = dice;
  }
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn); // pass action and callback function
document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying){
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    // Update UI
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

    // Give player option to define winning score
    var input = document.querySelector('.final-score').value;
    var winningScore;

    if (input){
      winningScore = input;
    } else {
      winningScore = 100;
    }
    // Check if player won the game
      if (scores[activePlayer] >= winningScore){
        document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
        gamePlaying = false;
      } else {
        // Next player
        nextPlayer();
      }
    }
});

function nextPlayer(){
  // next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  // resets current score to 0
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // bolds current player
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // hides dice when player toggles
  document.querySelector('.dice').style.display = 'none';
}

// New game
document.querySelector('.btn-new').addEventListener('click', init)

function init(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  // initially hide dice
  document.querySelector('.dice').style.display = 'none';
  // set initial values to 0
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

};