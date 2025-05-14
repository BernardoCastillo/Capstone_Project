// Values for the four boxes
const mostWorkout = document.getElementById('mostWorkout');
const mostIntensity = document.getElementById('mostIntensity');
const totalWorkout = document.getElementById('totalWorkout');
const totalTime = document.getElementById('totalTime');

// Event listener and button for clearing all the info
document.addEventListener('DOMContentLoaded', renderInfo)
document.getElementById('clearStorage').addEventListener('click', clearInfo);

// Load the info
function renderInfo(){
    mostIntensity.innerHTML = localStorage.getItem('commonIntensity');
    mostWorkout.innerHTML = localStorage.getItem('commonWorkout');
    totalWorkout.innerHTML = localStorage.getItem('workoutCount')
    totalTime.innerHTML = localStorage.getItem('totalTime');
}

// Clear all the info and remove items from localStorage.
function clearInfo(){
    localStorage.removeItem('commonIntensity');
    localStorage.removeItem('commonWorkout');
    localStorage.removeItem('workoutCount');
    localStorage.removeItem('totalTime');
    localStorage.removeItem('walkCount');
    localStorage.removeItem('runCount');
    localStorage.removeItem('swimCount');
    localStorage.removeItem('weightCount');
    localStorage.removeItem('hikeCount');
    localStorage.removeItem('yogaCount');
    localStorage.removeItem('rockCount');
    localStorage.removeItem('danceCount');
    localStorage.removeItem('lightCount');
    localStorage.removeItem('moderateCount');
    localStorage.removeItem('intenseCount');
    localStorage.removeItem('extremeCount');
    // Clear history container with a function in history.js
    clearHistory();
    // In order to make sure the items are gone, refresh the page.
    location.reload()
}