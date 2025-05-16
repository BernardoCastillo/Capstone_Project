# Capstone Project
<!-- Table of Contents -->
## Table of Contents
- [Overview](#overview)
- [HTML Structure](#html-structure)
    - [Key HTML Components](#key-html-components)
- [CSS Styling](#css-styling)
    - [Key CSS Components](#key-css-components)
- [JavaScript Functionality](#javascript-functionality)
    - [History](#history-script)
        - [Key History Components](#key-history-components)
    - [Search](#search-script)
        - [Key Search Components](#key-search-components)
    - [Workout](#workout-script)
        - [Key Workout Components](#key-workout-components)
    - [Timer](#timer-script)
        - [Key Timer Components](#key-timer-components)
    - [Info](#info-script)  
        - [Key Info Components](#key-info-components)
## Overview
Students were tasked with creating a capstone project of their choice. This capstone project is a tracker meant to track your workouts and which ones you repeat the most. This website also has a built in timer, along with using localStorage for keeping track of the user's history, and allowing them to clear their history.
## HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workout Tracker</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <main>
        <div id="navbar">
            <h1>Workout Tracker</h1>
            <div id="links">
                <p id="toWorkouts" class="link">Workouts</p>
                <p id="toHistory" class="link">History</p>
                <p id="toTimer" class="link">Timer</p>
                <p id="toInfo" class="link">Info</p>
            </div>
        </div>
        <div id="workoutContainer">
            <h2>Workouts:</h2>
            <label for="workoutSelection">Select Workout:</label>
            <br>
            <select name="workoutSelection" id="workoutSelection">
                <option value="walking">Walking</option>
                <option value="running">Running</option>
                <option value="swimming">Swimming</option>
                <option value="weights">Weights</option>
                <option value="hiking">Hiking</option>
                <option value="yoga">Yoga</option>
                <option value="rockClimbing">Rock Climbing</option>
                <option value="dancing">Dancing</option>
            </select>
            <br>
            <label for="time">Select Workout Time: (minutes)</label>
            <br>
            <input type="number" id="workoutTime">
            <br>
            <label for="intensitySelection">Select Intensity:</label>
            <br>
            <select name="intensitySelection" id="intensitySelection">
                <option value="light">Light</option>
                <option value="moderate">Moderate</option>
                <option value="intense">Intense</option>
                <option value="extreme">Extreme</option>
            </select>
            <br>
            <div id="workoutWarning">Enter a time value greater than 0.</div>
            <button id="completeTracking">Complete</button>
        </div>
        <div id="historyContainer">
            <div class="historyArea">
                <h2>History</h2>
                <p class="faded">Newest workouts appear at the bottom...</p>
                <label for="search">Search by workout type, time, or intensity.</label>
                <br>
                <input type="text" placeholder="Search" id="search">
                <div id="pastWorkouts">

                </div>
                <div id="pastCount">
                    <span id="historyCount"></span>
                </div>
                <button id="deleteAllHistory">Delete All</button>
            </div>
        </div>
        <div id="timerContainer">
            <div class="timerArea" id="clockContainer">
                <h2>Timer</h2>
                <p id="timer"><span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>:<span id="milliseconds">00</span></p>
                <div class="timerButtons">
                    <button id="startTimer" class="timerBtn">Start</button>
                    <button id="pauseTimer" class="timerBtn">Pause</button>
                    <button id="clearTimer" class="timerBtn">Clear</button>
                </div>
            </div>
        </div>
        <div id="infoContainer">
            <div class="square">
                <div class="item">Most Common Workout: 
                    <div class="infoBox">
                        <div id="mostWorkout" class="infoValue"></div>
                    </div>
                </div>
                <div class="item">Most Common Intensity: 
                    <div class="infoBox">
                        <div id="mostIntensity" class="infoValue"></div>
                    </div>
                </div>
            </div>
            <div class="square">
                <div class="item">Total Number of Workouts: 
                    <div class="infoBox">
                        <div id="totalWorkout" class="infoValue"></div>
                    </div>
                </div>
                <div class="item">Total Workout Time: (minutes) 
                    <div class="infoBox">
                        <div id="totalTime" class="infoValue"></div>
                    </div>
                </div>
            </div>
            <button id="clearStorage">Clear Info</button>
        </div>
        <footer class="copyright">
            &copy; 2025 Bernardo Castillo. All Rights Reserved
        </footer>
    </main>
    <script src="javascript-files/history.js"></script>
    <script src="javascript-files/search.js"></script>
    <script src="javascript-files/workout.js"></script>
    <script src="javascript-files/timer.js"></script> 
    <script src="javascript-files/info.js"></script>  
</body>
</html>
```
### Key HTML Components
- 4 `containers`, all with ids.
- A `navbar` to traverse between all 4 `containers`, the `navbar` contains 4 different `p` tags used as links. This `navbar` is always shown no matter what container is active.
- The `workoutContainer` is used to hold the values for every workout,  with a `select` tag, `input` tag, and a 2nd `select` tag used to hold the workout type, time, and intensity, with finally a `button` used to submit.
- The `historyContainer` is used to show the values of the history. The history is constantly being loaded in the `localStorage` and also includes a search bar allowing you to search for workouts in the history by workout type, time, or intensity.
- The `timerContainer` is a container to hold the timer, the timer can be paused or cleared, along with working even when switching `containers` through the `links` in `navbar`.
- The `infoContainer` holds all the values of the user. It contains the most common workout, the most common intensity, the total amount of workouts, and the total workout time, which is all saved in the localStorage. Along with a clear info `button` that will reset everything.
- Finally a `footer` to show the copyright statement, which stays no matter which container is being shown.

## CSS Styling
```css
/* Start of items that are constant. */
*{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}
body{
    margin: 0 auto;
    padding: 0 auto;
    width: 50%;
}
main{
    border: 2px solid black;
    margin: 70px 50px 50px 100px;
    height: auto;
}
#navbar{
    display: flex;
    align-items: start;
    justify-content: space-between;
    background-color: black;
    color: white;
    padding: 5px;
}
.copyright{
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px;
}
#links{
    display: flex;
    gap: 5px;
}
.link{
    text-decoration: underline;
    margin: 15px;
    cursor: pointer;
}
/* End of items that are constant. */
/* Start of Workout Area */
#workoutContainer h2{
    margin: 15px;
    font-size: 40px;
}
#workoutContainer{
    text-align: center;
}
#workoutSelection{
    margin-bottom: 20px;
    cursor: pointer;
}
input{
    margin-bottom: 20px;
}
#completeTracking{
    background-color: green;
    color: white;
    font-size: 20px;
    padding: 5px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: background-color 0.5s;
}
#completeTracking:hover{
    background: darkgreen;
}
#workoutWarning{
    display: none;
    color: red;
    margin: 0px 0px 15px 0px;
}
/* End of Workout Area */

/* Start of Timer Area */
#timerContainer{
    display: none;
    text-align: center;
}
.timerFlex{
    display: flex;
    justify-content: center;
    gap: 20px;
    color: rgb(80, 80, 80);
    font-size: 30px;
}
#timerContainer h2{
    font-size: 60px;
    margin: 15px;
}
#timer{
    font-size: 50px;
}
#startTimer{
    background-color: green;
    color: white;
    transition: background-color, 0.5s;
}
#startTimer:hover{
    background-color: rgb(0, 90, 0);
}
#pauseTimer{
    background-color: orange;
    color: white;
    transition: background-color, 0.5s;
}
#pauseTimer:hover{
    background-color: rgb(186, 121, 0);
}
#clearTimer{
    background-color: red;
    color: white;
    transition: background-color, 0.5s;
}
#clearTimer:hover{
    background-color: rgb(146, 0, 0);
}
.timerBtn{
    padding: 5px;
    cursor: pointer;
    font-size: 30px;
    margin: 15px 5px 15px 5px;
}
/* End of Timer Area */

/* Start of Info Area */
#infoContainer{
    display: none;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    margin-top: 30px;
}
#intensitySelection{
    margin-bottom: 20px;
    cursor: pointer;
}
.square{
    display: flex;
}
.item{
    background-color: lightcyan;
    font-size: 12px;
    border: 2px solid black;
    padding: 10px;
    width: 200px;
    height: 170px;
}
.infoBox{
    background-color: #f4f4f4;
    border: 1px solid black;
    font-size: 30px;
    padding: 5px;
    height: 70%; 
    margin-top: 5px; 
}
.infoValue{
    margin-top: 10px;
    font-weight: bold;
}
#clearStorage{
    background-color: red;
    color: white;
    padding: 5px;
    font-size: 20px;
    margin: 10px 0px 0px 0px;
    cursor: pointer;
    transition: background-color, 0.5s;
}
#clearStorage:hover{
    background-color: rgb(168, 0, 0);
}
/* End of Info Area */

/* Start of history */
#historyContainer{
    display: none;
    text-align: center;
}
#historyContainer h2{
    font-size: 40px;
    margin: 5px;
}
.faded{
    color: gray;
    font-style: italic;
    margin-bottom: 10px;
}
.historyArea input{
    margin-top: 5px;
}
.flexHistory{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    background-color: #eee;
    border: 2px solid black;
    margin-left: 5px;
}
.historyLeft{
    border: 2px solid black;
    padding: 5px;
    border-top: none;
    border-bottom: none;
    border-left: none;
    width: 150px;
}
.historyRight{
    border: 2px solid black;
    padding: 5px;
    border-left: 0;
    border-top: none;
    border-bottom: none;
    border-right: none;
    width: 150px;
}
.delete-button{
    background: red;
    color: white;
    padding: 3px;
    cursor: pointer;
    transition: background-color, 0.5s;
}
.delete-button:hover{
    background-color: rgb(168, 0, 0);
}
#pastWorkouts{
    border: 2px solid black;
    overflow: scroll;
    height: 300px;
}
#deleteAllHistory{
    background-color: red;
    color: white;
    font-size: 20px;
    margin: 5px 0px 5px 0px;
    padding: 3px;
    cursor: pointer;
    transition: background-color, 0.5s;
}
#deleteAllHistory:hover{
    background-color: rgb(168, 0, 0);
}
/* End of history */
/* Start of media queries */
@media screen and (max-width: 1300px){
    #navbar{
        padding: 0;
    }
}
@media screen and (max-width: 1100px){
    .item{
        font-size: 10px;
        padding: 10px;
        width: 100px;
        height: 85px;
    } 
    .infoBox{
        font-size: 15px;
        padding: 5px;
        height: 70%; 
        margin-top: 5px; 
    }
}
@media screen and (max-width: 600px){
    #navbar{
        flex-direction: column;
        text-align: center;
    }
}
```
### Key CSS Components
- The CSS is structured by container.
- At the very top, are things that will affect everything. Things like the `*`, or `body`.
- `Navbar` and `footer` both never change, so they stay the same no matter what.
- All margins are 0, all paddings are 0, and a `font-family` and `box-sizing` are set.
- The `body` `width` is cut in half in order to center the containers.
- The `main` tag (where everything shown is stored), is centered with margins.
- Then it goes container by container, so `workoutContainer`, `historyContainer`, `timerContainer`, and then finally `infoContainer`.
- All containers but the `workoutContainer` are hidden by default. The containers are shown and hidden by JavaScript functions.
- All buttons have `cursor: pointer`, along with `:hover` and `transitions` to make sure they look good.
- `display:flex` is used in history, timer and info.
- At the very bottom are the `media queries`, these `queries` are to make sure the website works no matter the screen size.

## JavaScript Functionality
### History Script
```js
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

addWorkout(workoutType, workoutTime, workoutIntensity);
}

let workouts = []; // Stating array

// Function to add workouts in array
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

// Function to save items in localStorage
function saveWorkoutHistory(){
    localStorage.setItem('workouts', JSON.stringify(workouts));
}

// Load tasks from localStorage (if there are any)
function loadHistory(){
    const savedWorkouts = localStorage.getItem('workouts');
    if(savedWorkouts){
        workouts = JSON.parse(savedWorkouts);
        renderWorkoutHistory(workouts);
    }
}

// Update history count
function updateWorkoutCount(){
    const totalWorkoutCount = workouts.length;
    historyCount.textContent = `Total: ${totalWorkoutCount} workout(s)`;
}

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
    updateWorkoutCount();
}

// Function to clear all history when using clearInfo() or the deleteAllHistory button
function clearHistory(){
            workouts = [];
            saveWorkoutHistory();
            renderWorkoutHistory(workouts);
}

// Function to delete history items one by one
function deleteWorkoutHistory(workoutID){
    // Filter workout by their unqiue id
    workouts= workouts.filter(function(workout){
        return workout.id !== workoutID;
    });

    // Save and render
    saveWorkoutHistory();
    renderWorkoutHistory(workouts);
}

// Function to capitalize the first letter of a word
function capitalFirstLetter(word){
    let splitWord = word.split("");
    let firstLetter = splitWord[0].toUpperCase();
    splitWord[0] = firstLetter;
    word = splitWord.toString();
    let newWord = word.replace(/,/g, "")
    return newWord;
}
// Event listener to delete all history
deleteAllButton.addEventListener('click', clearHistory);

// Call function to load everything
loadHistory();
```
#### Key History Components
- At the top, an `if` condition in order to greet users if they meet the requirement of having a `totalTime` in the local storage, something all users must have if they have used the app before.
- Next, stating the DOM Elements, getting from the `HTML`, the area where past workouts will show, the total amount of items, and a button to delete everything.
- Then a function, called `getDOM()` in order to get the values from localStorage and update the `addWorkout()` function. (`getDOM()` is called on in the `workout.js` script.)
- The `addWorkout()` function gets its values from `getDOM()`, before then  creating a new object with a unique ID, which is then pushed into the `array` called `workouts`, before calling on `saveWorkoutHistory()`, and `renderWorkoutHistory()`, giving the `renderWorkoutHistory` the array value to render the page. 
- The `saveWorkoutHistory()` function sets the items into the localStorage using `JSON.stringify()` on the array `workouts`.
- The `loadHistory()` function loads gets the items from localStorage, then renders the history if there is something in the localStorage.
- The `updateWorkoutCount()` gets the length from `workout`, then displays it to show the amount of items in history.
- The `renderWorkoutHistory()` gets its values from other functions, then clears the list, then for each item in the array `workouts`, creates divs and gives them values from the array, before then adding them to the `HTML` using `appendChild()`, then calling on `updateWorkoutCount()` to update the count.
- The `clearHistory()` function sets the array to 0 items, then saves and renders the webpage.
- The `deleteWorkoutHistory` gets a workouts unique ID and upon clicking the delete `button` created in `renderWorkoutHistory()`, deleting only the item that is clicked on.
- The `capitalFirstLetter` function is simply to capitalize the first letter of a word given by another function, it then returns the word with the first letter capitalized. 
- Finally, calling upon `loadHistory()` to load everything upon load.
### Search Script
```js
// Getting the search input
const searchInput = document.getElementById('search');

// Return true if input is a number for timeMatch
function isNumber(value){
    // checks if input is a number
    return /\d/.test(value);
}

// Function to search for values
function searchFor(){
    const searchItem = searchInput.value.toLowerCase().trim();
    
    // if search is empty show all workouts
    if(searchItem === ''){
        renderWorkoutHistory(workouts);
        return;
    }
    // Filter workout off of searchItem
    const filteredWorkout = workouts.filter(workout => {
        const typeMatch = workout.type.toLowerCase().includes(searchItem);
        const intensityMatch = workout.intensity.toLowerCase().includes(searchItem);
        const timeMatch = isNumber(searchItem) && matchTime(workout.time.toString(), searchItem);
        return typeMatch || intensityMatch || timeMatch;
    });
    // Render filtered products
    renderWorkoutHistory(filteredWorkout);
}

// Match the time and return true if included
function matchTime(arrayTime, timeValue){
    // Check if the search term is a number
    if(!isNaN(timeValue) && timeValue !== ''){
        return arrayTime.includes(timeValue);
    }
    return false;
}


// Event listener with real time searching
searchInput.addEventListener('input', searchFor);
```
#### Key Search Components
- Search script works in tandem with history.
- Starts off by getting the input from HTML, called `searchInput`.
- A small function called `isNumber()` used to test if a value that is given from another function is a number, then returns true or false depending on if the value is.
- The `searchFor()` function takes the value from `searchInput`, makes sure it is lowercase with no extra spaces and names it `searchItem`, then if there isn't a value it will simply render the history as normal, but if there is a value it will filter the workouts depending on the matches from the `searchItem`, before finally rendering the items by calling upon `renderWorkoutHistory()` and rendering it based off of the matches.
### Workout Script
```js
// Containers
const workoutContainer = document.getElementById('workoutContainer');
const historyContainer = document.getElementById('historyContainer');
const infoContainer = document.getElementById('infoContainer');
const timerContainer = document.getElementById('timerContainer');
const workoutWarning = document.getElementById('workoutWarning');
const clockContainer = document.getElementById('clockContainer');
const countdownContainer = document.getElementById('countdownContainer');

// Links/Buttons
const toWorkouts = document.getElementById('toWorkouts');
const toTimer = document.getElementById('toTimer');
const toHistory = document.getElementById('toHistory');
const toInfo = document.getElementById('toInfo');
const toClock = document.getElementById('toClock');
const toCountdown = document.getElementById('toCountdown')
const submitBtn = document.getElementById('completeTracking');

// Values for workout counts
let walkCount = localStorage.getItem("walkCount");
let runCount = localStorage.getItem("runCount");
let swimCount = localStorage.getItem("swimCount");
let weightCount = localStorage.getItem("weightCount");
let hikeCount = localStorage.getItem("hikeCount");
let yogaCount = localStorage.getItem("yogaCount");
let rockCount = localStorage.getItem("rockCount");
let danceCount = localStorage.getItem("danceCount");

// Values for intensity counts
let lightCount = localStorage.getItem('lightCount'); 
let moderateCount = localStorage.getItem('moderateCount');  
let intenseCount = localStorage.getItem('intenseCount'); 
let extremeCount = localStorage.getItem('extremeCount');

// Value for workoutCount
let workoutCount = localStorage.getItem("workoutCount");

// submitWorkout() function to get values from workout
function submitWorkout(){
    const workoutType = document.getElementById('workoutSelection').value;
    const workoutTime = document.getElementById('workoutTime').value;
    const workoutIntensity = document.getElementById('intensitySelection').value;

    if(workoutTime > 0){
        // Capture workoutType, workoutTime, and Intensity of last workout for history
        localStorage.setItem("workoutType", workoutType);
        localStorage.setItem("workoutTime", workoutTime);
        localStorage.setItem("workoutIntensity", workoutIntensity);

        workoutCount++;
        localStorage.setItem('workoutCount', workoutCount);
        // Get the time to add to the totalTime
        let time = Number(localStorage.getItem('totalTime'));
        // Make sure there is a value for time, if not set the workoutTime alone as the time.
        if(time === null){
            localStorage.setItem('totalTime', workoutTime);
            // If there is a value, convert values from localStorage (past time) and the new workoutTime value into numbers to add them together and set as totalTime in localStorage.
        }else{
            let totalWorkoutTime = Number(workoutTime) + Number(localStorage.getItem('totalTime'));
            localStorage.setItem('totalTime', totalWorkoutTime);
        }

        // If conditions to get the most common type of workout
        if(workoutType === "walking"){
            walkCount++
            localStorage.setItem("walkCount", walkCount);
        }else if(workoutType === "running"){
            runCount++
            localStorage.setItem("runCount", runCount);
        }else if(workoutType === "swimming"){
            swimCount++
            localStorage.setItem("swimCount", swimCount);
        }else if(workoutType === "weights"){
            weightCount++
            localStorage.setItem("weightCount", weightCount);
        }else if(workoutType === "hiking"){
            hikeCount++
            localStorage.setItem("hikeCount", hikeCount);
        }else if(workoutType === "yoga"){
            yogaCount++
            localStorage.setItem("yogaCount", yogaCount);
        }else if(workoutType === "rockClimbing"){
            rockCount++
            localStorage.setItem("rockCount", rockCount);
        }else if(workoutType === "dancing"){
            danceCount++
            localStorage.setItem("danceCount", danceCount);
        }

        // If conditions to get the most common workout
        if(walkCount > runCount && walkCount > swimCount && walkCount > weightCount && walkCount > hikeCount && walkCount > yogaCount && walkCount > rockCount && walkCount > danceCount){
            commonWorkout = "Walking";
        }else if(runCount > walkCount && runCount > swimCount && runCount > weightCount && runCount > hikeCount && runCount > yogaCount && runCount > danceCount && runCount > rockCount){
            commonWorkout = "Running";
        }else if(swimCount > walkCount && swimCount > runCount && swimCount > weightCount && swimCount > hikeCount && swimCount > yogaCount && swimCount > rockCount && swimCount > danceCount){
            commonWorkout = "Swimming";
        }else if(weightCount > walkCount && weightCount > runCount && weightCount > swimCount && weightCount > hikeCount && weightCount > yogaCount && weightCount > rockCount && weightCount > danceCount){
            commonWorkout = "Weights";
        }else if(hikeCount > walkCount && hikeCount > runCount && hikeCount > swimCount && hikeCount > weightCount && hikeCount > yogaCount && hikeCount > rockCount && hikeCount > danceCount){
            commonWorkout = "Hiking";
        }else if(yogaCount > walkCount && yogaCount > runCount && yogaCount > swimCount && yogaCount > weightCount && yogaCount > hikeCount && yogaCount > rockCount && yogaCount > danceCount){
            commonWorkout = "Yoga";
        }else if(rockCount > walkCount && rockCount > runCount && rockCount > swimCount && rockCount > weightCount && rockCount > hikeCount && rockCount > yogaCount && rockCount > danceCount){
            commonWorkout = "Rock Climbing";
        }else if(danceCount > walkCount && danceCount > runCount && danceCount > swimCount && danceCount > weightCount && danceCount > hikeCount && danceCount > yogaCount && danceCount > rockCount){
            commonWorkout = "Dancing";
        }

        localStorage.setItem('commonWorkout', commonWorkout);
        // Clear timer input box
        document.getElementById('workoutTime').value = '';

        // If conditions to get the most common intensity
        if(workoutIntensity === "light"){
            lightCount++;
            localStorage.setItem("lightCount", lightCount);
        }else if(workoutIntensity === "moderate"){
            moderateCount++;
            localStorage.setItem("moderateCount", moderateCount);
        }else if(workoutIntensity === "intense"){
            intenseCount++;
            localStorage.setItem("intenseCount", intenseCount);
        }else if(workoutIntensity === "extreme"){
            extremeCount++;
            localStorage.setItem("extremeCount", extremeCount);
        }

        // If conditions to get the most common intensity
        if(lightCount > moderateCount && lightCount > intenseCount && lightCount > extremeCount){
            commonIntensity = "Light";
        }else if(moderateCount > lightCount && moderateCount > intenseCount && moderateCount > extremeCount){
            commonIntensity = "Moderate";
        }else if(intenseCount > lightCount && intenseCount > moderateCount && intenseCount > extremeCount){
            commonIntensity = "Intense";
        }else if(extremeCount > lightCount && extremeCount > moderateCount && extremeCount > intenseCount){
            commonIntensity = "Extreme";
        }

        workoutWarning.style.display = "none";
        localStorage.setItem('commonIntensity', commonIntensity);
        getDOM()
    }else{
        workoutWarning.style.display = "block";
    }
}

// Event listeners
toWorkouts.addEventListener('click', function(){
    workoutContainer.style.display = "block";
    infoContainer.style.display = "none";
    timerContainer.style.display = "none";
    historyContainer.style.display = "none";
});
toTimer.addEventListener('click', function(){
    workoutContainer.style.display = "none";
    infoContainer.style.display = "none";
    timerContainer.style.display = "block";
    historyContainer.style.display = "none";
});
toInfo.addEventListener('click', function(){
    renderInfo();
    workoutContainer.style.display = "none";
    infoContainer.style.display = "flex";
    timerContainer.style.display = "none";
    historyContainer.style.display = "none";
});
toHistory.addEventListener('click', function(){
    workoutContainer.style.display = "none";
    infoContainer.style.display = "none";
    timerContainer.style.display = "none";
    historyContainer.style.display = "block";
})
submitBtn.addEventListener('click', submitWorkout);
```
#### Key Workout Components
- The workout script contains many components, mainly for the workouts themselves but also things like `eventListeners` in order to switch between conatiners.
- The `workout.js` script starts off by stating ALL the `DOM Elements`, whether it be `containers`, `buttons`, `inputs`, etc. Then it initializes JavaScript values for later, or getting values from the `localStorage()`.
- The `submitWorkout()` function is the biggest and most important function of the JavaScript.
    - The `submitWorkout()` function starts off by getting the values of the type of workout, the time, and the intensity. Since 2/3 `inputs` are `select`, the only thing we have to test is time. So if time is greater than 0, the values are acceptable. 
    - The function then sets the values in the `localStorage` for the history, allowing them to be changed every time the function is called upon (submitting). 
    - `workoutCount` is increased by one for the `info.js`, then set into `localStorage.`
    - The function then uses some `if` conditions in order to make sure we correctly add into the `totalTime` for the `localStorage.`
    - Then multiple `if` conditions are used to add for each count, for workout and intensity in order to keep track of which ones are the most common, each time a count is added the `localStorage` is updated.
    - `getDOM()` is then called upon to get its values.
    - If time is not greater than 0, a warning is shown and the values are not changed.
- At the very bottom are the event listeners, using `'click'` and `.style.disply` in order to show or hide containers. Along with an event listener for the submit button, which then calls upon `submitWorkout()`
### Timer Script
```js
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
```
#### Key Timer Components
- `timer.js` stars off by declaring the variables to be used in later functions.
- Timer `values` are then grabbed by `getElementById()` and declaring them equal to 0.
- The first function, `startTimer()` makes sure the timer isn't already running before setting the `timerRunning` to be true, and setting an `interval` that updates every 10 milliseconds.
- Every 10 milliseconds milliseconds are added onto by one, if milliseconds becomes greater than 100, milliseconds reset to 0 and seconds are added to by one, then `renderTimer()` is called upon. Every 60 seconds, seconds are set to 0 and minutes are added to by one, then `renderTimer()` is called upon. Every 60 minutes, minutes are set to 0 and hours are added to by one, then `renderTimer()` is called upon. Otherwise the timer is only rendered by milliseconds.
- The `pauseTimer()` function clears the interval and sets `timerRunning` to equal false, pausing the timer and allowing it to be unpaused.
- The `clearTimer()` function also clears the interval, but it then sets all the values to equal 0, and updating the HTML.
- The `renderTimer()` function gets its values from `starTimer()` and is constantly called upon to render the webpage and values. However, for it to be visually appealing there is an extra step. Every time the values are not double digits (<10), the function, using an `if` condition, adds a 0 before the value in order to make it a double digit.
- Finally are `event listeners`, the buttons are called by `getElementById()`, before then adding `event listeners` to each ones respective function. 
### Info Script
```js
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
```
#### Key Info Components
- The `script` starts off with getting the four areas to display the values, using `getElementById()`.
- Then the `event listeners` are added, upon the `DOM Content` loading, the info will be rendered.
- The clear info button is not named but is given an `event listener` using `getElementById`().
- The `renderInfo()` function gets the items set in `workout.js` from localStorage, those being the most common intensity (`mostIntensity`), the most common workout type, (`mostWorkout`), the total amount of workouts (`totalWorkout`), and the total amount of time in workouts (`totalTime`) and then renders them using `innerHTML`.
- The `clearInfo()` function removes ALL the items set before, then calls upon `clearHistory()` to clear all the items in the history as well.
- The items will not be completely deleted unless the page is refreshed, so `location.reload()` is used to refresh the page and send the user back to the workout container. 