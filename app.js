
/*-------------------------------- Constants --------------------------------*/
const computerOptions = ['rock', 'paper', 'scissors']
/*-------------------------------- Variables --------------------------------*/

let userChoice = ''
let winner = ''
/*------------------------ Cached Element References ------------------------*/

const choices = document.querySelector('#choices')
const rock = document.querySelector('#rock')
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const reset = document.querySelector('#reset')
const results = document.querySelector('#results')

/*----------------------------- Event Listeners -----------------------------*/

choices.addEventListener('click', function(event){
    userChoice = event.target.id

    if (userChoice === "rock"){
        paper.disabled = true
        scissors.disabled = true
    }
     else if (userChoice === "paper"){
        rock.disabled = true
        scissors.disabled = true 
    }
    else if (userChoice === "scissors"){
        paper.disabled = true
        rock.disabled = true
    }

    let computerChoice = computerOptions[Math.floor(Math.random() *3)]

    if (userChoice === computerChoice){
        winner = 'both'
    }
    else if(userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'rock'){
        winner = 'You!'
    }
    else{
        winner = 'Computer'
    }
    
    results.textContent = `computer chose ${computerChoice}. You chose ${userChoice}. Winner is ${winner}`

})

/*-------------------------------- Functions --------------------------------*/
reset.addEventListener('click', function(){
    results.textContent = ''
     paper.disabled = false
     scissors.disabled = false
     rock.disabled = false
})