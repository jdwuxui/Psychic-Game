  
$(document).ready(function() {

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9; 
    var playerGuesses = [];

    // Create variables to hold references to HTML
    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var playerGuesses = document.getElementById("player-guesses-list");

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    function restartGame() {
      guessesLeft = 9;
      playerGuesses = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      console.log(event);

      // Determines which key was pressed.
      var userGuess = event.key;
      console.log("userGuess " + userGuess);

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      console.log("computer guess " + computerGuess);

      // Determine win, loss, or guesses and update counters
      if (userGuess === computerGuess) {
        wins++; 
        restartGame();
        } else if (guessesLeft < 1) {
          losses++;
          restartGame();
        } else {
          guessesLeft--;
          function myFunction() {
          playerGuesses.push(userGuess);
          }
        }
      }
        // Hide the directions
        directionsText.textContent = "";

        // Display stats
        userChoiceText.textContent = "You Chose: " + userGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        playerGuesses.textContent = "Guesses Left: " + guessesLeft; 
    }
