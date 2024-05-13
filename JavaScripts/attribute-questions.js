
const quizData = [
  {
    question: "1.What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "2.What is the pH value of the human body?",
    options: ["9.2 to 9.8", "7.0 to 7.8", "6.1 to 6.3", "5.4 to 5.6"],
    answer: "7.0 to 7.8"
  },
  {
    question: "3.What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "4.Who wrote the novel 'To Kill a Mockingbird'?",
    options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "Harper Lee"],
    answer: "Harper Lee"
  },
  {
    question: "5.What is the capital city of Australia?",
    options: ["Canberra", "Melbourne", "Perth", "Brisbane"],
    answer: "Canberra"
  },
  {
    question: "6.Which element has the chemical symbol 'Fe'?",
    options: ["Mercury", "Lead", "Iron", "Silver"],
    answer: "Iron"
  },
  {
    question: "7.Which country is famous for producing the most coffee in the world?",
    options: ["Colombia", "Brazil", "Indonesia", "Vietnam"],
    answer: "Brazil"
  },
  {
    question: "8.What is the largest mammal in the world?",
    options: ["The blue whale", "Hippopotamus", "Elephant", "Giraffe"],
    answer: "The blue whale"
  },
   {
    question: "9.What is the chemical symbol for gold?",
    options: ["Gd", "Au", "Ag", "Go"],
    answer: ""
  },
  {
    question: "10.In which year did the Titanic sink?",
    options: ["1914", "1915", "1916", "1912"],
    answer: "1912"
  }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";
  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.innerText = option;
    button.value = option;
    button.addEventListener('click', selectOption);
    optionsElement.appendChild(button);
  });
  if (currentQuestion === 0 ||currentQuestion === quizData.length - 1) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }
  if (currentQuestion === quizData.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}
function selectOption(event) {
  const selectedOption = event.target.value;
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.innerText = '';
  optionsElement.innerHTML = '';
  submitButton.style.display = 'none';
  nextButton.style.display = 'none';
  prevButton.style.display = 'none';
  resultElement.innerText = `Your score: ${score} out of ${quizData.length}`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}


loadQuestion();
submitButton.addEventListener('click', () => {
  if (currentQuestion < quizData.length) {
      showResult();
  }
});


nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);
