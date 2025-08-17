// কুইজ ডেটা
const quizData = [
  {
    question: "JavaScript কোন ধরনের ভাষা?",
    options: ["Markup", "Programming", "Styling", "Database"],
    answer: "Programming",
  },
  {
    question: "HTML-এর পূর্ণরূপ কী?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markup Language",
      "None",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "CSS কী কাজে লাগে?",
    options: [
      "লেআউট ডিজাইন",
      "ডেটা সংরক্ষণ",
      "সার্ভার চালানো",
      "ক্যালকুলেশন করা",
    ],
    answer: "লেআউট ডিজাইন",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
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
  questionEl.textContent = "✅ কুইজ শেষ!";
  optionsEl.innerHTML = "";
  resultEl.textContent = `তোমার স্কোর: ${score} / ${quizData.length}`;
}

// শুরু করো
loadQuestion();
