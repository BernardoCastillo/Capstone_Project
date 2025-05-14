// Declaring variables
let timer;
let timerRunning;
// Timer values
let ms = document.getElementById('milliseconds');
let s = document.getElementById('seconds');
let m = document.getElementById('minutes')
let h = document.getElementById('hours');
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Timer functions
function startTimer(){
    if(!timerRunning){
        timerRunning = true;
        timer = setInterval(() => {
            milliseconds += 1;
            if(milliseconds == 100){
                milliseconds = 1;
                seconds += 1;
                renderTimer(milliseconds, seconds)
            }
            if(seconds == 60){
                seconds = 0;
                minutes += 1;
                renderTimer(milliseconds, seconds, minutes);
            }
            if(minutes == 60){
                minutes = 0;
                hours += 1;
                renderTimer(milliseconds, seconds, minutes, hours);
            }
            renderTimer(milliseconds);
        }, 10);
    }
}
function pauseTimer(){
    clearInterval(timer);
    timerRunning = false;
}
function clearTimer(){
    clearInterval(timer);
    timerRunning = false;
    milliseconds = 0;
    ms.innerHTML = "00"
    seconds = 0;
    s.innerHTML = "00";
    minutes = 0;
    m.innerHTML = "00";
    hours = 0;
    h.innerHTML = "00";
}
function renderTimer(milliseconds, seconds, minutes, hours){
    if(milliseconds < 10){
        ms.innerHTML = "0" + milliseconds;
    }else{
        ms.innerHTML = milliseconds;
    }
    if(seconds){
        if(seconds < 10){
            s.innerHTML = "0" + seconds;
        }else{
            s.innerHTML = seconds;
        }
    }
    if(minutes){
        if(minutes < 10){
            m.innerHTML = "0" + minutes;
        }else{
            m.innerHTML = minutes;
        }
    }
    if(hours){
        if(hours < 10){
            h.innerHTML = "0" + hours;
        }else{
            h.innerHTML = hours;
        }
    }
}

// Buttons/Event Listeners for clock
const startTimerBtn = document.getElementById('startTimer');
const pauseTimerBtn = document.getElementById('pauseTimer');
const clearTimerBtn = document.getElementById('clearTimer');
startTimerBtn.addEventListener('click', startTimer);
pauseTimerBtn.addEventListener('click', pauseTimer);
clearTimerBtn.addEventListener('click', clearTimer);