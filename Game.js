import Player from "./Player.js";
import Deck from "./Deck.js";

export default function Game() {
  this.player1 = new Player();
  this.player2 = new Player();
  this.deck = new Deck();
  this.pile = [];

  // let player1Points = this.player1.hand.length;
  // let player2Points = this.player2.hand.length;

  // if (player1.card.value > player2.card.value) {
  //   player1Points++;
  //   //update the deck size here
  // } else if (player1.card.value < player2.card.value) {
  //   player2Points++;
  //   //update the deck size here
  // } else {
  //   //war
  //   for (let i = 0; i < 3; i++) {
  //     player1.deck.pop();
  //     player2.deck.pop();
  //   }
  // }
}

Game.prototype.compare = function (card1, card2) {
  if (values.indexOf(card1.value) > values.indexOf(card2.value)) {
    return "player 1 wins";
  } else if (values.indexOf(card1.value) < values.indexOf(card2.value)) {
    return "player 2 wins";
  }
};

Game.prototype.deal = function () {
  this.player1.hand = this.deck.cards.slice(0, 26);
  this.player2.hand = this.deck.cards.slice(26);
};

Game.prototype.play = function () {
  this.deck.shuffle();
  this.deal();
  //this.draw();
};
