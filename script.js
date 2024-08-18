// Countdown Timer Script
function countdown() {
    const birthDate = new Date("2003-11-19T00:00:00Z");
    const now = new Date();
    const timeLeft = birthDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h2>Happy Birthday!</h2>";
    }
}

const timer = setInterval(countdown, 1000);

// Reveal Gift Function
function revealGift() {
    document.getElementById('gift').classList.toggle('hidden');
}

// Confetti Falling Animation
const confettiContainer = document.querySelector('.confetti');

for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiContainer.appendChild(confetti);
}
