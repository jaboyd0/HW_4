
var timer = document.querySelector("#timer")
var questionNumber = document.querySelector("#questionNumber")
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
var currentScore = document.querySelector("#currentScore")
var button = document.querySelector("#button")

var score = 0
var scoreHistory
var secondsLeft
var questionAnswer 

var quizQuestions = [{

    question: "which one is 1?",
    respOptions: [
        "1",
        "2",
        "3",
        "4"
    ],
    answer: "1"
},
{
    question: "which one is 2?",
    respOptions: [
        "1",
        "2",
        "3",
        "4"
    ],
    answer: "2"
}
];

function inportQuestions () {
    

}


function Quiz() {
    

}

button.addEventListener("click", function() {
    Quiz()
  });







// not being used
    var questions = [
      { q: "The sky is blue.", a: "t" },
      { q: "There are 365 days in a year.", a: "t" },
      { q: "There are 42 ounces in a pound.", a: "f" },
      { q: "The Declaration of Independence was created in 1745.", a: "f" },
      { q: "Bananas are vegetables.", a: "f" }
    ];

    var score = 0;

 
    for (var i = 0; i < questions.length; i++) {
      // Display current question to user and ask OK/Cancel
      var answer = confirm(questions[i].q);

      // Compare answers
      if ((answer === true && questions[i].a === "t") ||
        (answer === false && questions[i].a === "f")) {
        // Increase score
        score++;
        alert("Correct!");
      }
      else {
        alert("Wrong!");
      }
    }

    alert("You got " + score + "/" + questions.length);
