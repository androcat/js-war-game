import Player from "./Player.js";
import Deck from "./Deck.js";

const player1Deck = document.querySelector(".player1-deck");
const player2Deck = document.querySelector(".player2-deck");

const player1CardSlot = document.querySelector(".player1-card");
const player2CardSlot = document.querySelector(".player2-card");

const winnerText = document.querySelector(".text");

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

export default class Game {
  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.deck = new Deck();
    this.pile = [];
  }

  deal() {
    this.player1.hand = this.deck.cards.slice(0, 26);
    this.player2.hand = this.deck.cards.slice(26);
  }

  draw() {
    const player1Card = this.player1.hand.shift();
    const player2Card = this.player2.hand.shift();

    // player1CardSlot.setAttribute(
    //   "data-value",
    //   player1Card.value + player1Card.suit
    // );

    this.pile = [player1Card, player2Card, ...this.pile];
    this.compare(player1Card, player2Card);
  }
  compare(card1, card2) {
    console.log("card 1", card1);
    console.log("card 2", card2);
    player1CardSlot.innerHTML = card1.value + card1.suit;
    player2CardSlot.innerHTML = card2.value + card2.suit;

    if (values.indexOf(card1.value) > values.indexOf(card2.value)) {
      this.player1.hand = [...this.player1.hand, ...this.pile];
      this.pile = [];
      winnerText.innerHTML = "Red Player wins this round";
    } else if (values.indexOf(card1.value) < values.indexOf(card2.value)) {
      this.player2.hand = [...this.player2.hand, ...this.pile];
      this.pile = [];
      winnerText.innerHTML = "Blue Player wins this round";
    } else {
      winnerText.innerHTML = "WAR!";
      this.pile = [
        ...this.player1.hand.splice(0, 3), // Grabbing the first 3 of the players' hands to add to pot
        ...this.player2.hand.splice(0, 3),
        ...this.pile,
      ];
      console.log(this.pile);
    }

    if (this.player1.hand.length === 0) {
      winnerText.innerHTML = "Blue player won";
    } else if (this.player2.hand.length === 0) {
      winnerText.innerHTML = "Red player won";
    }
    player1Deck.innerHTML = this.player1.hand.length;
    player2Deck.innerHTML = this.player2.hand.length;
  }

  play() {
    this.deck.shuffle();
    this.deal();
  }
}
