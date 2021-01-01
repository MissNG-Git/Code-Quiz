// Run function on page load
loadScores();

// Create Leaderboard from local storage data
function loadScores() {
    // Get savedScores from localStorage; set to empty array if none
    var leaderBoard = JSON.parse(window.localStorage.getItem("savedScores")) || [];
    // Sort leaderboard by high score
    // SHORTHAND (ES6 only) -- leaderBoard.sort((a, b) => b.score - a.score);
    leaderBoard.sort(function compare(a, b) {
        if(a.score < b.score) return 1;
        if(a.score > b.score) return -1;
        return 0;
    });
    // Loop through EACH object in leaderBoard array, create li within ol
    leaderBoard.forEach(function(score) {
        var liEl = document.createElement("li");
        liEl.textContent = score.initials + " . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . " + score.score;
        liEl.setAttribute("id", "scoreItem");
        var olEl = document.getElementById("savedScores");
        olEl.appendChild(liEl);
        console.log(liEl);
        console.log(olEl);
    });
    console.log(leaderBoard);
}

// "click" eventListener to clear Leaderboard
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function() {
    window.localStorage.removeItem("savedScores");
    window.location.reload();
});

// "click" eventListener to restart quiz (go Home)
var restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});
