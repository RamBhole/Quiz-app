// ============================================
// QUIZ APP - Modern JavaScript Project
// ============================================

console.log('🎯 Quiz App Loaded!');

// ============================================
// QUIZ QUESTIONS DATABASE
// ============================================

const quizQuestions = [
  {
    question: "What does 'const' keyword mean in JavaScript?",
    options: ["Variable", "Constant", "Function", "Loop"],
    correct: 1
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0
  },
  {
    question: "What is the output of: typeof []",
    options: ["array", "object", "undefined", "null"],
    correct: 1
  },
  {
    question: "Which symbol is used for template literals?",
    options: ["Single quotes ''", "Double quotes \"\"", "Backticks ``", "Forward slash //"],
    correct: 2
  },
  {
    question: "What does '===' check for?",
    options: ["Value only", "Type only", "Both value and type", "Neither"],
    correct: 2
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["pop()", "push()", "shift()", "splice()"],
    correct: 0
  },
  {
    question: "What is the correct way to write an arrow function?",
    options: ["function() => {}", "() => {}", "=> () {}", "{}() =>"],
    correct: 1
  },
  {
    question: "Which loop iterates over object properties?",
    options: ["for", "while", "for...in", "forEach"],
    correct: 2
  },
  {
    question: "What does 'NaN' stand for?",
    options: ["Not a Number", "Null and Negative", "New Array Node", "None"],
    correct: 0
  },
  {
    question: "Which method converts JSON string to JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
    correct: 0
  }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Store user's answers
let timer;
let timeLeft = 60;
const TIME_PER_QUESTION = 60; // seconds

// ============================================
// DOM ELEMENTS
// ============================================

// Screens
const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const reviewScreen = document.getElementById('reviewScreen');

// Welcome screen elements
const startBtn = document.getElementById('startBtn');
const highScoreEl = document.getElementById('highScore');

// Quiz screen elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const timerEl = document.getElementById('timer');
const timeLeftEl = document.getElementById('timeLeft');
const currentScoreEl = document.getElementById('currentScore');
const progressFillEl = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Results screen elements
const resultIconEl = document.getElementById('resultIcon');
const resultTitleEl = document.getElementById('resultTitle');
const resultMessageEl = document.getElementById('resultMessage');
const finalScoreEl = document.getElementById('finalScore');
const percentageEl = document.getElementById('percentage');
const correctAnswersEl = document.getElementById('correctAnswers');
const incorrectAnswersEl = document.getElementById('incorrectAnswers');
const skippedAnswersEl = document.getElementById('skippedAnswers');
const newHighScoreEl = document.getElementById('newHighScore');
const reviewBtn = document.getElementById('reviewBtn');
const restartBtn = document.getElementById('restartBtn');

// Review screen elements
const reviewListEl = document.getElementById('reviewList');
const backToResultsBtn = document.getElementById('backToResults');

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  loadHighScore();
  totalQuestionsEl.textContent = quizQuestions.length;
});

// ============================================
// EVENT LISTENERS
// ============================================

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion);
restartBtn.addEventListener('click', restartQuiz);
reviewBtn.addEventListener('click', showReview);
backToResultsBtn.addEventListener('click', showResults);

// ============================================
// QUIZ FLOW FUNCTIONS
// ============================================

function startQuiz() {
  // Reset state
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = new Array(quizQuestions.length).fill(null);
  
  // Switch screens
  hideScreen(welcomeScreen);
  showScreen(quizScreen);
  
  // Start quiz
  displayQuestion();
  startTimer();
  updateProgress();
  
  console.log('🎮 Quiz started!');
}

function displayQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  
  // Update question number
  currentQuestionEl.textContent = currentQuestionIndex + 1;
  
  // Update question text
  questionEl.textContent = question.question;
  
  // Clear previous options
  optionsEl.innerHTML = '';
  
  // Create option buttons
  question.options.forEach((option, index) => {
    const optionBtn = document.createElement('div');
    optionBtn.className = 'option';
    optionBtn.dataset.index = index;
    
    const letter = String.fromCharCode(65 + index); // A, B, C, D
    
    optionBtn.innerHTML = `
      <div class="option-letter">${letter}</div>
      <div class="option-text">${option}</div>
    `;
    
    // Check if this option was previously selected
    if (userAnswers[currentQuestionIndex] === index) {
      optionBtn.classList.add('selected');
      nextBtn.disabled = false;
    }
    
    optionBtn.addEventListener('click', () => selectOption(index));
    optionsEl.appendChild(optionBtn);
  });
  
  // Update button states
  prevBtn.disabled = currentQuestionIndex === 0;
  
  // Reset timer
  resetTimer();
}

function selectOption(selectedIndex) {
  // Store user's answer
  userAnswers[currentQuestionIndex] = selectedIndex;
  
  // Update UI
  const options = document.querySelectorAll('.option');
  options.forEach((option, index) => {
    option.classList.remove('selected');
    if (index === selectedIndex) {
      option.classList.add('selected');
    }
  });
  
  // Enable next button
  nextBtn.disabled = false;
  
  console.log(`Selected option: ${selectedIndex}`);
}

function nextQuestion() {
  // Stop current timer
  stopTimer();
  
  // Move to next question or show results
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    updateProgress();
  } else {
    // Quiz complete
    calculateResults();
    showResults();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    stopTimer();
    currentQuestionIndex--;
    displayQuestion();
    updateProgress();
  }
}

// ============================================
// TIMER FUNCTIONS
// ============================================

function startTimer() {
  timeLeft = TIME_PER_QUESTION;
  updateTimerDisplay();
  
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    
    // Warning at 10 seconds
    if (timeLeft <= 10) {
      timerEl.classList.add('warning');
    }
    
    // Time's up!
    if (timeLeft <= 0) {
      stopTimer();
      nextQuestion(); // Auto-move to next question
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timerEl.classList.remove('warning');
}

function resetTimer() {
  stopTimer();
  startTimer();
}

function updateTimerDisplay() {
  timeLeftEl.textContent = timeLeft;
}

// ============================================
// PROGRESS & SCORE
// ============================================

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressFillEl.style.width = `${progress}%`;
}

function updateScore() {
  currentScoreEl.textContent = score;
}

// ============================================
// RESULTS CALCULATION
// ============================================

function calculateResults() {
  stopTimer();
  
  // Reset score
  score = 0;
  
  // Calculate correct answers
  quizQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.correct) {
      score++;
    }
  });
  
  console.log(`Final Score: ${score}/${quizQuestions.length}`);
}

function showResults() {
  // Hide quiz and review screens
  hideScreen(quizScreen);
  hideScreen(reviewScreen);
  
  // Show results screen
  showScreen(resultsScreen);
  
  // Calculate statistics
  const total = quizQuestions.length;
  const correct = score;
  const incorrect = userAnswers.filter((answer, index) => {
    return answer !== null && answer !== quizQuestions[index].correct;
  }).length;
  const skipped = userAnswers.filter(answer => answer === null).length;
  const percentage = Math.round((correct / total) * 100);
  
  // Update result icon and message based on score
  if (percentage >= 80) {
    resultIconEl.textContent = '🏆';
    resultTitleEl.textContent = 'Excellent!';
    resultMessageEl.textContent = 'Outstanding performance! You really know your JavaScript!';
  } else if (percentage >= 60) {
    resultIconEl.textContent = '🎉';
    resultTitleEl.textContent = 'Great Job!';
    resultMessageEl.textContent = 'Good work! Keep practicing to master JavaScript!';
  } else if (percentage >= 40) {
    resultIconEl.textContent = '👍';
    resultTitleEl.textContent = 'Not Bad!';
    resultMessageEl.textContent = 'You\'re on the right track. Review the concepts and try again!';
  } else {
    resultIconEl.textContent = '📚';
    resultTitleEl.textContent = 'Keep Learning!';
    resultMessageEl.textContent = 'Don\'t give up! Every expert was once a beginner.';
  }
  
  // Update score displays
  finalScoreEl.textContent = `${correct}/${total}`;
  percentageEl.textContent = `${percentage}%`;
  correctAnswersEl.textContent = correct;
  incorrectAnswersEl.textContent = incorrect;
  skippedAnswersEl.textContent = skipped;
  
  // Check for high score
  checkHighScore(score);
}

// ============================================
// HIGH SCORE MANAGEMENT
// ============================================

function loadHighScore() {
  const highScore = localStorage.getItem('quizHighScore') || 0;
  highScoreEl.textContent = `${highScore} points`;
}

function checkHighScore(newScore) {
  const currentHighScore = parseInt(localStorage.getItem('quizHighScore')) || 0;
  
  if (newScore > currentHighScore) {
    localStorage.setItem('quizHighScore', newScore);
    newHighScoreEl.classList.remove('hidden');
    loadHighScore();
    console.log('🏆 New High Score!');
  } else {
    newHighScoreEl.classList.add('hidden');
  }
}

// ============================================
// REVIEW ANSWERS
// ============================================

function showReview() {
  hideScreen(resultsScreen);
  showScreen(reviewScreen);
  
  // Clear previous review
  reviewListEl.innerHTML = '';
  
  // Generate review items
  quizQuestions.forEach((question, index) => {
    const reviewItem = document.createElement('div');
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correct;
    
    reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const userAnswerText = userAnswer !== null 
      ? question.options[userAnswer] 
      : 'Not answered';
    
    const correctAnswerText = question.options[question.correct];
    
    reviewItem.innerHTML = `
      <div class="review-question">
        <strong>Question ${index + 1}:</strong> ${question.question}
      </div>
      <div class="review-answer your-answer ${isCorrect ? 'correct-ans' : 'incorrect-ans'}">
        <strong>Your answer:</strong> ${userAnswerText}
      </div>
      ${!isCorrect ? `
        <div class="review-answer correct-answer">
          <strong>Correct answer:</strong> ${correctAnswerText}
        </div>
      ` : ''}
    `;
    
    reviewListEl.appendChild(reviewItem);
  });
}

// ============================================
// RESTART QUIZ
// ============================================

function restartQuiz() {
  // Reset everything
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = new Array(quizQuestions.length).fill(null);
  
  // Hide results screen
  hideScreen(resultsScreen);
  
  // Show welcome screen
  showScreen(welcomeScreen);
  
  console.log('🔄 Quiz restarted');
}

// ============================================
// SCREEN MANAGEMENT
// ============================================

function showScreen(screen) {
  screen.classList.add('active');
}

function hideScreen(screen) {
  screen.classList.remove('active');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Shuffle array (for randomizing questions - optional)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get quiz statistics
window.getQuizStats = () => {
  return {
    currentQuestion: currentQuestionIndex + 1,
    totalQuestions: quizQuestions.length,
    score: score,
    timeLeft: timeLeft,
    userAnswers: userAnswers
  };
};

// Reset high score (for testing)
window.resetHighScore = () => {
  localStorage.removeItem('quizHighScore');
  loadHighScore();
  console.log('🔄 High score reset');
};

console.log('✅ Quiz App Ready!');
console.log('💡 Click "Start Quiz" to begin!');
console.log('💡 Debug: Type getQuizStats() in console to see current state');