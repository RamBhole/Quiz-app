// ============================================
// ENHANCED QUIZ APP - With Categories & Lifelines
// ============================================

console.log('🎯 Enhanced Quiz App Loaded!');

// ============================================
// QUIZ QUESTIONS DATABASE BY CATEGORY
// ============================================

const quizDatabase = {
  javascript: [
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
  ],
  html: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      correct: 0
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<head>", "<h6>", "<h1>", "<heading>"],
      correct: 2
    },
    {
      question: "Which attribute specifies a unique identifier for an element?",
      options: ["class", "id", "name", "key"],
      correct: 1
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1
    },
    {
      question: "What is the correct HTML for inserting an image?",
      options: ["<img src='image.jpg'>", "<image src='image.jpg'>", "<pic src='image.jpg'>", "<img href='image.jpg'>"],
      correct: 0
    },
    {
      question: "Which HTML element defines the title of a document?",
      options: ["<meta>", "<title>", "<head>", "<header>"],
      correct: 1
    },
    {
      question: "What is the correct HTML for creating a checkbox?",
      options: ["<input type='checkbox'>", "<checkbox>", "<check>", "<input type='check'>"],
      correct: 0
    },
    {
      question: "Which tag is used to define an unordered list?",
      options: ["<ol>", "<list>", "<ul>", "<li>"],
      correct: 2
    },
    {
      question: "What does the <br> tag do?",
      options: ["Makes text bold", "Creates a line break", "Creates a border", "Makes text bigger"],
      correct: 1
    },
    {
      question: "Which HTML5 element defines navigation links?",
      options: ["<navigate>", "<nav>", "<navigation>", "<menu>"],
      correct: 1
    }
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      correct: 0
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "bgcolor", "background-color", "bg-color"],
      correct: 2
    },
    {
      question: "How do you select an element with id 'header'?",
      options: [".header", "#header", "*header", "header"],
      correct: 1
    },
    {
      question: "Which property is used to change text color?",
      options: ["text-color", "font-color", "color", "text-style"],
      correct: 2
    },
    {
      question: "How do you make text bold in CSS?",
      options: ["font-weight: bold", "text-style: bold", "font: bold", "text-weight: bold"],
      correct: 0
    },
    {
      question: "Which property adds space inside an element's border?",
      options: ["margin", "padding", "spacing", "border-spacing"],
      correct: 1
    },
    {
      question: "What is the correct CSS syntax?",
      options: ["body {color: black;}", "{body: color=black}", "body: color=black", "{body; color: black}"],
      correct: 0
    },
    {
      question: "How do you display an element as a flexible box?",
      options: ["display: flex", "display: flexbox", "display: flexible", "flex: true"],
      correct: 0
    },
    {
      question: "Which property is used to align items horizontally in flexbox?",
      options: ["align-items", "justify-content", "align-content", "flex-align"],
      correct: 1
    },
    {
      question: "What does 'px' stand for in CSS?",
      options: ["Points", "Pixels", "Percentage", "Position X"],
      correct: 1
    }
  ],
  general: [
    {
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Advanced Program Integration", "Application Process Interface", "Automated Programming Interface"],
      correct: 0
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "Apple"],
      correct: 1
    },
    {
      question: "What does HTTP stand for?",
      options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transport Protocol", "Home Text Transfer Protocol"],
      correct: 0
    },
    {
      question: "Which is NOT a programming language?",
      options: ["Python", "Java", "HTML", "Ruby"],
      correct: 2
    },
    {
      question: "What does URL stand for?",
      options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Locator"],
      correct: 1
    },
    {
      question: "Which is a version control system?",
      options: ["Git", "Docker", "MySQL", "Apache"],
      correct: 0
    },
    {
      question: "What does IDE stand for?",
      options: ["Internet Development Environment", "Integrated Development Environment", "Internal Development Editor", "Interactive Design Environment"],
      correct: 1
    },
    {
      question: "Which protocol is used for secure data transmission?",
      options: ["HTTP", "FTP", "HTTPS", "SMTP"],
      correct: 2
    },
    {
      question: "What does JSON stand for?",
      options: ["JavaScript Object Notation", "Java Simple Object Notation", "JavaScript Online Notation", "Java Standard Object Notation"],
      correct: 0
    },
    {
      question: "Which is a NoSQL database?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      correct: 2
    }
  ]
};

// ============================================
// STATE MANAGEMENT
// ============================================

let selectedCategory = 'javascript';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timer;
let timeLeft = 60;
const TIME_PER_QUESTION = 60;

// Lifelines
let lifelines = {
  fiftyFifty: 1,
  skip: 1,
  extraTime: 1
};

let removedOptions = []; // Track removed options for 50/50

// ============================================
// DOM ELEMENTS
// ============================================

// Screens
const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const reviewScreen = document.getElementById('reviewScreen');
const leaderboardScreen = document.getElementById('leaderboardScreen');

// Welcome screen
const categoryBtns = document.querySelectorAll('.category-btn');
const startBtn = document.getElementById('startBtn');
const leaderboardBtn = document.getElementById('leaderboardBtn');

// Quiz screen
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const categoryNameEl = document.getElementById('categoryName');
const timerEl = document.getElementById('timer');
const timeLeftEl = document.getElementById('timeLeft');
const currentScoreEl = document.getElementById('currentScore');
const progressFillEl = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Lifeline buttons
const fiftyFiftyBtn = document.getElementById('fiftyFifty');
const skipQuestionBtn = document.getElementById('skipQuestion');
const extraTimeBtn = document.getElementById('extraTime');

// Results screen
const resultIconEl = document.getElementById('resultIcon');
const resultTitleEl = document.getElementById('resultTitle');
const resultMessageEl = document.getElementById('resultMessage');
const finalScoreEl = document.getElementById('finalScore');
const percentageEl = document.getElementById('percentage');
const correctAnswersEl = document.getElementById('correctAnswers');
const incorrectAnswersEl = document.getElementById('incorrectAnswers');
const skippedAnswersEl = document.getElementById('skippedAnswers');
const newHighScoreEl = document.getElementById('newHighScore');
const saveScoreForm = document.getElementById('saveScoreForm');
const playerNameInput = document.getElementById('playerName');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const viewLeaderboardBtn = document.getElementById('viewLeaderboardBtn');
const reviewBtn = document.getElementById('reviewBtn');
const restartBtn = document.getElementById('restartBtn');

// Review screen
const reviewListEl = document.getElementById('reviewList');
const backToResultsBtn = document.getElementById('backToResults');

// Leaderboard screen
const leaderboardListEl = document.getElementById('leaderboardList');
const filterCategoryBtns = document.querySelectorAll('.filter-category-btn');
const clearLeaderboardBtn = document.getElementById('clearLeaderboardBtn');
const backToWelcomeBtn = document.getElementById('backToWelcome');

// ============================================
// EVENT LISTENERS
// ============================================

// Category selection
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.dataset.category;
    console.log('📚 Category selected:', selectedCategory);
  });
});

startBtn.addEventListener('click', startQuiz);
leaderboardBtn.addEventListener('click', () => showLeaderboard('all'));
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion);
restartBtn.addEventListener('click', restartQuiz);
reviewBtn.addEventListener('click', showReview);
backToResultsBtn.addEventListener('click', showResults);
viewLeaderboardBtn.addEventListener('click', () => showLeaderboard(selectedCategory));
backToWelcomeBtn.addEventListener('click', () => {
  hideScreen(leaderboardScreen);
  showScreen(welcomeScreen);
});

// Lifeline buttons
fiftyFiftyBtn.addEventListener('click', useFiftyFifty);
skipQuestionBtn.addEventListener('click', useSkip);
extraTimeBtn.addEventListener('click', useExtraTime);

// Leaderboard
saveScoreBtn.addEventListener('click', saveScore);
filterCategoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterCategoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showLeaderboard(btn.dataset.category);
  });
});
clearLeaderboardBtn.addEventListener('click', clearLeaderboard);

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Quiz App Ready!');
});

// ============================================
// QUIZ FLOW
// ============================================

function startQuiz() {
  // Get questions for selected category and shuffle
  quizQuestions = shuffleArray([...quizDatabase[selectedCategory]]);
  
  // Reset state
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = new Array(quizQuestions.length).fill(null);
  removedOptions = new Array(quizQuestions.length).fill(null);
  
  // Reset lifelines
  lifelines = {
    fiftyFifty: 1,
    skip: 1,
    extraTime: 1
  };
  updateLifelineButtons();
  
  // Update UI
  totalQuestionsEl.textContent = quizQuestions.length;
  categoryNameEl.textContent = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
  
  // Switch screens
  hideScreen(welcomeScreen);
  showScreen(quizScreen);
  
  // Start quiz
  displayQuestion();
  startTimer();
  updateProgress();
  updateScore();
  
  console.log('🎮 Quiz started! Category:', selectedCategory);
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
    
    // Check if this option was removed by 50/50
    if (removedOptions[currentQuestionIndex] && removedOptions[currentQuestionIndex].includes(index)) {
      optionBtn.classList.add('removed');
    }
    
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
  // Check if option is removed
  const options = document.querySelectorAll('.option');
  if (options[selectedIndex].classList.contains('removed')) {
    return;
  }
  
  // Store user's answer
  userAnswers[currentQuestionIndex] = selectedIndex;
  
  // Update UI
  options.forEach((option, index) => {
    option.classList.remove('selected');
    if (index === selectedIndex && !option.classList.contains('removed')) {
      option.classList.add('selected');
    }
  });
  
  // Enable next button
  nextBtn.disabled = false;
}

function nextQuestion() {
  stopTimer();
  
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    updateProgress();
  } else {
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
// LIFELINE FUNCTIONS
// ============================================

function useFiftyFifty() {
  if (lifelines.fiftyFifty <= 0) return;
  
  const question = quizQuestions[currentQuestionIndex];
  const correctIndex = question.correct;
  
  // Get all wrong answer indices
  const wrongIndices = question.options
    .map((_, index) => index)
    .filter(index => index !== correctIndex);
  
  // Randomly select 2 wrong answers to remove
  const toRemove = [];
  while (toRemove.length < 2 && wrongIndices.length > 0) {
    const randomIndex = Math.floor(Math.random() * wrongIndices.length);
    toRemove.push(wrongIndices[randomIndex]);
    wrongIndices.splice(randomIndex, 1);
  }
  
  // Store removed options
  removedOptions[currentQuestionIndex] = toRemove;
  
  // Update UI
  const options = document.querySelectorAll('.option');
  toRemove.forEach(index => {
    options[index].classList.add('removed');
  });
  
  // Use lifeline
  lifelines.fiftyFifty--;
  updateLifelineButtons();
  
  console.log('✂️ 50/50 used! Removed 2 wrong answers');
}

function useSkip() {
  if (lifelines.skip <= 0) return;
  
  // Mark as skipped (null answer)
  userAnswers[currentQuestionIndex] = null;
  
  // Use lifeline
  lifelines.skip--;
  updateLifelineButtons();
  
  // Move to next question
  nextQuestion();
  
  console.log('⏭️ Question skipped!');
}

function useExtraTime() {
  if (lifelines.extraTime <= 0) return;
  
  // Add 30 seconds
  timeLeft += 30;
  updateTimerDisplay();
  
  // Use lifeline
  lifelines.extraTime--;
  updateLifelineButtons();
  
  console.log('⏰ +30 seconds added!');
}

function updateLifelineButtons() {
  // Update 50/50
  fiftyFiftyBtn.disabled = lifelines.fiftyFifty <= 0;
  fiftyFiftyBtn.querySelector('.lifeline-count').textContent = lifelines.fiftyFifty;
  
  // Update skip
  skipQuestionBtn.disabled = lifelines.skip <= 0;
  skipQuestionBtn.querySelector('.lifeline-count').textContent = lifelines.skip;
  
  // Update extra time
  extraTimeBtn.disabled = lifelines.extraTime <= 0;
  extraTimeBtn.querySelector('.lifeline-count').textContent = lifelines.extraTime;
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
    
    if (timeLeft <= 10) {
      timerEl.classList.add('warning');
    }
    
    if (timeLeft <= 0) {
      stopTimer();
      nextQuestion();
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
// RESULTS
// ============================================

function calculateResults() {
  stopTimer();
  score = 0;
  
  quizQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.correct) {
      score++;
    }
  });
  
  console.log(`Final Score: ${score}/${quizQuestions.length}`);
}

function showResults() {
  hideScreen(quizScreen);
  hideScreen(reviewScreen);
  hideScreen(leaderboardScreen);
  showScreen(resultsScreen);
  
  const total = quizQuestions.length;
  const correct = score;
  const incorrect = userAnswers.filter((answer, index) => {
    return answer !== null && answer !== quizQuestions[index].correct;
  }).length;
  const skipped = userAnswers.filter(answer => answer === null).length;
  const percentage = Math.round((correct / total) * 100);
  
  // Update result message based on score
  if (percentage >= 80) {
    resultIconEl.textContent = '🏆';
    resultTitleEl.textContent = 'Excellent!';
    resultMessageEl.textContent = 'Outstanding performance!';
  } else if (percentage >= 60) {
    resultIconEl.textContent = '🎉';
    resultTitleEl.textContent = 'Great Job!';
    resultMessageEl.textContent = 'Good work! Keep it up!';
  } else if (percentage >= 40) {
    resultIconEl.textContent = '👍';
    resultTitleEl.textContent = 'Not Bad!';
    resultMessageEl.textContent = 'You\'re on the right track!';
  } else {
    resultIconEl.textContent = '📚';
    resultTitleEl.textContent = 'Keep Learning!';
    resultMessageEl.textContent = 'Don\'t give up!';
  }
  
  finalScoreEl.textContent = `${correct}/${total}`;
  percentageEl.textContent = `${percentage}%`;
  correctAnswersEl.textContent = correct;
  incorrectAnswersEl.textContent = incorrect;
  skippedAnswersEl.textContent = skipped;
  
  // Check if top 10 score
  checkIfTopScore(score);
}

function checkIfTopScore(newScore) {
  const leaderboard = getLeaderboard();
  const categoryLeaderboard = leaderboard.filter(entry => entry.category === selectedCategory);
  
  if (categoryLeaderboard.length < 10 || newScore > categoryLeaderboard[categoryLeaderboard.length - 1].score) {
    saveScoreForm.classList.remove('hidden');
    newHighScoreEl.classList.remove('hidden');
  } else {
    saveScoreForm.classList.add('hidden');
    newHighScoreEl.classList.add('hidden');
  }
}

// ============================================
// LEADERBOARD
// ============================================

function getLeaderboard() {
  return JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
}

function saveScore() {
  const playerName = playerNameInput.value.trim();
  
  if (!playerName) {
    alert('Please enter your name!');
    return;
  }
  
  const leaderboard = getLeaderboard();
  
  leaderboard.push({
    name: playerName,
    score: score,
    category: selectedCategory,
    date: new Date().toISOString()
  });
  
  // Sort by score (descending)
  leaderboard.sort((a, b) => b.score - a.score);
  
  // Keep only top 100
  const topLeaderboard = leaderboard.slice(0, 100);
  
  localStorage.setItem('quizLeaderboard', JSON.stringify(topLeaderboard));
  
  saveScoreForm.classList.add('hidden');
  playerNameInput.value = '';
  
  console.log('💾 Score saved to leaderboard!');
  alert('Score saved successfully!');
}

function showLeaderboard(category) {
  hideScreen(welcomeScreen);
  hideScreen(resultsScreen);
  showScreen(leaderboardScreen);
  
  const leaderboard = getLeaderboard();
  let filteredLeaderboard = leaderboard;
  
  if (category !== 'all') {
    filteredLeaderboard = leaderboard.filter(entry => entry.category === category);
  }
  
  // Take top 10
  filteredLeaderboard = filteredLeaderboard.slice(0, 10);
  
  // Display leaderboard
  leaderboardListEl.innerHTML = '';
  
  if (filteredLeaderboard.length === 0) {
    leaderboardListEl.innerHTML = `
      <div class="leaderboard-empty">
        <div class="leaderboard-empty-icon">🏆</div>
        <p>No scores yet!</p>
        <p>Be the first to complete the quiz!</p>
      </div>
    `;
    return;
  }
  
  filteredLeaderboard.forEach((entry, index) => {
    const item = document.createElement('div');
    item.className = `leaderboard-item`;
    
    if (index === 0) item.classList.add('top-1');
    if (index === 1) item.classList.add('top-2');
    if (index === 2) item.classList.add('top-3');
    
    const rankDisplay = index < 3 ? 
      ['🥇', '🥈', '🥉'][index] : 
      `#${index + 1}`;
    
    const categoryIcon = {
      javascript: '📜',
      html: '🌐',
      css: '🎨',
      general: '🧠'
    }[entry.category];
    
    item.innerHTML = `
      <div class="leaderboard-rank ${index < 3 ? 'medal' : ''}">${rankDisplay}</div>
      <div class="leaderboard-info">
        <div class="leaderboard-name">${entry.name}</div>
        <div class="leaderboard-category">${categoryIcon} ${entry.category}</div>
      </div>
      <div class="leaderboard-score">${entry.score}/10</div>
    `;
    
    leaderboardListEl.appendChild(item);
  });
}

function clearLeaderboard() {
  if (confirm('Are you sure you want to clear the entire leaderboard?')) {
    localStorage.removeItem('quizLeaderboard');
    showLeaderboard('all');
    console.log('🗑️ Leaderboard cleared!');
  }
}

// ============================================
// REVIEW ANSWERS
// ============================================

function showReview() {
  hideScreen(resultsScreen);
  showScreen(reviewScreen);
  
  reviewListEl.innerHTML = '';
  
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
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = new Array(quizQuestions.length).fill(null);
  removedOptions = new Array(quizQuestions.length).fill(null);
  
  lifelines = {
    fiftyFifty: 1,
    skip: 1,
    extraTime: 1
  };
  
  hideScreen(resultsScreen);
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

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ============================================
// DEBUG FUNCTIONS
// ============================================

window.getQuizStats = () => {
  return {
    category: selectedCategory,
    currentQuestion: currentQuestionIndex + 1,
    totalQuestions: quizQuestions.length,
    score: score,
    timeLeft: timeLeft,
    userAnswers: userAnswers,
    lifelines: lifelines
  };
};

window.viewLeaderboard = () => {
  console.table(getLeaderboard());
};

window.clearAllData = () => {
  if (confirm('Clear ALL quiz data including leaderboard?')) {
    localStorage.removeItem('quizLeaderboard');
    console.log('🗑️ All data cleared!');
  }
};

console.log('✅ Enhanced Quiz App Ready!');
console.log('💡 New Features:');
console.log('  - 4 Categories (JavaScript, HTML, CSS, General)');
console.log('  - 3 Lifelines (50/50, Skip, Extra Time)');
console.log('  - Leaderboard System');
console.log('  - Question Shuffling');
console.log('💡 Debug: Type getQuizStats() to see current state');
console.log('💡 Debug: Type viewLeaderboard() to see all scores');
