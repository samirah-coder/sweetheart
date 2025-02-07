const questions = [
    {
        question: "How much do you love me? 💕",
        options: ["A little", "A lot", "Infinity 💖", "Not at all 😢"],
        correct: 2
    },
    {
        question: "What is my favorite thing about you? 🥰",
        options: ["Your smile", "Your kindness", "Everything! ❤️", "Your jokes"],
        correct: 2
    },
    {
        question: "If I was sad, what would you do? 😢",
        options: ["Give a hug", "Buy chocolates 🍫", "Tell a joke", "All of the above 💕"],
        correct: 3
    },
    {
        question: "Final Question: Will you be my Valentine? 💝",
        options: ["Yes! 💘", "No... 😭"],
        correct: 0
    }
];

let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        document.body.innerHTML = "<h1 style='color:#fff; font-size:3rem;'>Yay! 🎉 Can't wait for our special day! 💕</h1>";
        startConfetti();
        return;
    }

    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add(index === q.correct ? "correct" : "wrong");
        btn.onclick = () => handleAnswer(index === q.correct);
        optionsDiv.appendChild(btn);
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Oops! Try again 😜");
    }
}

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        document.body.appendChild(confetti);
    }
}

loadQuestion();
