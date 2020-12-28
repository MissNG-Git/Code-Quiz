// Create array of objects for questions & answers
var questions = [
    {
        title: "1) Which 1980 Disney film is about an aquatic creature who dreams of becoming human after falling in love with a prince?",
        choices: [
            "A) Fantasia",
            "B) The Little Mermaid",
            "C) Peter Pan",
            "D) Cinderella"
        ],
        answer: "B) The Little Mermaid",
    },
    {
        title: "2) Which 1984 Hayao Miyazaki film about a polluted world is attributed to cementing Miyazaki's reputation as an animator?",
        choices: [
            "A) Ocean Waves",
            "B) Castle in the Sky",
            "C) Porco Rosso",
            "D) Nausicaä of the Valley of the Wind"
        ],
        answer: "D) Nausicaä of the Valley of the Wind",
    },
    {
        title: "3) Which Ubisoft video game series follows an organization with a doctrine that says 'Nothing is Real; Everything is Permitted' and 'We work in the dark to serve the light'?",
        choices: [
            "A) Assassin's Creed",
            "B) Call of Duty",
            "C) Borderlands",
            "D) Fallout",
        ],
        answer: "A) Assassin's Creed",
    },
    {
        title: "4) Released in 1991, which Disney fairy tale set in France follows a bookworm who falls in love with a cursed prince?",
        choices: [
            "A) The Hunchback of Notre Dame",
            "B) Tarzan",
            "C) Beauty and the Beast",
            "D) Shrek"
        ],
        answer: "C) Beauty and the Beast",
    },
    {
        title: "5) Which 1988 Studio Ghibli film follows a pair of young siblings struggling to survive during the final months of World War II?",
        choices: [
            "A) When Marnie was There",
            "B) Arrietty",
            "C) Only Yesterday",
            "D) Grave of the Fireflies"
        ],
        answer: "D) Grave of the Fireflies",
    },
    {
        title: "6) Set in the fantasy world of Spira, which Square Enix video game follows a group of adventurers on their quest to defeat a rampaging monster known as Sin?",
        choices: [
            "A) Final Fantasy",
            "B) Final Fantasy V",
            "C) Final Fantasy X",
            "D) Final Fantasy XV"
        ],
        answer: "C) Final Fantasy X",
    },
    {
        title: "7) Which 1992 Disney film folows a street rat and his pet monkey as they try to thwart the evil plans of a Royal Vizier by enlisting the help of a genie and magic carpet?",
        choices: [
            "A) Aladdin",
            "B) Bambi",
            "C) Dumbo",
            "D) The Jungle Book"
        ],
        answer: "A) Aladdin",
    },
    {
        title: "8) Chihiro, Kohaku, Lin, and Kamaji all work at Yubaba's bathhouse in what Studio Ghibli film?",
        choices: [
            "A) Ponyo",
            "B) Spirited Away",
            "C) Tales from Earthsea",
            "D) Kiki's Delivery Service"
        ],
        answer: "B) Spirited Away",
    },
    {
        title: "9) In which Bungie FPS game series is there a Hunter, Warlock & Titan class to choose from?",
        choices: [
            "A) Destiny",
            "B) Halo",
            "C) Myth",
            "D) Oni"
        ],
        answer: "A) Destiny",
    },
    {
        title: "10) Which well-known Disney movie had the critically acclaimed song titled 'Colors of the Wind'?",
        choices: [
            "A) Alice in Wonderland",
            "B) Pocahontas",
            "C) Toy Story",
            "D) A Bug's Life"
        ],
        answer: "B) Pocahontas",
    },
    {
        title: "11) What Studio Ghibli film is a story about a young village prince involved in the strugge between the forest gods and the humans who consume its resources?",
        choices: [
            "A) The Wind Rises",
            "B) Howl's Moving Castle",
            "C) Princess Mononoke",
            "D) The Cat Returns"
        ],
        answer: "C) Princess Mononoke",
    },
    {
        title: "12) Which racing video game franchise, published by Electronic Arts (EA), has released 24 primary installments and even have a film adaptation of the same name?",
        choices: [
            "A) Mario Kart",
            "B) Forza",
            "C) Gran Turismo",
            "D) Need for Speed"
        ],
        answer: "D) Need for Speed",
    },
    {
        title: "13) Which Disney movie follows a daughter impersonating a man in order to take her father's place to fight a war?",
        choices: [
            "A) Herculas",
            "B) Mulan",
            "C) Aristocats",
            "D) Up"
        ],
        answer: "B) Mulan",
    },
    {
        title: "14) Which Studio Ghibli film features two young daughters and their interactions with friendly wood spirits?",
        choices: [
            "A) Panda! Go Panda!",
            "B) Pom Poko",
            "C) The Red Turtle",
            "D) My Neighbor Totoro"
        ],
        answer: "D) My Neighbor Totoro",
    },
    {
        title: "15) Which music video game features characters like Alice, Baby-Lon, Yuni, Rage, Disco (Afro) & Konsento?",
        choices: [
            "A) Dance Dance Revolution",
            "B) PaRappa the Rapper",
            "C) Dance Central",
            "D) Just Dance"
        ],
        answer: "A) Dance Dance Revolution",
    },
];

// Declare variables
var startBtn = document.querySelector("#startbtn");
var quizTimer = document.querySelector("#timeLeft");
var quizQuestions = document.querySelector("#quizQuestions");
var quizTitle = document.querySelector("#quizTitle");
var quizChoices = document.querySelector("#quizChoices");
var quizComment = document.querySelector("#quizComment");
var quizScore = document.querySelector("#quizScore");
var userInitials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var questionIndex = 0;
var startScore = 0;
var startTime = 180;
var timerId;

// "click" eventListener to trigger timer & quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    // Hide quiz start page
    var quizStartEl = document.getElementById("quizStart");
    console.log(quizStartEl);
    quizStartEl.setAttribute("class", "hide");
    // Unhide questions
    quizQuestions.removeAttribute("class");
    // Display score
    quizScore.textContent = "Score: " + startScore;
    // Display timer
    quizTimer.textContent = "Timer: " + startTime;
    // Start time
    timerId = setInterval(function() {
        startTime--;
        quizTimer.textContent = "Timer: " + startTime;
        if (startTime <= 0) {
        clearInterval(timerId);    
        quizEnd();
        quizTimer.textContent = "TIME'S UP!";
        }
    }, 1000);
    // Render questions to page via fxn
    displayQuestion();
}             

// Function to generate questions
function displayQuestion() {
    // Clear existing data
    quizTitle.innerHTML = "";
    quizChoices.innerHTML = "";

    // Retrieve objects from question array
    var currentQuestion = questions[questionIndex];
    console.log(currentQuestion);
    // Display question titles
    quizTitle.textContent = currentQuestion.title;

    // Retrieve object property 'choices' using forEach()
    currentQuestion.choices.forEach(function(choices) {
        // Turn choices into buttons
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choices);
        // Display question choices as buttons & add "click" eventListener for choice buttons; check in/correct answers function
        choiceBtn.textContent = choices;
        quizChoices.appendChild(choiceBtn).addEventListener("click", checkAnswer);
    });
}

// FIX 'QUIZ COMMENT' MESSAGE PROMPTS!!!
// Function to check answer
function checkAnswer() {
// If, Else function to compare user selection with answer,  display feedback
    // If correct, add score & display msg
    if (this.value === questions[questionIndex].answer) {
        startScore += 5;
        document.getElementById("quizScore").innerHTML = "Score: " + startScore;
        quizComment.textContent = "Whoo-hoo! You were right! 🙌";
        quizComment.style = "color: green";
        setTimeout(function() {
            quizComment.setAttribute("class", "hide");
          }, 3000);
        questionIndex++;
        console.log(questionIndex);
        // Check timer vs continuing quiz
        if (questionIndex >= questions.length) {
            quizEnd();
          } else {
            displayQuestion();
        }
    }
    // Else incorrect, deduct score, deduct time & display msg
    else {
        // Time penalty
        startTime -= 10;
        startScore -= 2;
        document.getElementById("quizScore").innerHTML = "Score: " + startScore;
        quizComment.textContent = "Sorry, that was wrong! 😞";
        quizComment.style = "color: red";
        setTimeout(function() {
            quizComment.setAttribute("class", "hide");
          }, 1800);
        questionIndex++;
        console.log(questionIndex);
        // Check timer vs continuing quiz
        if (questionIndex >= questions.length) {
            quizEnd();
          } else {
            displayQuestion();
        }
    }
}

// Function to end quiz

    // Stop timer
    
  
    // Display quiz finish
    
  
    // Display final score
    
  
    // hide questions section
    

// Display results & score
// User input of initials for Leaderboard
    // Set input parameters (min 3 characters, max 4)

// Submit button w/"click" eventListener
    
    // Store results on Local Storage

// Display Leaderboard
    // Add quizScore to leaderBoard