// Declare variables for score & timer

// Create Leaderboard from local storage data; sort by high score


// "click" eventListener to clear Leaderboard
var clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", function() {
    window.localStorage.removeItem("savedScores");
    window.location.reload();
});

// "click" eventListener to restart quiz (go Home)
var restartBtn = document.getElementById("restart")
restartBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});
