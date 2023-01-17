import Card from "./Card.js";

const suits = ["♣", "♦", "♥", "♠"];
const values = [
  "A",
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
];

export default function Deck(cards = newDeck()) {
  this.cards = cards;
}

function newDeck() {
  return suits.flatMap((suit) => {
    //make all one dimensional
    return values.map((value) => {
      // do for each value per suit
      return new Card(suit, value);
    });
  });
}

Deck.prototype.shuffle = function () {
  for (let i = this.cards.length - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    const oldValue = this.cards[newIndex];
    this.cards[newIndex] = this.cards[i];
    this.cards[i] = oldValue;
  }
};
