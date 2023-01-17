import Player from "./Player.js";
import Deck from "./Deck.js";

const player1Deck = document.querySelector(".player1-deck");
const player2Deck = document.querySelector(".player2-deck");
const drawButton = document.querySelector(".button");

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

export default function Game() {
  this.player1 = new Player();
  this.player2 = new Player();
  this.deck = new Deck();
  this.pile = [];
}

Game.prototype.deal = function () {
  this.player1.hand = this.deck.cards.slice(0, 26);
  this.player2.hand = this.deck.cards.slice(26);
};

Game.prototype.draw = function () {
  // debugger;
  //while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {
  const player1Card = this.player1.hand.shift();
  const player2Card = this.player2.hand.shift();

  // player1CardSlot.setAttribute(
  //   "data-value",
  //   player1Card.value + player1Card.suit
  // );

  this.pile = [player1Card, player2Card, ...this.pile];
  this.compare(player1Card, player2Card);
  //}
};
Game.prototype.compare = function (card1, card2) {
  console.log("card 1", card1);
  console.log("card 2", card2);
  if (values.indexOf(card1.value) > values.indexOf(card2.value)) {
    this.player1.hand = [...this.player1.hand, ...this.pile];
    this.pile = [];
    console.log("player 1 wins this round");
  } else if (values.indexOf(card1.value) < values.indexOf(card2.value)) {
    this.player2.hand = [...this.player2.hand, ...this.pile];
    this.pile = [];
    console.log("player 2 wins this round");
  } else {
    console.log("WAR!");
    this.pile = [
      ...this.player1.hand.splice(0, 3), // Grabbing the first 3 of the players' hands to add to pot
      ...this.player2.hand.splice(0, 3),
      ...this.pile,
    ];
    console.log(this.pile);
  }
};

Game.prototype.play = function () {
  this.deck.shuffle();
  this.deal();
};
