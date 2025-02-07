let questions = [
    "Do you like cats? 🐱",
    "Do you love surprises? 🎁",
    "Would you like a lifetime of happiness? 💕",
    "Are you ready for the big question? 😍"
];

let currentQuestion = 0;

function nextQuestion(answer) {
    if (!answer) {
        alert("Aww, you need to love cats! Try again. 🐱💖");
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion];
    } else {
        document.body.innerHTML = `
            <h1 style="color:#fff; font-size:3rem;">Will You Be My Valentine? 💖🐱</h1>
            <button class="yes" onclick="acceptProposal()">Yes</button>
            <button class="no" onmouseover="moveButton()">No</button>
            <div class="cat-container">
                <img id="catGif" src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Happy Cat">
            </div>
        `;
    }
}

function acceptProposal() {
    document.body.innerHTML = "<h1 style='color:#fff; font-size:3rem;'>Yay! 🎉 You said YES! 💕🐱</h1>";
    startConfetti();
}

function moveButton() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    document.querySelector('.no').style.position = "absolute";
    document.querySelector('.no').style.left = x + 'px';
    document.querySelector('.no').style.top = y + 'px';
}

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        document.body.appendChild(confetti);
    }
}
