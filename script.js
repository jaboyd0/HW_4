
var timer = document.querySelector("#timer")
var questionNumber = document.querySelector("#questionNumber")
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
var currentScore = document.querySelector("#currentScore")
var button = document.querySelector("#button")
var navButtons = document.querySelector("#navButtons")
var initials = document.getElementById("initials")
var scoreChart = document.getElementById("scoreChart")
var pastScores = document.querySelectorAll(".pastScores")

var questionNum = 0
var score = 0
var questionComplete = false
var scoreHistory = [];


function setStorage() {
    localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
}


var quizQuestions = [{

    question: "Inside which HTML element do we put the JavaScript?",
    respOptions: [
        "<script>",
        "<scripting>",
        "<js>",
        "<javascript>"
    ],
    answer: "<script>"
},
{
    question: "Where is the correct place to insert a JavaScript?",
    respOptions: [
        "The <head> section ",
        "Both the <head> section and the <body> section are correct",
        "The <body> section",
        "Any ol place"
    ],
    answer: "Both the <head> section and the <body> section are correct"
},
{
    question: "How do you write 'Hello World' in an alert box?",
    respOptions: [
        "msgBox('Hello World'); ",
        "alertBox('Hello World'); ",
        "alert('Hello World'); ",
        "msg('Hello World');"
    ],
    answer: "alert('Hello World'); "
},
{
    question: "How do you create a function in JavaScript?",
    respOptions: [
        "function myFunction()",
        "function:myFunction()",
        "if i = 5 then",
        "if i = 5"
    ],
    answer: "function myFunction()"
},
{
    question: "How to write an IF statement in JavaScript?",
    respOptions: [
        "if (i == 5)  ",
        "if i == 5 then",
        "function = myFunction()",
        "eh IDK"
    ],
    answer: "if (i == 5)  "
},
{
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    respOptions: [
        "if i =! 5 then",
        "if (i != 5) ",
        "if i <> 5",
        "if (i <> 5)"
    ],
    answer: "if (i != 5) "
},
{
    question: "How does a WHILE loop start?",
    respOptions: [
        "while (i <= 10; i++) ",
        "while i = 1 to 10",
        "while (i <= 10)",
        "eh IDK"
    ],
    answer: "while (i <= 10)"
},
{
    question: "How does a FOR loop start?",
    respOptions: [
        "for (i = 0; i <= 5) ",
        "for (i = 0; i <= 5; i++)",
        "for i = 1 to 5",
        "for (i <= 5; i++)"
    ],
    answer: "for (i = 0; i <= 5; i++)"
},
{
    question: "How can you add a comment in a JavaScript?",
    respOptions: [
        "//This is a comment",
        "<!--This is a comment-->",
        "'This is a comment",
        "eh IDK"
    ],
    answer: "//This is a comment"
},
{
    question: "How do you round the number 7.25, to the nearest integer?",
    respOptions: [
        "rnd(7.25)",
        "Math.rnd(7.25)",
        "Math.round(7.25)",
        "round(7.25)"
    ],
    answer: "Math.round(7.25)"
}
];

function addButton1() {
    var button1 = document.createElement("button")
    button1.id = "button1"
    button1.style.margin = "15px"
    button1.className = "answerButtons btn "
    button1.innerText = "Button A"
    button1.value = quizQuestions[questionNum].respOptions[0]
    answers.appendChild(button1)
}
function addButton2() {
    var button2 = document.createElement("button")
    button2.id = "button2"
    button2.style.margin = "15px"
    button2.className = "answerButtons btn "
    button2.innerText = "Button B"
    button2.value = quizQuestions[questionNum].respOptions[1]
    answers.appendChild(button2)
}
function addButton3() {
    var button3 = document.createElement("button")
    button3.id = "button3"
    button3.style.margin = "15px"
    button3.className = "answerButtons btn "
    button3.innerText = "Button C"
    button3.value = quizQuestions[questionNum].respOptions[2]
    answers.appendChild(button3)
}
function addButton4() {
    var button4 = document.createElement("button")
    button4.id = "button4"
    button4.style.margin = "15px"
    button4.className = "answerButtons btn "
    button4.innerText = "Button D"
    button4.value = quizQuestions[questionNum].respOptions[3]
    answers.appendChild(button4)
}
function addNextButton() {
    var nextButton = document.createElement("button")
    nextButton.id = "nextButton"
    nextButton.className = "btn btn-primary"
    nextButton.innerText = "Next"
    navButtons.appendChild(nextButton)
}

function inportQuestions () {
    question.textContent=quizQuestions[questionNum].question
    document.getElementById("button1").innerText=quizQuestions[questionNum].respOptions[0]
    document.getElementById("button1").value=quizQuestions[questionNum].respOptions[0]

    document.getElementById("button2").innerText=quizQuestions[questionNum].respOptions[1]
    document.getElementById("button2").value=quizQuestions[questionNum].respOptions[1]
    
    document.getElementById("button3").innerText=quizQuestions[questionNum].respOptions[2]
    document.getElementById("button3").value=quizQuestions[questionNum].respOptions[2]

    document.getElementById("button4").innerText=quizQuestions[questionNum].respOptions[3]
    document.getElementById("button4").value=quizQuestions[questionNum].respOptions[3]

    var displayquestnum = questionNum + 1
    questionNumber.innerText = "Question Number " + displayquestnum + " -10"
    return
}

var secondsLeft = 120;
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = ` ${secondsLeft} seconds`;
        if (secondsLeft <= 0 ) {
            timer.textContent = "";
            clearInterval(timerInterval);
            endOfQuiz();
        }}
    , 1000);
}

function correctAnswer() {
    if (questionComplete == false){
    questionComplete = true
    score ++
    document.getElementById("currentScore").innerText = score
    document.getElementById("result").innerText = "Correct Answer!"
}
else{return}

}

function wrongAnswer() {
    if (questionComplete == false){
    questionComplete = true
    score 
    secondsLeft = secondsLeft - 10
    document.getElementById("currentScore").innerText = score
    document.getElementById("result").innerText = "You got it wrong."
}
else{return}
}

function nextQuestion() {
    questionNum ++
    questionComplete= false
    if (questionNum!==quizQuestions.length){
    inportQuestions()
    document.getElementById("result").innerText = ""
    return
}
else{endOfQuiz()}
}

function buttonMechanics() {
    
        $("#button1").click(function() {
            console.log(this.getAttribute("value"));
            if (this.getAttribute("value")==quizQuestions[questionNum].answer) {
                console.log("correct answer")
                correctAnswer()
                return
        } else {
            console.log("Wrong Answer")
            wrongAnswer()
        }
        })
    
      $("#button2").click(function() {
        console.log(this.getAttribute("value"));
        if (this.getAttribute("value")==quizQuestions[questionNum].answer) {
            console.log("Correct Answer")
            correctAnswer()
            return
       } else {
           console.log("Wrong Answer")
           wrongAnswer()
       }
      })

      $("#button3").click(function() {
        console.log(this.getAttribute("value"));
        if (this.getAttribute("value")==quizQuestions[questionNum].answer) {
            console.log("correct answer")
            correctAnswer()
            return
       } else {
           console.log("Wrong Answer")
           wrongAnswer()
       }
      })
  
      $("#button4").click(function() {
        console.log(this.getAttribute("value"));
        if (this.getAttribute("value")==quizQuestions[questionNum].answer) {
            console.log("correct answer")
            correctAnswer()
            return
       } else {
           console.log("Wrong Answer")
           wrongAnswer()
       }
      })
}

function endOfQuiz(){
    $('#modal').modal()
    secondsLeft=0
    document.getElementById("nextButton").disabled= true;
    document.getElementById("button").disabled= false;
    timer.textContent = "";
    questionComplete = false
    
}

function quiz() {

    
    document.getElementById("button").disabled= true;
    if (questionNum>0){ navButtons.removeChild(nextButton)} 
    questionNum = 0
    score = 0
    secondsLeft = 120
    question.innerHTML = "";
    answers.innerHTML = "";
    document.getElementById("result").innerText = ""
    document.getElementById("currentScore").innerText = score
    
    
    addButton1()
    addButton2()
    addButton3()
    addButton4()
    addNextButton()
    setTime()   
    inportQuestions() 
    buttonMechanics()
    
    $("#nextButton").click(nextQuestion)
    return}

$("#submitInitials").click(function(event){
    scoreHistory.unshift(initials.value + " - " + score)
    console.log(scoreHistory)
    localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
    var storedScores = JSON.parse(localStorage.getItem("scoreHistory"));
    $(scoreChart).append("<div>"+storedScores[0]+"</div>")
    event.preventDefault()
})

var storedScores = JSON.parse(localStorage.getItem("scoreHistory"));
if (storedScores == null){scoreHistory = ""}
else{
    for (i = 0; i < storedScores.length; i++) {
    $(scoreChart).append("<div id= pastScores>"+storedScores[i]+"</div>")}
}

$(button).click(quiz)

$("#resetScores").click(function(){
    localStorage.clear();
    $(pastScores).remove();
})

