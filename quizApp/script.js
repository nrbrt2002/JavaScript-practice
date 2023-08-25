const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');

const questions = [
    {
        question: "Which is the largest animal in the world", 
        answers: [
            {text: 'Shark', correct:'false'},
            {text: 'Elephent', correct:'false'},
            {text: 'Lion', correct:'false'},
            {text: 'Blue Whale', correct:'true'},
        ]
    },
    {
        question: "What is the capital of France?", 
        answers: [
            {text: 'Berlin', correct:'false'},
            {text: 'Paris', correct:'true'},
            {text: 'London', correct:'false'},
            {text: 'Rome', correct:'false'},
        ]
    },
    {
        question: "Who is the author of the famous play \"Romeo and Juliet\"?", 
        answers: [
            {text: 'William Shakespeare', correct:'true'},
            {text: 'Charles Dickens', correct:'false'},
            {text: ' Mark Twain', correct:'false'},
            {text: 'Jane Austen', correct:'false'},
        ]
    },
    {
        question: "What is the chemical symbol for water?", 
        answers: [
            {text: 'O2', correct:'false'},
            {text: 'H2O', correct:'true'},
            {text: 'CO2', correct:'false'},
            {text: 'NaCl', correct:'false'},
        ]
    },
    {
        question: " Which planet is known as the \"Red Planet\"?", 
        answers: [
            {text: 'Jupiter', correct:'false'},
            {text: 'Venus', correct:'false'},
            {text: 'Mars', correct:'true'},
            {text: 'Saturn', correct:'false'},
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
startQuiz();