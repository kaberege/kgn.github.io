const questions = [
  {
    question: "Which is a favorite server-side programming language?",
    answers: [
      { text: "HTML", correct: false },
      { text: "Javascript", correct: true },
      { text: "Lingua", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "Which is a favorite css framework?",
    answers: [
      { text: "Nile", correct: false },
      { text: "Bootstrap", correct: true },
      { text: "Mississipi", correct: false },
      { text: "Zambezi", correct: false }
    ]
  },
  {
    question: "Which is a favorite operating system?",
    answers: [
      { text: "Python", correct: false },
      { text: "Linux", correct: true },
      { text: "Hover", correct: false },
      { text: "Click", correct: false }
    ]
  },
  {
    question: "Which is a favorite command shell?",
    answers: [
      { text: "Cheeter", correct: false },
      { text: "Power shell", correct: true },
      { text: "Hacker", correct: false },
      { text: "Ration", correct: false }
    ]
  }
];

const sample = document.getElementById("sample");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const myArr = [];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const myDiv = document.createElement("div");
    const button = document.createElement("button");
    const radioInput = document.createElement("input");
    radioInput.type = "radio"
    radioInput.name = "rad"
    radioInput.value = answer.correct;
    button.value = answer.correct;
    radioInput.classList.add("check");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    myDiv.appendChild(radioInput);
    myDiv.appendChild(button);
    answerButtons.appendChild(myDiv);
  });
}

function resetState() {
  nextButton.style.display = "inline";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    displayNext();
  } else {
    startQuiz();
  }
});

function displayNext() {
  let scored = answerButtons.childNodes;
  scored.forEach(scored => {
    if (scored.firstChild.checked === true && scored.firstChild.value === "true") {
      score++;
    } else {
      score = score;
    }
  });
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionElement.innerHTML = "Session ended";
    answerButtons.innerHTML = "Your score is: " + ((score / questions.length) * 100) + "%";
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
