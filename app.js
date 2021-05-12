let tieNum = 0
let winNum = 0
let lossNum = 0

function userPress(pressed){
  if(pressed == "rock"){
    const choseRock = document.getElementById("user-choice")
    choseRock.classList.remove("blink")
    choseRock.innerHTML = "Rock"
    computerChose(pressed)
  }
  if(pressed == "paper"){
    const chosePaper = document.getElementById("user-choice")
    chosePaper.classList.remove("blink")
    chosePaper.innerHTML = "Paper"
    computerChose(pressed)
  }
  if(pressed == "scissor"){
    const choseScissor = document.getElementById("user-choice")
    choseScissor.classList.remove("blink")
    choseScissor.innerHTML = "Scissors"
    computerChose(pressed)
  }
}

function computerChose(pressed){
  let choices = ["rock", "paper", "scissor"]
  const randomChoice = Math.floor(Math.random() * choices.length)
  const cpu = (choices[randomChoice])

  const computerChoice = document.getElementById("computer-choice")
  computerChoice.classList.remove("blink")
  if(cpu == "rock"){
    computerChoice.innerHTML = "Rock"
  }
  if(cpu == "paper"){
    computerChoice.innerHTML = "Paper"
  }
  if(cpu == "scissor"){
    computerChoice.innerHTML = "Scissors"
  }
  

  drawResult((winCheck(pressed, cpu)))
}

function winCheck(val1, val2){
  if(val1 == val2){
    return "tie"
  }
  if(val1 == "rock" && val2 == "paper" || val1 == "paper" && val2 == "scissor" || val1 == "scissor" && val2 == "rock"){
    return "loss"
  }
  if(val1 == "rock" && val2 == "scissor" || val1 == "paper" && val2 == "rock" || val1 == "scissor" && val2 == "paper"){
    return "win"
  }
}

function drawResult(outcome){
  const scoreBoard = document.getElementById("scoreboard-result")
  scoreBoard.classList.remove("blink")

  let tieNumBoard = document.getElementById("user-ties")
  let winNumBoard = document.getElementById("user-wins")
  let lossNumBoard = document.getElementById("user-losses")

  
  
  if(outcome == "tie"){
    tieNum++
    scoreBoard.innerHTML = "You Tied"
    tieNumBoard.innerHTML = tieNum
  }
  if(outcome == "win"){
    winNum++
    scoreBoard.innerHTML = "You Win"
    winNumBoard.innerHTML = winNum
  }
  if(outcome == "loss"){
    lossNum++
    scoreBoard.innerHTML = "You Lost"
    lossNumBoard.innerHTML = lossNum
  }
}
