export default function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  let player1Points = 0;
  let player2Points = 0;

  if (player1.card.value > player2.card.value) {
    player1Points++;
    //update the deck size here
  } else if (player1.card.value < player2.card.value) {
    player2Points++;
    //update the deck size here
  } else {
    //war
    for (let i = 0; i < 3; i++) {
      player1.deck.pop();
      player2.deck.pop();
    }
  }
}
