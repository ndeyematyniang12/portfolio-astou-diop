let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");

let p1HP = 100;
let p2HP = 100;

let p1Pos = 100;
let p2Pos = 600;

function updatePositions() {
    p1.style.left = p1Pos + "px";
    p2.style.left = p2Pos + "px";
}

document.addEventListener("keydown", function(e) {

    // PLAYER 1
    if (e.key === "a") p1Pos -= 20;
    if (e.key === "d") p1Pos += 20;
    if (e.key === "w") attack(p1, p2, 2);

    // PLAYER 2
    if (e.key === "ArrowLeft") p2Pos -= 20;
    if (e.key === "ArrowRight") p2Pos += 20;
    if (e.key === "ArrowUp") attack(p2, p1, 1);

    updatePositions();
});

function attack(attacker, defender, defenderNumber) {

    attacker.classList.add("punch");

    setTimeout(() => {
        attacker.classList.remove("punch");

        if (Math.abs(p1Pos - p2Pos) < 200) {

            defender.classList.add("hit");

            let damage = Math.floor(Math.random() * 10) + 5;

            if (defenderNumber === 1) {
                p1HP -= damage;
                document.getElementById("p1Bar").style.width = p1HP + "%";
            } else {
                p2HP -= damage;
                document.getElementById("p2Bar").style.width = p2HP + "%";
            }

            setTimeout(() => defender.classList.remove("hit"), 200);

            checkWinner();
        }

    }, 200);
}

function checkWinner() {
    if (p1HP <= 0) alert("Joueur 2 GAGNE !");
    if (p2HP <= 0) alert("Joueur 1 GAGNE !");
}
