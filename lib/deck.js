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

    /** Returns the number of cards in the Deck object. */
    get size() {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.size - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const jthCard = this.cards[j]
            this.cards[j] = this.cards[i]
            this.cards[i] = jthCard
        }
    }

    /** 
     * Removes the top card in Deck object and returns it. 
     * @returns {object} Card object
     */
    dealCard() {
        return this.cards.pop()
    }

    /** 
     * Selects a random card from Deck object, places it on top, and returns the card.
     * @returns {object} Card object
     */
    cutCard() {
        const randIndex = Math.floor(Math.random() * this.size)
        const randCard = this.cards.splice(randIndex, 1)[0]
        this.cards.push(randCard)
        return this.cards
    }

    /** 
     * Adds a new card to bottom of deck.
     * @param {object} Card Card object to add under deck.
     */
    addCard(Card) {
        this.cards.unshift()
    }
}

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    get color() {
        return (this.suit === '♠' || this.suit === '♣') ? 'black' : 'red'
    }
}

function newDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(value, suit)
        })
    })
}

module.exports = Deck