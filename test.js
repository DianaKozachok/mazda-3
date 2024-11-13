let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

const questions = [
  {
    question: "Які з перелічених вище автомобілів має найбільшу потужність двигуна?",
    answers: ["Toyota Camry", "Honda Civic", "BMW 3 Series", "Mercedes-Benz C-Class"],
    correctAnswer: 3
  },
  {
    question: "Яка з перелічених країн є батьківщиною автомобільної марки Audi?",
    answers: ["Франція", "Італія", "Німеччина", "Японія"],
    correctAnswer: 2
  },
  {
    question: "Який з автомобільних брендів випускає модель 'Mustang'?",
    answers: ["Ford", "Chevrolet", "Dodge", "Jeep"],
    correctAnswer: 0
  },
  {
    question: "Яка автомобільна марка випускає модель 'Civic'?",
    answers: ["Toyota", "Honda", "Ford", "Chevrolet"],
    correctAnswer: 1
  },
  {
    question: "Який тип двигуна використовується в електромобілях?",
    answers: ["Бензиновий", "Дизельний", "Електричний", "Водневий"],
    correctAnswer: 2
  },
];

function showQuestion() {
  const currentQuizItem = questions[currentQuestion];
  questionElement.textContent = currentQuizItem.question;
  
  answerContainer.innerHTML = '';

  currentQuizItem.answers.forEach((answer, index) => {
    const answerButton = document.createElement('button');
    answerButton.textContent = answer;
    answerButton.addEventListener('click', () => checkAnswer(index));
    answerContainer.appendChild(answerButton);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuizItem = questions[currentQuestion];
  if (selectedIndex === currentQuizItem.correctAnswer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `You scored ${score} out of ${questions.length}.`;
  }

nextButton.addEventListener('click', () => {
  if (currentQuestion < questions.length) {
    showQuestion();
  }
});

showQuestion();
function checkAnswer(selectedIndex) {
    const currentQuizItem = questions[currentQuestion];
    const answerButtons = answerContainer.querySelectorAll('button');
  
    if (selectedIndex === currentQuizItem.correctAnswer) {
      score++;
      answerButtons[selectedIndex].classList.add('correct');
    } else {
      answerButtons[selectedIndex].classList.add('incorrect');
      answerButtons[currentQuizItem.correctAnswer].classList.add('correct');
    }
  
    answerButtons.forEach(button => {
      button.disabled = true; // Вимикаємо кнопки відповідей після вибору відповіді
    });
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      nextButton.style.display = 'block'; // Показуємо кнопку "Next" після вибору відповіді
    } else {
      showResult();
    }
  }
  