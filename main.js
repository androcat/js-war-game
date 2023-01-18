import Deck from "./Deck.js";
import Game from "./Game.js";

const player1CardSlot = document.querySelector(".player1-card");
const drawButton = document.querySelector(".button");

const game = new Game();

drawButton.addEventListener("click", () => game.draw());
game.play();

console.log(game.player1.hand);
console.log(game.player2.hand);
