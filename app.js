/*-------------------------------- Constants --------------------------------*/
const computerOptions = ['rock', 'paper', 'scissors']
/*-------------------------------- Variables --------------------------------*/

let userChoice = ''

/*------------------------ Cached Element References ------------------------*/

const choices = document.querySelector('#choices')
const rock = document.querySelector('#rock')
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const reset = document.querySelector('#reset')

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
        paper.classList.add('hidden')
        rock.classList.add('hidden') 
    }

    let computerChoice = computerOptions[Math.floor(Math.random() *3)]
    console.log(computerChoice)
})

/*-------------------------------- Functions --------------------------------*/

reset.addEventListener('click', function(){
     paper.classList.remove('hidden')
     scissors.classList.remove('hidden')
     rock.classList.remove('hidden')
})