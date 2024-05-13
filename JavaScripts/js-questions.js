
const quizData = [
  {
    question: "1.Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "let", "Both A and B", "None of the above"],
    answer: "var"
  },
  {
    question: "2.Javascript is an _______ language?",
    options: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: "Object-Oriented"
  },
  {
    question: "3.What keyword is used to check whether a given property is valid or not?",
    options: ["in", "is in", "exists", "lies"],
    answer: "in"
  },
  {
    question: "4.When the switch statement matches the expression with the given labels, how is the comparison done?",
    options: ["Both the datatype and the result of the expression are compared.", "Only the datatype of the expression is compared.", "Only the value of the expression is compared.", "None of the above."],
    answer: "Both the datatype and the result of the expression are compared."
  },
  {
    question: "5.What is the use of the <noscript> tag in Javascript?",
    options: ["The contents are displayed by non-JS-based browsers.", "Clears all the cookies and cache.", "Both A and B.", "None of the above."],
    answer: "The contents are displayed by non-JS-based browsers."
  },
  {
    question: "6.What does the 'toLocateString()' method do in JS?",
    options: ["Returns a localised object representation.", "Returns a parsed string.", "Returns a localized string representation of an object.", "None of the above."],
    answer: "Returns a localized string representation of an object."
  },
  {
    question: "7.Which function is used to serialize an object into a JSON string in Javascript?",
    options: ["stringify()", "parse()", "convert()", "None of the above"],
    answer: "stringify()"
  },
  {
    question: "8.The 3 basic object attributes in Javascript are:",
    options: ["Class, prototype, objects' parameters.", "Class, prototype, object's extensible flag.", "Class, parameters, object's extensible flag.", "Classes, Native object, and Interfaces and Object's extensible flag."],
    answer: "Class, prototype, object's extensible flag."
  },
   {
    question: "9.What keyword is used to declare an asynchronous function in Javascript?",
    options: ["async", "await", "setTimeout", "None of the above"],
    answer: "async"
  },
  {
    question: "10.What does … operator do in JS?",
    options: ["None of the these","No such operator exists", "It is used to spread iterables to individual elements", "It is used to describe a datatype of undefined size"],
    answer: "It is used to spread iterables to individual elements"
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

   const retryButton = document.createElement('button');
  retryButton.innerText = 'Retry';
  retryButton.classList.add('retry-button');
  retryButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    retryButton.remove();
  });

  resultElement.appendChild(retryButton);
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
