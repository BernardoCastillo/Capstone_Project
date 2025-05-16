# JavaScript Technical Analysis
## Variable Naming & Indentation
### Variable Naming
```js
// Workout.js

// Containers
const workoutContainer = document.getElementById('workoutContainer');
```
### Indentation
```js
// History.js

if(workoutType){
        // Create a new object
        const newWorkout = {
            id: Date.now(), // unique id using exact current time
            type: workoutType,
            time: workoutTime,
            intensity: workoutIntensity,
            dateMade: new Date().toLocaleDateString(),
            timeMade: new Date().toLocaleTimeString()
        };
        // Add workout to array
        workouts.push(newWorkout);
    }
```
## Function Naming & Modularity
```js
// History.js

function addWorkout(type, time, intensity){
    const workoutType = type;
    const workoutTime = time;
    const workoutIntensity = intensity;
    // Make sure there is a value
    if(workoutType){
        // Create a new object
        const newWorkout = {
            id: Date.now(), // unique id using exact current time
            type: workoutType,
            time: workoutTime,
            intensity: workoutIntensity,
            dateMade: new Date().toLocaleDateString(),
            timeMade: new Date().toLocaleTimeString()
        };
        // Add workout to array
        workouts.push(newWorkout);
    }

    // call function to save to localStorage
    saveWorkoutHistory();

    // Update UI
    renderWorkoutHistory(workouts);    
}
```
## Array & Objects Usage
### Array
```js
// history.js
let workouts = []; // Stating array
```
### Object
```js
// history.js
if(workoutType){
        // Create a new object
        const newWorkout = {
            id: Date.now(), // unique id using exact current time
            type: workoutType,
            time: workoutTime,
            intensity: workoutIntensity,
            dateMade: new Date().toLocaleDateString(),
            timeMade: new Date().toLocaleTimeString()
        };
}
```
## Array Methods
```js
// history.js

// Add workout to array
workouts.push(newWorkout);
```
## Looping/Iteration
```js
// history.js

workouts.forEach(function(workout){
        const div = document.createElement('div'); 
        div.className = "flexHistory"
        const div2 = document.createElement('div');  
        div2.className = "historyLeft";
        const div3 = document.createElement('div');  
        div3.className = "historyRight";              
        // Create divs with text
        const divTitle = document.createElement('div');
        const divType = document.createElement('div');
        const divTime = document.createElement('div');
        const divIntensity = document.createElement('div');
        const divDay = document.createElement('div');
        const divDate = document.createElement('div');
        divTitle.textContent = "Workout";
        let divTypeText = workout.type;
        if(divTypeText == "rockClimbing"){
            divType.textContent = "Rock Climbing";
        }else{
            divType.textContent = capitalFirstLetter(divTypeText);
        }
        divTime.textContent = workout.time + " " + "minutes";
        let divIntensityText = workout.intensity
        divIntensity.textContent = capitalFirstLetter(divIntensityText);
        divDay.textContent = workout.dateMade;
        divDate.textContent = workout.timeMade;
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener('click', function(){
            deleteWorkoutHistory(workout.id);
        });

        // Append elements
        div.appendChild(div2);
        div.appendChild(div3);
        div2.appendChild(divTitle);
        div2.appendChild(divDay);
        div2.appendChild(divDate);
        div3.appendChild(divType);
        div3.appendChild(divTime);
        div3.appendChild(divIntensity);
        div.appendChild(deleteButton);
        // Append elements to HTML
        pastWorkouts.appendChild(div);  
    })
```
## JSON Data Handling
```js
// history.js

function saveWorkoutHistory(){
    localStorage.setItem('workouts', JSON.stringify(workouts));
}
workouts = JSON.parse(savedWorkouts);
```
## Web Storage (local/session)
```js
// workout.js

localStorage.setItem("workoutType", workoutType);
localStorage.setItem("workoutTime", workoutTime);
localStorage.setItem("workoutIntensity", workoutIntensity);

const workoutType = localStorage.getItem('workoutType');
const workoutTime = localStorage.getItem('workoutTime');
const workoutIntensity = localStorage.getItem('workoutIntensity');
```
## Saving/Retrieving User Data
```js
// workout.js

localStorage.setItem("workoutType", workoutType);
// history.js

const workoutType = localStorage.getItem('workoutType');
```
## DOM Manipulation
```js
// history.js (renderWorkoutHistory())

const div = document.createElement('div'); 
div.className = "flexHistory"
const div2 = document.createElement('div');  
div2.className = "historyLeft";
const div3 = document.createElement('div');  
div3.className = "historyRight";              
// Create divs with text
const divTitle = document.createElement('div');
const divType = document.createElement('div');
const divTime = document.createElement('div');
const divIntensity = document.createElement('div');
const divDay = document.createElement('div');
const divDate = document.createElement('div');
```
## CSS Manipulation via JS
```js
// workout.js

toWorkouts.addEventListener('click', function(){
    workoutContainer.style.display = "block";
    infoContainer.style.display = "none";
    timerContainer.style.display = "none";
    historyContainer.style.display = "none";
});
```
## Comments & Code Readability
```js
// history.js

// Greets users if there is localStorage data showing they have used the website before.
// totalTime MUST be included in every workout, meaning that if the user has used the app that they have a totalTime unless they have cleared their data.
if(localStorage.getItem('totalTime')){
    alert("Welcome back!");
}
// DOM Elements
const pastWorkouts = document.getElementById('pastWorkouts');
const historyCount = document.getElementById('historyCount');
const deleteAllButton = document.getElementById('deleteAllHistory')
// Function to get the DOM elements
function getDOM(){
    const workoutType = localStorage.getItem('workoutType');
    const workoutTime = localStorage.getItem('workoutTime');
    const workoutIntensity = localStorage.getItem('workoutIntensity');
    // Call on addWorkout to add the workouts based off values
    addWorkout(workoutType, workoutTime, workoutIntensity);
}
```
## Regex Validation
```js
// search.js

// Return true if input is a number for timeMatch
function isNumber(value){
    // checks if input is a number
    return /\d/.test(value);
}
```
## Timer & Date Object
```js
// history.js

dateMade: new Date().toLocaleDateString(),
timeMade: new Date().toLocaleTimeString()
```
```js
// timer.js

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
```
## Math, String, Random Methods (uses JS utilities)
```js
// history.js
// A utility to capitalize the first letter of the word

// Function to capitalize the first letter of a word
function capitalFirstLetter(word){
    let splitWord = word.split("");
    let firstLetter = splitWord[0].toUpperCase();
    splitWord[0] = firstLetter;
    word = splitWord.toString();
    let newWord = word.replace(/,/g, "")
    return newWord;
}
```
## Event Listeners & Shortcuts
```js
// workout.js

submitBtn.addEventListener('click', submitWorkout);
document.body.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        submitWorkout();
    }
});
```
## Real-time Search & History
### Real-time Search
```js
// search.js

searchInput.addEventListener('input', searchFor);
```
### History
```js
// history.js

// Render workout history and create them using document.createElement()
function renderWorkoutHistory(workouts){
    // Clear current list
    pastWorkouts.innerHTML  = '';

    // Create the entire history
    workouts.forEach(function(workout){
        const div = document.createElement('div'); 
        div.className = "flexHistory"
        const div2 = document.createElement('div');  
        div2.className = "historyLeft";
        const div3 = document.createElement('div');  
        div3.className = "historyRight";              
        // Create divs with text
        const divTitle = document.createElement('div');
        const divType = document.createElement('div');
        const divTime = document.createElement('div');
        const divIntensity = document.createElement('div');
        const divDay = document.createElement('div');
        const divDate = document.createElement('div');
        divTitle.textContent = "Workout";
        let divTypeText = workout.type;
        if(divTypeText == "rockClimbing"){
            divType.textContent = "Rock Climbing";
        }else{
            divType.textContent = capitalFirstLetter(divTypeText);
        }
        divTime.textContent = workout.time + " " + "minutes";
        let divIntensityText = workout.intensity
        divIntensity.textContent = capitalFirstLetter(divIntensityText);
        divDay.textContent = workout.dateMade;
        divDate.textContent = workout.timeMade;
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener('click', function(){
            deleteWorkoutHistory(workout.id);
        });

        // Append elements
        div.appendChild(div2);
        div.appendChild(div3);
        div2.appendChild(divTitle);
        div2.appendChild(divDay);
        div2.appendChild(divDate);
        div3.appendChild(divType);
        div3.appendChild(divTime);
        div3.appendChild(divIntensity);
        div.appendChild(deleteButton);
        // Append elements to HTML
        pastWorkouts.appendChild(div);  
    })
    updateWorkoutCount(workouts);
}
```
## CRUD Functionality
```js
// history.js (capitalFirstLetter())

splitWord[0] = firstLetter;
```
