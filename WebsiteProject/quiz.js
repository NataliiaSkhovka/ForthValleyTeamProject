// Quiz
const questions = [
  {
    question: "What is the primary purpose of the Data Protection Act 2018 (DPA 2018)?",
    options: [
      "To protect the environment from technological waste",
      "To regulate how personal data is controlled and processed",
      "To monitor the internet usage of citizens",
    ],
    correct: 1, // Corrected indexing
  },
  {
    question: "What must UK data controllers do under the DPA 2018?",
    options: [
      "Report data breaches within 72 hours",
      "Retain personal data indefinitely",
      "Ignore minor data breaches if no harm is done",
    ],
    correct: 0,
  },
  {
    question: "What is the maximum fine for non-compliance with the DPA 2018?",
    options: [
      "£1 million",
      "£10 million",
      "£17.5 million or 4% of global turnover",
    ],
    correct: 2,
  },
  {
    question: "How is the UK-GDPR related to the EU-GDPR?",
    options: [
      "It is tailored to fit UK domestic laws while reusing EU-GDPR components",
      "It replaces the EU-GDPR globally",
      "It’s a completely separate regulation with no similarities",
    ],
    correct: 0,
  },
  {
    question: "Which act prohibits unauthorized system access in the UK?",
    options: [
      "Investigatory Powers Act 2016",
      "Computer Misuse Act 1990",
      "Freedom of Information Act",
    ],
    correct: 1,
  },
  {
    question: "What is ethical hacking?",
    options: [
      "Authorized practice of identifying and exploiting vulnerabilities",
      "Hacking into competitors' systems to gain advantages",
      "Unauthorized hacking to exploit systems",
    ],
    correct: 0,
  },
  {
    question: "What is the primary purpose of ethical hacking?",
    options: [
      "To steal sensitive information",
      "To improve security by identifying vulnerabilities",
      "To showcase hacking skills publicly",
    ],
    correct: 1,
  },
  {
    question: "Which of the following is a technique used in ethical hacking?",
    options: [
      "Installing ransomware",
      "Phishing emails to compromise users",
      "Penetration testing",
    ],
    correct: 2,
  },
  {
    question: "Which advanced cyber threat involves well-funded, skilled groups targeting organizations?",
    options: [
      "Advanced Persistent Threats (APTs)",
      "Ransomware",
      "Phishing",
    ],
    correct: 0,
  },
  {
    question: "What is the purpose of digital forensics?",
    options: [
      "Investigating and collecting evidence of cybercrimes",
      "Creating hacking tools",
      "Teaching employees about cybersecurity",
    ],
    correct: 0,
  },
  {
    question: "What is the first step in securing a digital crime scene?",
    options: [
      "Isolating the scene",
      "Deactivating all systems",
      "Documenting evidence",
    ],
    correct: 0,
  },
  {
    question: "What tool ensures digital evidence remains unaltered during collection?",
    options: ["Write-blocker", "Keylogger", "Firewall"],
    correct: 0,
  },
  {
    question: "What is a major challenge in securing a digital crime scene?",
    options: [
      "Easily accessible tools",
      "Volatile data loss",
      "Straightforward encryption methods",
    ],
    correct: 1,
  },
  {
    question: "What is a bug bounty program?",
    options: [
      "A legal framework for hacking into systems",
      "A reward system for reporting security vulnerabilities",
      "An agreement to pay hackers to stop attacks",
    ],
    correct: 1,
  },
  {
    question: "What is a zero-day exploit?",
    options: [
      "An exploit released after a patch is available",
      "A vulnerability known only to ethical hackers",
      "An unknown vulnerability exploited before a patch is released",
    ],
    correct: 2,
  },
  {
    question: "What is an ethical concern in climate-related legislation?",
    options: [
      "Balancing environmental sustainability with economic growth",
      "Completely eliminating industrial growth",
      "Protecting economic growth while ignoring environmental effects",
    ],
    correct: 0,
  },
  {
    question: "What is one ethical challenge associated with artificial intelligence (AI)?",
    options: [
      "Preventing bias and discrimination in algorithms",
      "Restricting AI development in all sectors",
      "Ensuring AI replaces all human jobs",
    ],
    correct: 0,
  },
  {
    question: "What is a central concern in bioethics legislation?",
    options: [
      "Whether AI can process genetic data",
      "The moral implications of altering the human genome",
      "The use of encryption for genetic research",
    ],
    correct: 1,
  },
  {
    question: "What is one criticism of the Computer Misuse Act 1990?",
    options: [
      "It hinders ethical hackers from identifying vulnerabilities",
      "It excludes mobile devices from the definition of computers",
      "It fails to criminalize ransomware attacks",
    ],
    correct: 0,
  },
  {
    question: "Which of the following activities is prosecuted under the Computer Misuse Act 1990?",
    options: [
      "Ethical hacking with a company’s consent",
      "Ransomware attacks on personal data",
      "Public reporting of data breaches",
    ],
    correct: 1,
  },
];

// Global Variables
let currentQuestionIndex = 0; // Index of the current question
let answers = []; // Stores the user's answers

// Elements
const progress = document.getElementById("progress");
const questionContainer = document.getElementById("question-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

// Update progress bar text
function updateProgress() {
    progress.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
}

// Render the current question
function renderQuestion() {
    questionContainer.innerHTML = ""; // Clear the container
    const questionData = questions[currentQuestionIndex];

    const questionElement = document.createElement("h3");
    questionElement.textContent = questionData.question;

    const optionsElement = document.createElement("div");
    optionsElement.classList.add("options");

    questionData.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option");

        if (answers[currentQuestionIndex] === index) {
            optionButton.classList.add("selected");
        }

        optionButton.onclick = () => {
            // Save the user's answer
            answers[currentQuestionIndex] = index;

            // Provide immediate feedback
            if (index === questionData.correct) {
                optionButton.style.backgroundColor = "green";
                optionButton.style.color = "white";
            } else {
                optionButton.style.backgroundColor = "red";
                optionButton.style.color = "white";

                // Highlight the correct answer
                const correctButton = optionsElement.children[questionData.correct];
                correctButton.style.backgroundColor = "green";
                correctButton.style.color = "white";
            }

            // Disable all options after selection
            Array.from(optionsElement.children).forEach((btn) => {
                btn.disabled = true;
            });

            // Automatically move to results if it's the last question
            if (currentQuestionIndex === questions.length - 1) {
                setTimeout(showResults, 1000);
            } else {
                nextButton.disabled = false;
            }
        };

        optionsElement.appendChild(optionButton);
    });

    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(optionsElement);
}

// Shuffle questions for randomness
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Animate the score circle
function animateScoreCircle(percentage) {
  const scoreRing = document.getElementById("score-ring");
  const totalLength = 314; // Total circumference of the circle (2 * Math.PI * radius)

  // Calculate the offset based on the percentage
  const offset = totalLength - (totalLength * percentage) / 100;

  // Animate the stroke-dashoffset property
  scoreRing.style.transition = "stroke-dashoffset 1.5s ease-out";
  scoreRing.style.strokeDashoffset = offset;

  // Update the score percentage text
  const scoreText = document.getElementById("score-percentage");
  scoreText.textContent = `${percentage}%`;
}


// Display the quiz results
// Display the quiz results
function showResults() {
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  // Clear previous result content
  resultContainer.innerHTML = "";

  // Calculate score
  let correctAnswers = answers.filter((ans, i) => ans === questions[i].correct).length;
  const score = (correctAnswers / questions.length) * 100;

  // Create the score circle container
  const scoreCircle = document.createElement("div");
  scoreCircle.classList.add("score-circle");
  scoreCircle.innerHTML = `
      <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" stroke="#ddd" stroke-width="10" fill="none"></circle>
          <circle id="score-ring" cx="60" cy="60" r="50" stroke="#4facfe" stroke-width="10" fill="none"
              stroke-dasharray="314" stroke-dashoffset="314" 
              style="transform: rotate(-90deg); transform-origin: 50% 50%;"></circle>
          <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="18px" id="score-percentage">0%</text>
      </svg>
  `;

  // Append the score circle to the result content
  const resultContent = document.createElement("div");
  resultContent.classList.add("result-content");
  resultContent.appendChild(scoreCircle);

  // Create the score message
  const scoreMessage = document.createElement("p");
  scoreMessage.id = "final-score";
  scoreMessage.classList.add("score");
  if (score < 75) {
      scoreMessage.textContent = `You scored ${correctAnswers} out of ${questions.length} (${Math.round(score)}%) - Better luck next time!`;
  } else {
      scoreMessage.textContent = `You scored ${correctAnswers} out of ${questions.length} (${Math.round(score)}%) - Well done!`;
  }

  // Append the score message under the circle
  resultContent.appendChild(scoreMessage);

  // Animate the score circle
  setTimeout(() => animateScoreCircle(score), 200); // Add slight delay for smooth animation

  // Create the "Retake Quiz" button
  const retakeButton = document.createElement("button");
  retakeButton.textContent = "Retake Quiz";
  retakeButton.id = "retake-quiz-button";
  retakeButton.classList.add("retake-bt");
  retakeButton.onclick = resetQuiz;

  // Append the retake button to the result content
  resultContent.appendChild(retakeButton);

  // Append the result content to the result container
  resultContainer.appendChild(resultContent);

  // Disable navigation buttons
  prevButton.disabled = true;
  nextButton.disabled = true;
}


// Reset the quiz to the beginning
function resetQuiz() {
    answers = new Array(questions.length).fill(null); // Reset answers
    startQuiz(); // Restart the quiz
}

// Start or restart the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    shuffleQuestions();
    updateProgress();
    renderQuestion();
    prevButton.disabled = true;
    nextButton.disabled = true;
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
}

// Navigation button logic
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateProgress();
        renderQuestion();
        prevButton.disabled = false;
    }
});

prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateProgress();
        renderQuestion();
        nextButton.disabled = false;
    }
    if (currentQuestionIndex === 0) {
        prevButton.disabled = true;
    }
});

// Initialize the quiz
startQuiz();
