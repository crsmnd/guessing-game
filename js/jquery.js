// QUESTION: Where should jquery code go?
// Into the html, js or a seperate file (like here)?
// Does the guessNo function below belong to jquery or js code?

$(document).ready(function() {
	$("#go").on("click", guessNo);
	$(document).keypress(function(event) {
		if (event.which == 13) {
			guessNo();		
		}
	});
	$("#want-hint").on("click", function() {
		if (hints === false && guessesLeft > 0) {	
			getHint();	
		}	
	});
	$("#again").on("click", function() {
		newGame();
	});
});

function guessNo() {	
	guess = +$("#user-guess").val();	
	$("#user-guess").val("");
	if (isNaN(guess)) {
		alert("Please enter a number!");
	} else if(guess > 100 || guess < 1 || (guess % 1 !== 0)) {
		alert("Please enter a full number between 1 and 100!");
	} else if (guesses.indexOf(guess) > -1) {
		alert("You already tried this number. Please try a different number");
	} else {
		guessesLeft -= 1;
		if (guess === no) {
			modalRemove();	
			$(".modal-content").append("<img src='http://data1.whicdn.com/images/65999238/large.gif' style='background-size: contain; display: block; width: 500px; height: 342px;'>");
			$("#myModal").modal("show");	
			newGame();			
		} else if (guessesLeft > 0) {	
			$("#feedback-comment").text(feedback());
			$("#guess-history").append("<p class='past-guess'>"+guesses[0]+" "+progress()+"</p>")
		} else {
			modalRemove();
			var text = "Game over! The number was " + no + ". Try harder!";
			var lostString = "<img src='http://img.playground.ru/images/2/2/picard-double-facepalm-gif-5917.gif' style='display: block; width: 500px; height: 342px;'><span id='overlay-text'>" + text + "</span>";
			$(".modal-content").append(lostString);
			$("#myModal").modal("show");
			newGame();	
	 	}
	}
}

function modalRemove() {
		$(".modal-content").find("img").remove();
		$(".modal-content").find("span").remove();	
}

function newGame() {
	$(".past-guess").remove();
	$("#feedback-comment").text("New game, new luck! You have 5 guesses...");
	initialize();
}

function progress() {
	if (guesses[1] == undefined) {
		return "";
	} else if (Math.abs(no - guess) < Math.abs(no - guesses[1])) {
		return "(Hotter)";
	} else {
		return "(Colder)";
	}
}