let deck
let card = document.querySelectorAll('.card')

fetch("./deck.json")
.then(response=>{
    return response.json()
})
.then(data=>deck=data)
.then(deck=>console.log(deck))
let createCards=(suit, i)=> {
    return `${i} of ${suit}`
}

let suits=["clubs", "spades", "hearts", "diamonds"]
let numbers=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

let numberCycle=(numbers)=>{
    for(let i=0; i<10; i++) {
        return numbers[i]
}
}



