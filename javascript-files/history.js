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