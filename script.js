// Малко JS за забавление 🎉

// 1) Сменяща се мотивираща фраза
const facts = [
    "HTML описва структурата на страницата.",
    "CSS я прави красива.",
    "JavaScript я прави жива!",
    "Всеки експерт някога е бил начинаещ.",
    "Ctrl + S е най-добрият ти приятел.",
    "Ако не знаеш, питай!",
    "Практиката прави перфектния."

];

const factEl = document.getElementById("fact");
const factBtn = document.getElementById("factBtn");

factBtn.addEventListener("click", () => {
    const random = facts[Math.floor(Math.random() * facts.length)];
    factEl.textContent = random;
    factEl.classList.remove("pop");
    void factEl.offsetWidth; // рестартира анимацията
    factEl.classList.add("pop");
});

// 2) Часовник в реално време
const clockEl = document.getElementById("clock");

function updateClock() {
    clockEl.textContent = new Date().toLocaleTimeString("bg-BG");
}
updateClock();
setInterval(updateClock, 1000);

// 3) Конфети при клик върху заглавието
const title = document.querySelector("h1");

title.addEventListener("click", () => {
    for (let i = 0; i < 30; i++) {
        createConfetti();
    }
});

function createConfetti() {
    const colors = ["#2c6fb5", "#7b4fd1", "#22c55e", "#f59e0b", "#ef4444"];
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4000);
}
