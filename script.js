let timer;
let timeLeft = 25 * 60; 
let totalTime = 25 * 60;
const display = document.getElementById('time-left');
const circle = document.querySelector('.progress-ring__circle');
const circumference = 90 * 2 * Math.PI;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
 
    const offset = circumference - (timeLeft / totalTime) * circumference;
    circle.style.strokeDashoffset = offset;
}

function startTimer() {
    if (timer) return; 
    
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
            alert("Time's up! Take a break.");
        }
    }, 1000);
}

function setTimer(minutes) {
    clearInterval(timer);
    timer = null;
    timeLeft = minutes * 60;
    totalTime = timeLeft;
    document.body.style.background = minutes === 25 ? '#e74c3c' : '#2ecc71';
    updateDisplay();
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('reset-btn').addEventListener('click', () => setTimer(25));

updateDisplay(); 