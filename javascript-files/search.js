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