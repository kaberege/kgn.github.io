const questions = [
  {
    question: "Which is a favorite server-side programming language?",
    answers: "Javascript"
  },
  {
    question: "Which is a favorite css framework?",
    answers: "Bootstrap"
  },
  {
    question: "Which is a favorite operating system?",
    answers: "Linux"
  },
  {
    question: "Which is a favorite command shell?",
    answers: "Power shell"
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const showButton = document.getElementById("show-btn");

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  showQuiz();
}

function showQuiz() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  showButton.addEventListener("click", () => {
    answerButtons.innerHTML = currentQuestion.answers;
  });
  showButton.style.display = "inline";
  nextButton.innerHTML = "Next";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    displayNext();
  } else {
    startQuiz();
  }
});

function displayNext() {
  answerButtons.innerHTML = "";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuiz();
  } else {
    questionElement.innerHTML = "Session ended";
    showButton.style.display = "none";
    nextButton.innerHTML = "Try again";
  }
}

startQuiz();

//================styling logo image=========================
const myTurn = document.getElementById("navImg1");
setInterval(myTransform, 20);
function myTransform() {
  myTurn.style.transform += "rotateZ(-1deg)";
}
