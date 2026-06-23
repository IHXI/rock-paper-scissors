/*-------------------------------- Constants --------------------------------*/
const rock = document.querySelector('#rock')
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const reset = document.querySelector('#reset')
/*-------------------------------- Variables --------------------------------*/
let userChoice = ''
let computerOptions = ['rock', 'paper', 'scissors']
/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')
console.log(choices)
/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(event){
    userChoice = event.target.id
    if (userChoice === "rock"){
        console.log("rock")
        paper.classList.add('hidden')
        scissors.classList.add('hidden') 
    }
     else if (userChoice === "paper"){
        console.log("paper")
        rock.classList.add('hidden')
        scissors.classList.add('hidden') 
    }
    else if (userChoice === "scissors"){
        console.log("scissors")
        console.log(computerOptions[Math.floor(Math.random() *2)])
        paper.classList.add('hidden')
        rock.classList.add('hidden') 
    }
})
/*-------------------------------- Functions --------------------------------*/
reset.addEventListener('click', function(){
     paper.classList.remove('hidden')
     scissors.classList.remove('hidden')
     rock.classList.remove('hidden')
})