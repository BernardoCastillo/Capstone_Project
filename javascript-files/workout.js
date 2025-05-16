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
document.body.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        submitWorkout();
    }
});
