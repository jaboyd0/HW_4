
var timer = document.querySelector("#timer")
var questionNumber = document.querySelector("#questionNumber")
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
var currentScore = document.querySelector("#currentScore")
var button = document.querySelector("#button")

var score = 0
var scoreHistory
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

function addButton1() {
    var button1 = document.createElement("button")
    button1.id = "button1"
    button1.class = "btn btn-primary"
    button1.innerText = "Button A"
    answers.appendChild(button1)
}
function addButton2() {
    var button2 = document.createElement("button")
    button2.id = "button2"
    button2.class = "btn btn-primary"
    button2.innerText = "Button B"
    answers.appendChild(button2)
}
function addButton3() {
    var button3 = document.createElement("button")
    button3.id = "button3"
    button3.class = "btn btn-primary"
    button3.innerText = "Button C"
    answers.appendChild(button3)
}
function addButton4() {
    var button4 = document.createElement("button")
    button4.id = "button4"
    button4.class = "btn btn-primary"
    button4.innerText = "Button D"
    answers.appendChild(button4)
}

function inportQuestions () {
    console.log(quizQuestions[i].question)
    question.textContent=quizQuestions[i].question
    document.getElementById("button1").innerText=quizQuestions[i].respOptions[0]
    document.getElementById("button2").innerText=quizQuestions[i].respOptions[1]
    document.getElementById("button3").innerText=quizQuestions[i].respOptions[2]
    document.getElementById("button4").innerText=quizQuestions[i].respOptions[3]
}

var secondsLeft = 50;
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = ` ${secondsLeft} seconds`;
        if (secondsLeft <= 0 || quizOver) {
            // if (scoreHistory.length !== 0) {
            //     document.getElementById("view-scores").removeAttribute("disabled");
            // }
            timer.textContent = "";
            clearInterval(timerInterval);
            endOfQuiz();
        }
    }, 1000);
}


function quiz() {

    answers.innerHTML = "";

    addButton1()
    addButton2()
    addButton3()
    addButton4()

    setTime()

    for (i = 0; i < quizQuestions.length; i++) {
     
        inportQuestions()
        

      }
    

}

// document.getElementById("button").addEventListener("click", Quiz() 
    
//   );

button.addEventListener("click", quiz);







// not being used
    // var questions = [
    //   { q: "The sky is blue.", a: "t" },
    //   { q: "There are 365 days in a year.", a: "t" },
    //   { q: "There are 42 ounces in a pound.", a: "f" },
    //   { q: "The Declaration of Independence was created in 1745.", a: "f" },
    //   { q: "Bananas are vegetables.", a: "f" }
    // ];

    // var score = 0;

 
    // for (var i = 0; i < questions.length; i++) {
    //   // Display current question to user and ask OK/Cancel
    //   var answer = confirm(questions[i].q);

    //   // Compare answers
    //   if ((answer === true && questions[i].a === "t") ||
    //     (answer === false && questions[i].a === "f")) {
    //     // Increase score
    //     score++;
    //     alert("Correct!");
    //   }
    //   else {
    //     alert("Wrong!");
    //   }
    // }

    // alert("You got " + score + "/" + questions.length);
