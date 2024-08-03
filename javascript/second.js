let gameNum = 100;
let userNum = prompt("Enter the number");

while (userNum != gameNum) {
  userNum = prompt("You entered the wrong number. Guess again");
}
console.log("You entered the right number");
