let messageEl = document.getElementById("message-el")  
// console.log(messageEl)
let firstCard = 6
let secondCard = 9
let cards = [
    firstCard,
    secondCard
    ]
let sum = firstCard + secondCard 
let hasBlackCard = false
    let isAlive = true
    let message = " "
    let sumEl = document.getElementById("sum-el")
    // let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
    
function startGame() {
    renderGame()
}

 function renderGame() {
    
//  let firstCard = 6
//     let secondCard = 9
// let sum = firstCard + secondCard 
// let hasBlackCard = false
//     let isAlive = true
//     let message = " "
//     let sumEl = document.getElementById("sum-el")
//     // let sumEl = document.querySelector("#sum-el")
//     let cardsEl = document.getElementById("cards-el")
console.log(firstCard)
console.log(secondCard)
console.log(sum)
if (sum <= 20) {
    // console.log("Do you want to draw another card! 🙂")
    message = "Do you want to draw another card! "

} else if (sum === 21) {
    // console.log("wohoo! You've got Blackjack! 🥳")
    message = "wohoo! You've got Blackjack!"
    hasBlackCard = true
} else {
    // console.log("You're out of the game! 😭")
    message = "You're out of the game! "
    isAlive = false
}   

// let age = 22
// if (age <= 20) {
//     console.log("You can not enter the club!")
// } else {
//     console.log('welcome!')
// }
    
console.log(message)
console.log(hasBlackCard)
    console.log(isAlive)  
     messageEl.textContent = message
     
     sumEl.textContent += sum + " "
     
    cardsEl.textContent += cards[0] + " " + cards[1] 
    
}

let card = 6
    cards.push(card)

function newCard() {

    
    
    sum += card 
    
    
    renderGame()
    
//let cardsEl = document.getElementById("cards-el")
   // cardsEl.textContent = "Cards:" + firstCard +" "+ secondCard +" "+ card + " "
    cardsEl.textContent = "cards:" + cards[0] + " " + cards[1] + " " + cards[2]
    
}

console.log(cards)
//Array
//zero indexed
// let myEducationalBackground = [
//     "primarySchool",
//     "secondarySchool",
//     "tertiarySchool"
// ]
// console.log(myEducationalBackground[0])
// console.log(myEducationalBackground[2])
// console.log(myEducationalBackground[1])
// let messages = [
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."

// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)
// messages.pop()
// console.log(messages)

