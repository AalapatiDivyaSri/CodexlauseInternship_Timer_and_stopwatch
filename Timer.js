// Timer variables
let timerInterval;
let timerRunning = false;
let timerSeconds = 0;

// Stopwatch variables
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

// Timer functions
function startTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(function () {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
        document.getElementById('startTimer').textContent = 'Pause';
        timerRunning = true;
    } else {
        clearInterval(timerInterval);
        document.getElementById('startTimer').textContent = 'Resume';
        timerRunning = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('startTimer').textContent = 'Start';
    timerRunning = false;
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timer').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Stopwatch functions
function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(function () {
            stopwatchSeconds++;
            updateStopwatchDisplay();
        }, 1000);
        document.getElementById('startStopwatch').textContent = 'Pause';
        stopwatchRunning = true;
    } else {
        clearInterval(stopwatchInterval);
        document.getElementById('startStopwatch').textContent = 'Resume';
        stopwatchRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    document.getElementById('startStopwatch').textContent = 'Start';
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;
    document.getElementById('stopwatch').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Event listeners
document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

document.getElementById('startStopwatch').addEventListener('click', startStopwatch);
document.getElementById('resetStopwatch').addEventListener('click', resetStopwatch);

// Initial display
updateTimerDisplay();
updateStopwatchDisplay();
