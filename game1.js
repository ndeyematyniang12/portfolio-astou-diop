let level = 1;
let score = 0;
let timer = 0;
let interval;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let gridSize = 4;

const board = document.getElementById("game-board");

function startGame() {
    level = 1;
    score = 0;
    gridSize = 4;
    updateStats();
    startTimer();
    createBoard();
}

function startTimer() {
    timer = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        timer++;
        document.getElementById("timer").innerText = timer;
    }, 1000);
}

function updateStats() {
    document.getElementById("level").innerText = level;
    document.getElementById("score").innerText = score;
}

function createBoard() {
    board.innerHTML = "";
    let totalCards = gridSize * gridSize;
    let values = [];

    for (let i = 1; i <= totalCards / 2; i++) {
        values.push(i);
        values.push(i);
    }

    values.sort(() => 0.5 - Math.random());

    values.forEach(value => {
        let card = document.createElement("div");
        card.classList.add("card", "hidden");
        card.dataset.value = value;
        card.innerText = value;
        card.onclick = () => flipCard(card);
        board.appendChild(card);
    });
}

function flipCard(card) {
    if (lockBoard || !card.classList.contains("hidden")) return;

    card.classList.remove("hidden");

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        checkMatch();
    }
}

function checkMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        score += 10;
        resetTurn();
        checkLevelUp();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.add("hidden");
            secondCard.classList.add("hidden");
            resetTurn();
        }, getAdaptiveDelay());
    }

    updateStats();
}

function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function checkLevelUp() {
    if (document.querySelectorAll(".hidden").length === 0) {
        level++;
        gridSize++;
        createBoard();
        updateStats();
    }
}

function getAdaptiveDelay() {
    // IA adapte la vitesse selon performance
    if (timer < 20) return 300;
    if (timer < 40) return 700;
    return 1200;
}
