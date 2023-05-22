const myArr = ["Rock", "Paper", "Scissors"];

let computer = Math.floor(Math.random() * 3);   /* floor to round down, and to make it into interger, in this case, random interger between 0 and 2 */
let player = Math.floor(Math.random() * 3);
let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " ";


/* Check win/lose/tie condition */
if (computer === player) {
  message += "It's a tie!";
} else if (
  (computer === 0 && player === 2) || 
  (computer === 1 && player === 0) || 
  (computer === 2 && player === 1)
) {
  message += "Computer wins!";
} else {
  message += "Player wins!";
}

console.log(message);
