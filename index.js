/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let age = 21;
let votingAge = 18;
if (age > votingAge) {
    console.log("Task 1 a:", true);
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var x = 10;
var y = 20;
if (x < y) {
    x += y;
}
console.log("Task 1 b:", x);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let aString = "1999";
let aNumber = Number(aString);

console.log("Task 1 c:", aNumber);

//Task d: Write a function to multiply a*b 
function multiply(a, b) {
    return a * b;
}

console.log("Task 1 d:", multiply(5,5));
console.log("");


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(humanYear) {
    return humanYear * 7;
}
let humanYear = 2;
console.log("Task 2:", dogYears(humanYear));
console.log("");

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function feeder(weight, age) {
    let foodByWeight = 0;
    let foodByMonths = 0;
    
    if (weight <= 5) {
        foodByWeight = weight * 0.05;
    } else if (weight <= 10) {
        foodByWeight = weight * 0.04;
    } else if (weight <= 15) {
        foodByWeight = weight * 0.03;
    } else {
        foodByWeight = weight * 0.02;
    }

    if (age <= 0.3333333333333333) {
        foodByMonths = weight * 0.1;
    } else if (age <= 0.5833333333333333) {
        foodByMonths = weight * 0.05;
    } else if (age < 1) {
        foodByMonths = weight * 0.04;
    }
    
    return foodByWeight + foodByMonths;
}

console.log("Task 3:", feeder(15, 1));
console.log("");


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function game(input) {
    function flipSign(num) {
        return num * -1;
    }
    console.log("Task 4:")

    // Computer Random Choice
    var roll = null;
    let number = Math.random();
    if (number <= 0.33) {
        roll = "rock";
        number = 0.33
    } else if (number <= 0.66) {
        roll = "paper";
        number = 0.66;
    } else if (number <= 1) {
        roll = "scissors";
        number = 1;
    }

    // Player Input Preperation
    playerNumber = 0;
    if (input === "rock") {
        playerNumber = -0.33;
    } else if (input === "paper") {
        playerNumber = -0.66;
    } else if (input === "scissors") {
        playerNumber = -1;
    } else {
        console.log("invalid input");
    }

    // Main Game Logic and Output
    let output = number + playerNumber;

    if (Math.abs(output) >= 0.5) {
        output = flipSign(output);
    }

    console.log("Computer Chose:", roll);
    console.log("Player Chose:", input);

    // console.log(output);
    if (output > 0) { 
        console.log("You Lose"); // Negative outputs result in a win, and positive ones result in a loss. Uncomment the line above to view output
    } else if (output < 0) {
        console.log("You Win"); 
    } else if (output === 0) {
        console.log("It's A Tie");
    }
    console.log("");
}

// Player Input
game("scissors");


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function converter(km) {
    return km * 0.621371;
}

console.log("Task 5 a:", converter(1))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function cmft(ft) {
    return ft * 30.48;
}

console.log("Task 5 b:", cmft(1));
console.log("");


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(startingNumber) {
    let onTheWall = startingNumber;
    let leftOver = onTheWall - 1;
    let totalSoda = startingNumber;
    for (let onTheWall = startingNumber; onTheWall > 0; onTheWall--) {
        leftOver = onTheWall - 1;
        console.log("Bottles on the wall:", onTheWall, "| Total Bottles", totalSoda, "| Bottles Left Over", leftOver);
        
    }
}

console.log("Task 6:");
annoyingSong(5);
console.log("");


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 60) {
        return "D";
    } else {
        return "F";
    }
}
  
console.log("Task 7:", grade(100));


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





