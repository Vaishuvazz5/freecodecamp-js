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

// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]     //array- ordered list of items
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// if (sum < 21){
//     console.log("Do you want to draw a new card?😐")
// } else if(sum === 21){
//     console.log("whohoo!you've got a blackjack!😂")
// } else {
//     console.log("you're out of the game!😭")
// }
// console.log(sum)
//another card
// Write the conditional according to the rules:
// if less than or equal to 20 -"Do you want to draw new card?😐"
// else if exactly 21 -"whohoo! you have got blackjack!😂"
// else - "you are out of the game!😭"

// console.log(hasBlackJack)
// 1. Create a variable called isAlive and assign it to true
// let isAlive = true
// // console.log(isAlive)
// // 1. Declare a variable called message and assign its value to an empty string
// let message = ""
// // 2. Flip its value to false in the appropriate code block
// if (sum <= 20){
//     // console.log("Do you want to draw a new card?😐")
//     // Reassign the message variable to the string we're logging out
//     message = "Do you want to draw a new card?😐"
// } else if (sum === 21){
//     // console.log("whohoo! you have got blackjack!😂")
//     message = "whohoo! you have got blackjack!😂"
//     hasBlackJack = true
// } else{
//     // console.log("you are out of the game!😭")
//     message =  "you are out of the game!😭"
//     isAlive = false
// }
// console.log(message)

// console.log(4 === 3)  //false
// console.log(5 > 2)   //true
// console.log(12 > 12) //false
// console.log(3 < 0)  //false
// console.log(3 >= 3) //true
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false







// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
// let age = 20
// if less than 21 "you are not enter the club!"
// else    "welcome"
// if (age < 21){
// console.log("you are not enter the club!")
// } else{
// console.log("welcome")
// }



//  Check if the person is eligible for a birthday card from the king! (100)

// let age = 145
//   if less than 100 -"Not eligible"
//   else if exactly 100 - "Here is your birthday card from the king!"
//   else "Not eligible, you have already gotten one"
// if (age < 100) {
//     // console.log("Not eligible")
// } else if (age === 100) {
//     // console.log("Here is your birthday card from the king")
// } else {
//     // console.log("Not eligible, you have already gotten one")
// }




//blackjack
// let messageEL = document.getElementById("message-el")
// let sumEL = document.getElementById("sum-el")
// // // let sumEL = document.querySelector("#sum-el")
// let cardsEL = document.getElementById("cards-el")
// // // console.log(messageEL)

// // //create a new function called  startGame() that calls renderGame()
// function startGame(){
//     renderGame()
// }
// function renderGame(){
// //     //render out firstcard and secondcard
//     cardsEL.textContent = "cards:" 
//     for (let i = 0; i < cards.length; i++){
//         cardsEL.textContent += cards[i] = ""
//     }
// //     //render out all th cards we have
//     sumEL.textContent = "sum:" +sum
//     if (sum <= 20){
//         message = "Do you want to draw a new card?😐"
//     }else if (sum === 21){
//         message = "whohoo! you have got blackjack!😂"
//         hasBlackJack = true
//     } else{
//         message =  "you are out of the game!😭"
//         isAlive = false
//     }
//     // console.log(message)
//     messageEL.textContent = message
// }
// function newCard(){
// //     // console.log("Drawing a new card rom the deck!")
//     let card = 6
//     sum += card
//     cards.push(card)
//     console.log(cards)
//     renderGame()
// }







//Arrays - ordered list of items
// let featuredPost = [
//     "check out my Netflix clone",  //0
//     "Here's the code for my projects",  //1
//     "I've just relaunched my portfolio"  //2
// ]
// // console.log(featu+ cards[0] + " " + cards[1]redPost[2])

// let experiance = ["CEO at scrimba","Frontend developer in xeneta","People counter for Norstat" ]
// console.log(experiance[1])
// console.log (experiance[0])
// console.log(featuredPost.length)


//array -composite/complex data types-primitive,string,boolean,number


// let cards = [7,4]
// cards.push(6)
// // console.log(cards)
// let messages = [
//     "Hey, how is it going?",
//     "I'm great,thank you! How about you",
//     "All good.Been working on my portfolio lately."
// ]
// let newMessage = "Same here!"
// messages.push(newMessage)
// // console.log(messages)
// messages.pop()
// console.log(messages)




//counting in javascript

for (let count = 10; count < 21; count++) {
    // console.log(count)
}
for (let i = 0; i < 6; i += 1) {
    // console.log(i)
}
for (let i = 10; i < 101; i += 10) {
    // console.log(i)
}



let messages = [
    "Hey, how is it going?",
    "I'm great,thank you! How about you",
    "All good.Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])
for (let i = 0; i < 5; i += 1) {
    // console.log(messages[0])
}




// let cards = [7,3,9]
//create a for loop that logs out all the cards in the array
//use cards.length to specify how long the loop should run
// for ( let i = 0; i < cards.length; i++){
//     // console.log(cards[i])
// }



// let sentence = ["Hello", "my", "name", "is", "per"]
// let greetingEL = document.getElementById("greeting-el")
// //Render the sentence in the greetingEL paragraph using a for loop and .textContent
// for (let i =0; i < sentence.length; i++){
//     greetingEL.textContent += sentence[i] + ""
// }




//returning values in functions
let player1Time = 102
let player2Time = 107
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}
let fastestRace = getFastestRaceTime()
// console.log(fastestRace)


//write a function that returns the total race time
//call/invoke the function and store the returned value in anew variable
//finally, log the variable out

function getTotalRaceTime() {
    return player1Time + player2Time
}
let totalTime = getTotalRaceTime()
// console.log(totalTime)



//math.random()
let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)

let flooredNumber = Math.floor(12.999999)
// console.log(flooredNumber)


// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}
// console.log(rollDice())




//cards
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard , secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEL = document.getElementById("message-el")
// let sumEL = document.getElementById("sum-el")
// let cardsEL = document.getElementById("cards-el")
// console.log(cards)
// function getRandomCard(){
//     let randomNumber = Math.floor(Math.random() *13) + 1
//     if (randomNumber > 10){
//         return 10
//     } else if (randomNumber === 1){
//         return 11
//     } else {
//         return randomNumber
//     }

// }
// function startGame(){
//     renderGame()
// }
// function renderGame(){
//     cardsEL.textContent = "Cards:"
//     for (let i =0; i < cards.length; i++){
//         cardsEL.textContent += cards[i] = ""
//     }
//     sumEL.textContent = "sum:" +sum
//     if (sum <= 20){
//         message = "Do you want to draw a new card?😐"
//     }else if (sum === 21){
//         message = "whohoo! you have got blackjack!😂"
//         hasBlackJack = true
//     } else{
//         message =  "you are out of the game!😭"
//         isAlive = false
//     }
//     // console.log(message)
//     messageEL.textContent = message
// }
// function newCard(){
//     // console.log("Drawing a new card rom the deck!")
//         let card = 6
//         sum += card
//         cards.push(card)
//         console.log(cards)
//         renderGame()
//     }



//cards-blackjack
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
// let messageEL = document.getElementById("message-el")
// let sumEL = document.getElementById("sum-el")
// let cardsEL = document.getElementById("cards-el")

let player = {
     name: "Per",
     chips: 200,
     sayHello: function(){
        // console.log("Heisann!")
     }
}
player.sayHello()

// let playerEL = document.getElementById("player-el")
// playerEL.textContent = player.name + ": $" + player.chips
// console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEL.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] = ""
    }
    sumEL.textContent = "sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?😐"
    } else if (sum === 21) {
        message = "whohoo! you have got blackjack!😂"
        hasBlackJack = true
    } else {
        message = "you are out of the game!😭"
        isAlive = false
    }
    messageEL.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}



let hasCompletedCourse = false
let givesCertificate = true
// if (hasCompletedCourse === true){
//     if (givesCertificate === true){
//         generateCertificate()
//     }
// }
// if (hasCompletedCourse === true && givesCertificate === true){
//     generateCertificate()
// }
if (hasCompletedCourse === true || givesCertificate === false) {
    generateCertificate()
}
function generateCertificate() {
    // console.log("Generating certificate...")
}




//logical operator
let hasSolvedChallenge = false
let hasHintsLeft = false
if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}
function showSolution() {
    // console.log("Showing the solution...")
}



let likeDocumentaries = true
let likesStartups = false
if (likeDocumentaries === true || likesStartups === true) {
    recommendMovie()
}
function recommendMovie() {
    // console.log("Hey, check out this new film we think you will like!")
}




//intro to objects
let course = {
    title:"Learn CSS Grid or free",
    lessons: 16,
    creator:"Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html","css"]
}
// console.log(course.tags)



//create your object
let castle = {
    title : "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/castle2.png"]
}
// console.log(castle.price)
// console.log(castle.isSuperHost)






//objects and functions

let person = {
    name: "per",
    age: 35,
    country: "Norway",
}
function logData(){
    // console.log(person.name  +  " is " +  person.age  + " years old and lives in " + person.country )
}
logData()





//conditional operators

let age = 80

if (age < 6){
    console.log("free")
} else if (age < 18){
    console.log("child discount")
} else if (age < 27){
    console.log ("student discount")
} else if (age < 66){
    console.log ("full price")
} else {
    console.log ("senior citizen discount")
}




//loops and arrays
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("The 5 largest countries of the world")
// for (let i = 0; i < largeCountries.length; i++){
//     console.log("-" + largeCountries[i])
// }


//push ,pop,unshift , shift challenge
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"] 
largeCountries.pop()
largeCountries.push("pakistan")
largeCountries.shift()
// console.log(largeCountries)


//logical operators
let dayOfMonth = 13
let weekDay = "Friday"
if ( dayOfMonth === 13 && weekDay === "Friday"){
    // console.log("😱")
}



//rock papers scissors
let hands = ["rock", "paper", "scissor"]
function getHand(){
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
// console.log( getHand() )




//sorting fruits
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")
function sortFruit(){
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}
// sortFruit()



function saveLead(){
    console.log("Button clicked from the onclick attribute")
}

let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click",function(){
    console.log("Button clicked from addEventListener")

})






