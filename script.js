
var timer = document.querySelector("#timer")
var questionNumber = document.querySelector("#questionNumber")
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
var currentScore = document.querySelector("#currentScore")
var button = document.querySelector("#button")
var navButtons = document.querySelector("#navButtons")


var questionNum = 0
var score = 0
var questionComplete = false
var scoreHistory
var questionAnswer 
var selectedAnswer



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
    question: "which one is 6?",
    respOptions: [
        "5",
        "6",
        "7",
        "8"
    ],
    answer: "6"
},
{
    question: "which one is 11?",
    respOptions: [
        "9",
        "10",
        "11",
        "12"
    ],
    answer: "11"
},
{
    question: "which one is 16?",
    respOptions: [
        "13",
        "14",
        "15",
        "16"
    ],
    answer: "16"
}
];

function addButton1() {
    var button1 = document.createElement("button")
    button1.id = "button1"
    button1.className = "answerButtons btn "
    button1.innerText = "Button A"
    button1.value = quizQuestions[questionNum].respOptions[0]
    answers.appendChild(button1)
}
function addButton2() {
    var button2 = document.createElement("button")
    button2.id = "button2"
    button2.className = "answerButtons btn "
    button2.innerText = "Button B"
    button2.value = quizQuestions[questionNum].respOptions[1]
    answers.appendChild(button2)
}
function addButton3() {
    var button3 = document.createElement("button")
    button3.id = "button3"
    button3.className = "answerButtons btn "
    button3.innerText = "Button C"
    button3.value = quizQuestions[questionNum].respOptions[2]
    answers.appendChild(button3)
}
function addButton4() {
    var button4 = document.createElement("button")
    button4.id = "button4"
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
    return
}

var secondsLeft = 30;
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = ` ${secondsLeft} seconds`;
        if (secondsLeft <= 0 ) {
            // if (scoreHistory.length !== 0) {
            //     document.getElementById("view-scores").removeAttribute("disabled");
            // }
            timer.textContent = "";
            clearInterval(timerInterval);
            endOfQuiz();
        }
    }, 1000);
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
    
}

function quiz() {

    answers.innerHTML = "";
    addButton1()
    addButton2()
    addButton3()
    addButton4()
    addNextButton()

    setTime()

    // for (i = 0; i < quizQuestions.length; i++) {
     
    inportQuestions()
        
    buttonMechanics()
    
    
    $("#nextButton").click(nextQuestion)
    return

}


// document.getElementById("button").addEventListener("click", Quiz() 
    
//   );

button.addEventListener("click", quiz);



