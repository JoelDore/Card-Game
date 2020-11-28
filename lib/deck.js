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
    constructor(cards = newDeck()) {
        this.cards = cards;
    }

    getSize() {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.getSize() - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const jthCard = this.cards[j]
            this.cards[j] = this.cards[i]
            this.cards[i] = jthCard
        }
    }
}

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

function newDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(value, suit)
        })
    })
}

export default Deck