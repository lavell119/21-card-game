let deck
let card = document.querySelectorAll('.card')
let suits=["clubs", "spades", "hearts", "diamonds"]
let numbers=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
let startButton=document.querySelector(".start-button")
let topButtons=document.querySelectorAll(".top-button")
let hitButton=document.querySelector(".hit-button")
let stayButton=document.querySelector(".stay-button")
let cardName=document.querySelector(".card-name")
let hand=document.querySelector(".hand")
let newCard=document.createElement('div')
let numberOfCards=0
let scoreElement=document.querySelector('.score')
let score=0
let restartButton=document.querySelector('.restart-button')

let appendCard=(drawnCard)=> {
    let currentCard=newCard
    hand.appendChild(currentCard).classList.add('card')
    currentCard.style.backgroundImage="url('deck-images/"+drawnCard.image+".png')"
    numberOfCards=numberOfCards+1
    console.log(numberOfCards)    
}



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
    scoreElement.classList.remove('hide')

})
if (score>21){
    bust()
}

hitButton.addEventListener('click', ()=>{

    let i = Math.floor(Math.random() * 52)
    let drawnCard=(deck[i])
    console.log(drawnCard.name)
    console.log(drawnCard.value+7)
    card[0].style.backgroundImage="url('deck-images/king_of_hearts.png')"
    cardName.classList.remove("hide")
    cardName.innerText=drawnCard.name
    let newCard=document.createElement('div')
    newCard.classList.add('card')
    newCard.style.backgroundImage="url('deck-images/"+drawnCard.image+".png')"
    hand.appendChild(newCard)
    score=score+drawnCard.value
    scoreElement.innerText=`Score = ${score}`
    if(score>21){
        bust()
    }
    else return
    }
   

)

let bust=()=>{
    scoreElement.innerText=`Score = ${score}\n Bust!`
    scoreElement.classList.add('red')
    restartButton.classList.remove('hide')
    hitButton.classList.add('hide')
    stayButton.classList.add('hide')

}
