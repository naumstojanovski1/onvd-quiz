const totalPoints = 100;

const form = document.getElementById("quizForm");
const quizSection = document.getElementById("quizSection");
const startScreen = document.getElementById("startScreen");
const timerDisplay = document.getElementById("timer");
const summaryScreen = document.getElementById("summaryScreen");
const summaryDiv = document.getElementById("summary");
const navBar = document.getElementById("navigationBar");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const finalScreen = document.getElementById("finalScreen");
const finalScore = document.getElementById("finalScore");
const finalAnswered = document.getElementById("finalAnswered");
const finalSuccess = document.getElementById("finalSuccess");

let timer;
let timeLeft = 40 * 60;
let isFinalSubmitted = false;
let score = 0;
let answeredCount = 0;

function startQuiz() {
    startScreen.style.display = "none";
    finalScreen.style.display = "none";
    summaryScreen.style.display = "none";
    quizSection.style.display = "block";
    isFinalSubmitted = false;
    timeLeft = 40 * 60;
    score = 0;
    answeredCount = 0;

    form.innerHTML = "";
    navBar.innerHTML = "";

    generateQuiz();
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
    document.getElementById("container").style.display = "none";

    // Make quiz section visible
    document.getElementById("quizSection").style.display = "block";
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Време останато: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        finalSubmit();
    }
    timeLeft--;
}

function generateQuiz() {
    form.innerHTML = "";
    navBar.innerHTML = "";
    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.classList.add("question");
        div.id = `question${i}`;

        const title = document.createElement("h3");
        title.textContent = `${i + 1}. ${q.question}`;
        div.appendChild(title);

        const pointTag = document.createElement("div");
        pointTag.className = "points";
        pointTag.textContent = `${(totalPoints / questions.length).toFixed(2)} поени`;
        div.appendChild(pointTag);

        const answersDiv = document.createElement("div");
        answersDiv.classList.add("answers");
        q.answers.forEach((a, j) => {
            const id = `q${i}_a${j}`;
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = `q${i}`;
            input.value = j;
            input.id = id;
            input.addEventListener("change", () => updateNavItem(i));

            const span = document.createElement("span");
            span.textContent = ` ${a.text}`;

            label.appendChild(input);
            label.appendChild(span);
            answersDiv.appendChild(label);
        });

        div.appendChild(answersDiv);
        form.appendChild(div);

        const navItem = document.createElement("a");
        navItem.className = "nav-link";
        navItem.id = `nav${i}`;
        navItem.textContent = `${i + 1}`;
        navItem.href = `#question${i}`;
        navBar.appendChild(navItem);
    });
}

function updateNavItem(i) {
    const navItem = document.getElementById(`nav${i}`);
    const answered = [...document.querySelectorAll(`input[name=q${i}]:checked`)].length > 0;
    if (answered) {
        navItem.classList.add("answered");
    } else {
        navItem.classList.remove("answered");
    }
}

function showSummary() {
    quizSection.style.display = "none";
    summaryScreen.style.display = "flex";
    summaryDiv.innerHTML = "";
    questions.forEach((q, i) => {
        const answered = [...document.querySelectorAll(`input[name=q${i}]:checked`)].length > 0;
        const div = document.createElement("div");
        div.className = "summary-item";
        div.innerHTML = `<strong>${i + 1}. ${answered ? "Одговорено" : "Неодговорено"}</strong>`;

        div.onclick = () => {
            summaryScreen.style.display = "none";
            quizSection.style.display = "block";
            document.getElementById(`question${i}`).scrollIntoView();
        };
        summaryDiv.appendChild(div);
    });
}

function backToQuiz() {
    summaryScreen.style.display = "none";
    quizSection.style.display = "block";
}

function finalSubmit() {
    if (isFinalSubmitted) return;
    isFinalSubmitted = true;
    clearInterval(timer);
    score = 0;
    answeredCount = 0;

    questions.forEach((q, i) => {
        const selected = [...document.querySelectorAll(`input[name=q${i}]:checked`)].map(x => parseInt(x.value));
        const correct = q.answers.map((a, j) => a.correct ? j : null).filter(x => x !== null);
        const totalCorrect = correct.length;
        let questionScore = 0;
        let navColor = "red";

        q.answers.forEach((a, j) => {
            const checkbox = document.querySelector(`#q${i}_a${j}`);
            checkbox.disabled = true;
            if (a.correct) checkbox.parentElement.classList.add("correct");

            if (selected.includes(j)) {
                if (a.correct) {
                    questionScore += 100 / totalCorrect;
                } else {
                    questionScore -= 15;
                    checkbox.parentElement.classList.add("incorrect");
                }
            }
        });

        if (selected.length > 0) answeredCount++;

        const navItem = document.getElementById(`nav${i}`);
        if (questionScore > 90) navColor = "green";
        else if (questionScore >= 40) navColor = "gold";
        else navColor = "red";

        navItem.style.backgroundColor = navColor;
        navItem.style.color = "#fff";

        score += (questionScore * (totalPoints / questions.length)) / 100;
    });

    const percent = (score).toFixed(2);
    const answered = `${answeredCount}/${questions.length}`;
    const successRate = ((answeredCount / questions.length) * 100).toFixed(0);

    summaryScreen.style.display = "none";
    quizSection.style.display = "none";
    startScreen.style.display = "none";

    finalScore.textContent = `Поени: ${percent} од 100`;
    finalAnswered.textContent = `Одговорени прашања: ${answered}`;
    finalSuccess.textContent = `Процент на успех: ${successRate}%`;

    // Replace Submit button with Restart button
    submitBtn.style.display = "none";
    restartBtn.style.display = "inline-block";

    finalScreen.style.display = "block";
}

function reviewAnswers() {
    finalScreen.style.display = "none";
    quizSection.style.display = "block";
    submitBtn.style.display = "none"; // Hide submit button
    restartBtn.style.display = "inline-block"; // Show restart button
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartQuiz() {
    location.reload(); // Restart the quiz
}
