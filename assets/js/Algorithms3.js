// Exercise 1
// Exercise 2
// Exercise 3
// Exercise 4
// Exercise 5
// Exercise 6
// Exercise 7
// Exercise 8

let al3ex8 = () => {
  let ramdonCard = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  let playerBet = () => {
    bet = parseInt(prompt("How much do you want to bet?"));
    while (isNaN(bet)) {
      bet = parseInt(
        prompt("opss! wrong option, try againt, How much do you want to bet?")
      );
    }
    if (bet > player.money) {
      alert("You don't have enough money");
      playerBet();
    } else {
      return bet;
    }
  };

  let checkOption = (optionString) => {
    while (optionString !== "y" && optionString !== "n") {
      optionString = prompt("Please, enter a valid option (y/n)");
    }
    if (optionString === "y") {
      return optionString;
    } else {
      return optionString;
    }
  };

  let suitOfCards = ["Hearts", "Diamonds", "Clubs", "Spades"];
  let cardNumbers = [
    "ACE",
    "KING",
    "QUEEN",
    "JACK",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  let optionString = "";

  let player = {
    cardNumber: 0,
    cardSuit: "",
    money: 500,
    randomNumber: -1,
  };

  let dealer = {
    cardNumber: 0,
    cardSuit: "",
    randomNumber: -1,
  };

  do {
    if (player.money <= 0) {
      alert("You don't have enough money to play");
    } else {
      playerBet();
      player.randomNumber = ramdonCard(13, 0);
      player.cardNumber = cardNumbers[player.randomNumber];
      player.cardSuit = suitOfCards[ramdonCard(4, 0)];
      dealer.randomNumber = ramdonCard(13, 0);
      dealer.cardNumber = cardNumbers[dealer.randomNumber];
      dealer.cardSuit = suitOfCards[ramdonCard(4, 0)];
      while (
        player.cardNumber === dealer.cardNumber &&
        player.cardSuit === dealer.cardSuit
      ) {
        dealer.randomNumber = ramdonCard(13, 0);
        dealer.cardNumber = cardNumbers[dealer.randomNumber];
        dealer.cardSuit = suitOfCards[ramdonCard(4, 0)];
      }
      console.log(`Your card is ${player.cardNumber} of ${player.cardSuit}`);
      console.log(`Dealer card is ${dealer.cardNumber} of ${dealer.cardSuit}`);
      if (player.randomNumber < dealer.randomNumber) {
        alert("You win");
        player.money += bet;
      } else if (player.randomNumber > dealer.randomNumber) {
        alert("You lose");
        player.money -= bet;
      } else {
        alert("Draw");
      }
      console.log(`You have ${player.money} €`);
      optionString = prompt("Do you want to play again? (y/n)");
      checkOption(optionString);
    }
  } while (player.money > 0 && optionString === "y");

  if (player.money <= 0) {
    console.log("You don't have enough money to play");
    console.log(`You lost ${500 - player.money} €`);
    console.log(`You have ${player.money} €`);
  } else {
    console.log("Thanks for playing");
    if (player.money > 500) {
      console.log(`You won ${player.money - 500} €`);
      console.log(`You have ${player.money} €`);
    } else {
      console.log(`You lost ${500 - player.money} €`);
      console.log(`You have ${player.money} €`);
    }
  }
};

// Exercise 9
