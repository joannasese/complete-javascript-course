/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores  = [0,0];
let roundScore = 0;
let activePlayer = 0;

// initially hide dice
document.querySelector('.dice').style.display = 'none';
// set initial values to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// select dice roll event
btn = () => {
  // 1. Generate random number
  let dice = Math.floor(Math.random() * 6) + 1;
  // 2. Display result
  let diceDOM = document.querySelector('.dice')
  // show dice
  diceDOM.style.display = 'block';
  diceDOM.src = `dice-${dice}.png`;
  // 3. Update the round score IF result !== 1
  if (dice !== 1){
    // add score
    roundScore += dice;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}</em>`;

  } else {
    // next player
  }
}

document.querySelector('.btn-roll').addEventListener('click', btn); // pass action and callback function
