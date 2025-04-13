const paragraph = `Dishant is a fast and accurate typist who challenges himself to type even faster. In this typing test, you will have only thirty seconds to type as much of this paragraph as you can. Focus on your accuracy and type as quickly as possible to get the best words per minute score.`;

let timer;
let timeLeft = 30;
let testStarted = false;

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

quoteEl.innerText = paragraph;

function startTimer() {
  if (testStarted) return;
  testStarted = true;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endTest();
    }
  }, 1000);
}

function endTest() {
  inputEl.disabled = true;
  const typedText = inputEl.value.trim();
  const wordsTyped = typedText.split(/\s+/).filter(word => word).length;
  const wpm = Math.round(wordsTyped * 2); // because test is 30 seconds
  resultEl.innerHTML = `📝 Words typed: <strong>${wordsTyped}</strong><br>⚡ WPM: <strong>${wpm}</strong>`;
}

function resetTest() {
  clearInterval(timer);
  inputEl.disabled = false;
  inputEl.value = "";
  timeLeft = 30;
  testStarted = false;
  timerEl.innerText = `Time left: ${timeLeft}s`;
  resultEl.innerText = "";
  inputEl.focus();
}

inputEl.addEventListener("keydown", () => {
  if (!testStarted) {
    startTimer();
  }
});

resetTest(); // start fresh when loaded
