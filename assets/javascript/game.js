  // Create array of letters.
  var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(letterArray); 

  // Create a Counter

  // Begin Wins: 0 

  // Begin Losses: 0
  
  // Begin Guesses Left: 9

  // begin Your Guesses: empty

  // Let the Computer pick a letter. 
  var comPick = targetLetter[Math.floor(Math.random() * letterArray.length)]; 
    
  // Create var to hold Computer pick.

    // Run when Player presses a key
    document.onkeyup = function(event) { 
      var playerLetter = event.key;
    }
 



  // Run when Player presses a key 
  var playerGuess = (event(document.keyUp));

  // Create var to hold Player letter guess.
  var playerLetter = (event);

  // Record the numbers of guesses

  // If playerGuess matches comChoice
  if (playerLetter === comLetter) 
  
  Add 1pt to WINS count 
  
  Reset Guesses Left to 9 

  Reset Your Guesses to be blank

// If playerGuess does NOT matche comChoice

  -1 from GUESSES LEFT if < 9 
  unless same letter is pressed
  
  List playerGuess in Your Guesses 


// While there are still letters to be guessed