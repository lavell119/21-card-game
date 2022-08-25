let card = document.querySelectorAll('.card')
fetch("./deck.json")
.then(response=>{
    return response.json()
})
.then(data=>{console.log(data)})

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

let deck = (suits) => {
    suits.forEach((suit)=>{
        for(let i=0; i<10; i++) {
            card=suit[i]
            return card
        } 
        }   
    )
}

console.log(deck)

