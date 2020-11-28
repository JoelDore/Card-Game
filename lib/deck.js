const SUITS = ["♥", "♠", "♣", "♦"]
const VALUES = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
]

class Deck {
    constructor(cards = []) {
        this.cards = cards;
    }
}

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

export default Deck