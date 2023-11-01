//document.getElementById("count-el").innerText= 5

// let count = 0

// console.log(count)

// 1.Create a variable , myAge, and set its value to your age
// let myAge = 35

// 2. Log the myAge variable to the console
// console.log

//cmd+k+c
//  let firstBatch = 5
//  let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

//  1. Create two variables, myAge and humanDogRatio
//  2. Multiply the two together and store the result in myDogAge
//  3. Log myDogAge to the console

let myAge = 35
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count = 5
//count + 1
//count = count + 2 //5+1=6
// count = count + 5
// console.log(count)

//create a variable, bonusPoints. Initialize it as 50.Increase it 100
//Decrease it down to 25, and then finally increase it to 70
//console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// function increment(){
//     console.log("The button was clicked")
// }



// setting up the race
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

//  countdown()

// Go!
// Players are running the race
// Race is finished!
//  countdown()
// Get ready for a new race



// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
// function myLogger(){
//     console.log(42)
// }
// myLogger()



// Create a function that logs out the sum of all the lap times
let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    // console.log(totalTime)
    // console.log(lap1 + lap2 + lap3)
}
//  logLapTime()
//  console.log(totalTime)



// let lapsCompleted = 0

// Create a function that increments the LapsCompletedvariable with one
// Run it three times
// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)



// document.getElementById("count").innerText= 5
// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
//camelCase

// let countEL = document.getElementById("count-el")  //pass in arguments
//  console.log(countEL)

// let count = 0
// function increment() {
//     // console.log("clicked")
//     count = count + 1
//     countEL.innerText = count
//     // console.log(count)
// }




//1.create a function() save(), which logs out the count when its called

// let countEL = document.getElementById("count-el")
// let count = 0

// function increment(){
//     count = count + 1
//     countEL.innerText = count
// }

// function save(){
//     console.log(count)
// }
// save()




// let username = 'per'
// // create a variable, message, that stores the string: "you have tree new notifications"
// let message = "you have tree new notifications"
// let messageToUser = message + "," + username + "!"
// console.log(message + ","+ username + "!")
// //Create a variable,messageToUser, that contains the message we have logged




// Create two variables, name and greeting.The name variable should store your name, and the greeting should store e.g. "Hi , my name is"
// Create a third variable, myGreeting, that contatenates the two strings 
// Log myGreeting to the console
// let name = "42"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints
// console.log(4+5)
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")




//Grab the welcome-el paragraph and store it in a variable called welcomeEL
// let welcomeEL = document.getElementById("welcome-el")

// //Create two variables (name & greeting) that contains your name and the greeting we want to render on the page
// let name = "Per Harald Borgen"
// let greeting = "welcome back"
// //Render the welcome message using welcomeEl.innerText
// welcomeEL.innerText = greeting + name
// // Add an emoji to the end!👋
// //WRITE YOUR CODE BELOW HERE
// //HINT: count = count + 1
// welcomeEL.innerText = welcomeEL.innerText + "👋"





// let countEL = document.getElementById("count-el")
// let count = 0
// function increment(){
//     //change this to use the plus equal technique you've learned
//     count +=1
//     countEL.innerText =count
// }
// function save(){
//     console.log(count)
// }




//1.Grab the save-el paragraph nd store it in a variable called saveEL
// let saveEL = document.getElementById("save-el")
// let countEL = document.getElementById("count-el")
// let count = 0
// console.log(saveEL)
// function increment(){
//     count +=1
//     countEL.textContent = count

// }
// function save(){
//     let countStr = count + " - "
//     //2. Create a variable that contains both the ount and the dash separator, i.e."12 -"
//     //3. Render the variable in the saveEL using innerText
//     saveEL.textContent = countStr
//     countEL.textContent = 0
//     count = 0
//     //NB. Make sure to not delete the xisting content of the paragraph
//     // console.log(count)
// }
// console.log("Let's count people on the subway!")





// Create two variables, firstName and lastName
let firstName = "Per "
let lastName = "Borgen"
// Concatenate the two variables into a third variable called fullName
let fullName = firstName + " " + lastName
// Log fullName to the console
// console.log(fullName)





let name = "Linda"
let greeting = "Hi there"
// Create a function that logs out "Hi there, Linda!" when called
// function greetLinda(){
//     console.log(greeting + "," + name + "!")
// }
// greetLinda()





let myPoints = 3
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
// function add3Points(){
//     myPoints += 3
// } 
// function remove1Point(){
//     myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// Call the functions to that the line below logs out 10
// console.log(myPoints)





// Try to predict what each of the lines will log out
// console.log("2" + 2) //22
// console.log(11 + 7) //18
// console.log(6 + "5") //65
// console.log("My points:" + 5 + 9)
// console.log(2 + 2) //4
// console.log("11" + "14") //1114





// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id ="error".

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)
// function purchase(){
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }



// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// Create four functions: add(), substract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10"(since 8 + 10 = 10) inside the paragraph with id="sum-el"
// let sumEL = document.getElementById("sum-el")

// function add(){
//     let result = num1 + num2
//     sumEL.textContent = "Sum:" + result
//     // console.log("add clicked")
// }
// function substract(){
//     let result = num1 - num2
//     sumEL.textContent = "Sum:" + result
// }
// function divide(){
//     let result = num1 / num2
//     sumEL.textContent = "Sum:" + result
// }
// function multiply(){
//     let result = num1 * num2
//     sumEL.textContent = "Sum:" * result
// }




// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the cards

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 6
if (sum < 21){
    // console.log("Do you want to draw a new card?😐")
} else if(sum === 21){
    // console.log("whohoo!you've got a blackjack!😂")
} else {
    // console.log("you're out of the game!😭")
}
// console.log(sum)




// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
let age = 20
// if less than 21 "you are not enter the club!"
// else    "welcome"
if (age < 21){
    console.log("you are not enter the club!")
} else{
    console.log("welcome")
}