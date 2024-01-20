const questions = [
    {
        question: "what is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "Which planet is know as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars",  
    }, 
    {
        question: "What is the latgest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",    
    },
    {
        question: "What is the largest planey in our solar system?",
        options: ["Mars", "Venus", "Saturn", "Jupiter"],
        answer: "Jupiter",    
    },
    {
        question: "How many continent are there on Earth?",
        options: ["4", "5", "6", "7"],
        answer: "7",  
    },
];

let currentQuestionindex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.querySelector(".options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next");
const PlayAgainButtom = document.getElementById("play-again");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionindex];
     questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.classList.add("option");
    optionButton.textContent = option;
    optionButton.addEventListener("click", () =>
        checkAnswer(option, currentQuestion.answer)
    );
    optionsElement.appendChild(optionButton)
    }); 
} 

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
    score++;
    resultElement.textContent = "correct!";
    } else {
      resultElement.textContent = "Wrong!";  
    }
    nextButton.style.display = "block";
    optionsElement.querySelectorAll(".option").forEach((option) => {
     option.disabled = true;  
    });  
}

function resetQuiz() {
    currentQuestionindex = 0;
    score = 0;
    nextButton.style.display = "block";
    PlayAgainButtom.style.display = "none";
    resultElement.textContent = "";
    displayQuestion();
}

nextButton.addEventListener("click", () => {
  currentQuestionindex++;
  if (currentQuestionindex < questions.length) {
    resultElement.textContent = "";
    nextButton.style.display = "none";
   optionsElement.querySelectorAll(".option").forEach((option) => {
    option.disabled = false;
   }); 
   displayQuestion();
  } else {
    // Quiz Completed
    questionElement.textContent = `Quiz completed! Your Score: ${score} / ${questions.length}`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    nextButton.style.display = "block";  
  } 
});

PlayAgainButtom.addEventListener("click", resetQuiz);

resetQuiz(); // Start the Quiz Initially

























































