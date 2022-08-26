let deck
let card = document.querySelectorAll('.card')
let suits=["clubs", "spades", "hearts", "diamonds"]
let numbers=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
let startButton=document.querySelector(".start-button")
let topButtons=document.querySelectorAll(".top-button")
let hitButton=document.querySelector(".hit-button")
let stayButton=document.querySelector(".stay-button")


fetch("./deck.json")
.then(response=>{
    return response.json()
})
.then(data=>deck=data)
.then(deck=>console.log(deck))   

startButton.addEventListener('click', ()=>{
    hitButton.classList.remove("hide")
    stayButton.classList.remove("hide")
    startButton.classList.add('hide')
})

hitButton.addEventListener('click', ()=>{
    let i = Math.floor(Math.random() * 2)
    let drawnCard=(deck[i])
    console.log(drawnCard.value)
    console.log(Object.entries(drawnCard))
    card[0].innerText=Object.entries(drawnCard)
})




