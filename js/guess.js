// Game set up
initialize(); 

// QUESTION: is it clean to initialize global variables within a helper function rather than in the main body of the code?

// Principal game function
function feedback() {		
	guesses.unshift(guess);	
	var distance = guess - no;
	var absDist = Math.abs(distance);
	var help = "You are ";
	if (absDist > 30) {
		help += "Ice Cold";
	} else if (absDist > 20) {
		help += "Cold";
	} else if (absDist >15) {
		help += "Cool";
	} else if (absDist >10) {
		help += "Warm";
	} else if (absDist > 5) {
		help += "Hot";
	} else if (absDist > 0) {
		help += "Very Hot";
	} else {
		help += "done after " + (5 - guessesLeft) + " guess(es)! Congratulations!";
		guessesLeft = 0;
		return help;
	}
	help += ", Guess ";
	if (distance > 0) {
		help += "Lower! ";
	} else if (distance < 0) {
		help += "Higher! ";
	}
	help += guessesLeft + " guess(es) remaining..."
	// console.log(no, guess, guessesLeft, guesses, help);
	return help;
}


// Helper functions

function initialize() {
	no = Math.floor(Math.random()*100)+1;
	guessesLeft = 5; // no of guess left
	hints = false; // no hint given yet
	guess = null;
	guesses = [];
}

function getHint() {
// A hint is not providing the answer
// The user will get a close range as a hint instead
// He will be provided the answer once he runs out of guesses
	if (guessesLeft === 5) {
		alert("Come on! Give it at least 1 try.");
		return;
	} else {
		var div = Math.floor(Math.random()*10);
		var hintHi = no + div;
		var hintLo = hintHi - 10;
		if (hintLo < 0) {
			hintLo = 1;
			hintHi = 10;
		} else if (hintHi > 100) {
			hintHi = 100;
			hintLo = 90;
		}
		hints = true;
		alert("The number is between " + hintLo + " and " + hintHi +".");
	}
}



