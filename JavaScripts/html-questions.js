
const quizData = [
  {
    question: "1.What does the abbreviation HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperText and links Markup Language", "None of these"],
    answer: "HyperText Markup Language"
  },
  {
    question: "2.The correct sequence of HTML tags for starting a webpage is -",
    options: ["Head, Title, HTML, body", "Head, HTML,title, body", "HTML, Headder, Title, Body", "HTML, Head, Title, Body"],
    answer: "HTML, Head, Title, Body"
  },
  {
    question: "3.Which of the following element is responsible for making the text bold in HTML?",
    options: ["<pre>", "<a>", "<b>", "<br>"],
    answer: "<b>"
  },
  {
    question: "4.Which of the following tag is used for inserting the largest heading in HTML?",
    options: ["<h3>", "<h1>", "<h5>", "<h6>"],
    answer: "<h1>"
  },{
    question: "5.Which of the following tag is used to insert a line-break in HTML?",
    options: ["<br>", "<a>", "<pre>", "<b>"],
    answer: "<br>"
  },{
    question: "6.Which character is used to represent the closing of a tag in HTML?",
    options: ["\\", "!", "/", "."],
    answer: "/"
  },{
    question: "7.How to create an ordered list (a list with the list items in numbers) in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<i>"],
    answer: "<ol>"
  },{
    question: "8.<input> is -",
    options: ["a format tag", "an empty tag", "All of the above", "None of the above"],
    answer: "an empty tag"
  },{
    question: "9.The <hr> tag in HTML is used for -",
    options: ["new line", "vertical ruler", "new paragraph", "horizontal ruler"],
    answer: "horizontal ruler"
  },{
    question: "10.Which of the following attribute is used to provide a unique name to an element?",
    options: ["class", "id", "type", "None of the above"],
    answer: "id"
  }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

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
  resultElement.innerText = `Your score: ${score} out of ${quizData.length}`;
}

loadQuestion();
submitButton.addEventListener('click', () => {
  if (currentQuestion < quizData.length) {
    alert('Please select an option.');
  }
});
