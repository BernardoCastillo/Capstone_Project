# CSS Technical Analysis
## Global Reset & Box Model
```css
*{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}
```
## Organized CSS Structure
```css
/* Start of Workout Area */
Code
/* End of Workout Area */

/* Start of Timer Area */
Code
/* End of Timer Area */

/* Start of Info Area */
Code
/* End of Info Area */
```
## Responsive Design
```css
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
/* End of media queries */
```
## Typography Styling
```css
*{
    /* margin: 0; */
    /* padding: 0; */
    font-family: Arial, Helvetica, sans-serif;
    /* box-sizing: border-box; */
}
```
## Color Scheme & Contrast
```css
main{
    border: 2px solid black;
    background-color: white;
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
```
## Flexbox/Grid Usage
```css
#links{
    display: flex;
    gap: 5px;
}
```
## Button & Input Styling
```css
#startTimer{
    background-color: green;
    color: white;
    transition: background-color, 0.5s;
}
#startTimer:hover{
    background-color: rgb(0, 90, 0);
}
```
## Component Reusability
```html
<!-- HTML code with all the same class -->

<p id="toWorkouts" class="link">Workouts</p>
<p id="toHistory" class="link">History</p>
<p id="toTimer" class="link">Timer</p>
<p id="toInfo" class="link">Info</p>
```
```css
/* CSS reusability */

.link{
    text-decoration: underline;
    margin: 15px;
    cursor: pointer;
}
```
## CSS Transitions
```css
#startTimer{
    background-color: green;
    /* color: white; */
    transition: background-color, 0.5s;
}
#startTimer:hover{
    background-color: rgb(0, 90, 0);
}
```
## Hover/Focus Effects
```css
#startTimer:hover{
    background-color: rgb(0, 90, 0);
}
```
## Layout Containers
```css
body{
    margin: 0 auto;
    padding: 0 auto;
    width: 50%;
}
main{
    border: 2px solid black;
    background-color: white;
    margin: 70px 50px 50px 100px;
    height: auto;
}
```
## Utility Classes
```css
.link{
    text-decoration: underline;
    margin: 15px;
    cursor: pointer;
}
```
## Shadows & Borders
```css
main{
    border: 2px solid black;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.338);
    /* background-color: white; */
    /* margin: 70px 50px 50px 100px; */
    /* height: auto; */
}
```
## Naming Conventions (BEM/Readabale)
```css
#startTimer{
    background-color: green;
    color: white;
    transition: background-color, 0.5s;
}
.infoValue{
    margin-top: 10px;
    font-weight: bold;
}
.delete-button{
    background: red;
    color: white;
    padding: 3px;
    cursor: pointer;
    transition: background-color, 0.5s;
}
```
## Cleanliness & Commenting
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
    background-color: white;
    margin: 70px 50px 50px 100px; /* Centers the page */
    height: auto;
}
/* End of items that are constant */
```
