const ball = document.getElementById("ball");
const shootBtn = document.getElementById("shootBtn");
const message = document.getElementById("message");

// Paramètres du tir
let speed = 6;
let interval;

// Fonction pour lancer le ballon
function shoot() {
    clearInterval(interval);
    let pos = 20;

    interval = setInterval(() => {
        pos += speed;
        ball.style.bottom = pos + "px";

        // Si le ballon touche le but
        if (pos >= 200 && ball.offsetLeft > 200 && ball.offsetLeft < 400) {
            message.textContent = "⚽ But ! 🎉";
            clearInterval(interval);
        }

        // Si dépasse la zone de jeu
        if (pos > 280) {
            message.textContent = "❌ Raté ! Essaie encore";
            clearInterval(interval);
        }
    }, 20);
}

// Quand on clique sur le bouton
shootBtn.addEventListener("click", () => {
    message.textContent = "";
    shoot();
});
