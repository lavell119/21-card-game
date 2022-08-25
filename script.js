let deck
let card = document.querySelectorAll('.card')
let suits=["clubs", "spades", "hearts", "diamonds"]
let numbers=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
let startButton=document.querySelector(".start-button")


fetch("./deck.json")
.then(response=>{
    return response.json()
})
.then(data=>deck=data)
.then(deck=>console.log(deck))   







