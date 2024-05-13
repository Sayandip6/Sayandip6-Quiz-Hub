
const quizData = [
  
  {
    question: "1.CSS stands for",
    options: ["Cascade style sheets", "Color and style sheets", "Cascading style sheets", "None of the above"],
    answer: "Cascading style sheets"
  },
  {
    question: "2.The property in CSS used to change the background color of an element is -",
    options: ["bgcolor", "color", "background-color", "All of the above"],
    answer: "background-color"
  },{
    question: "3.The CSS property used to control the element's font-size is -",
    options: ["text-style", "text-size", "font-size", "None of the above"],
    answer: "font-size"
  },{
    question: "4.The HTML attribute used to define the inline styles is -",
    options: ["style", "styles", "class", "None of the above"],
    answer: "style"
  },{
    question: "5.The HTML attribute used to define the internal stylesheet is -",
    options: ["<style>", "style", "<link>", "<script>"],
    answer: "<style>"
  },{
    question: "6.Which of the following property is used as the shorthand property for the padding properties?",
    options: ["padding-left", "padding-right", "padding", "All of the above"],
    answer: "padding"
  },{
    question: "7.The CSS property used to make the text bold is -",
    options: ["font-weight : bold", "weight: bold", "font: bold", "style: bold"],
    answer: "font-weight : bold"
  },{
    question: "8.Are the negative values allowed in padding property?",
    options: ["Yes", "No", "Can't say", "May be"],
    answer: "No"
  },{
    question: "9.The CSS property used to specify the transparency of an element is -",
    options: ["opacity", "filter", "visibility", "overlay"],
    answer: "opacity"
  },{
    question: "10.Which of the following is used to specify the subscript of text using CSS?",
    options: ["vertical-align: sub", "vertical-align: super", "vertical-align: subscript", "None of the above"],
    answer: ""
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
