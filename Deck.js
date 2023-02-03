import Card from "./Card.js";

const suits = ["♣", "♦", "♥", "♠"];
const values = [
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
  "A",
];

function newDeck() {
  return suits.flatMap((suit) => {
    //make all one dimensional
    return values.map((value) => {
      // do for each value per suit
      return new Card(suit, value);
    });
  });
}

export default class Deck {
  constructor() {
    this.cards = newDeck();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}
