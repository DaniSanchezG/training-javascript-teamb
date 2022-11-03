// Exercise 1

const al3ex1 = () => {
  let min = parseInt(prompt("Please, insert the minimum value:"));
  let max = parseInt(prompt("Please, insert the maximun value:"));
  console.log(`Minimum value inserted: ${min}`);
  console.log(`Maximum value inserted: ${max}`);
  let valor = [];
  let auxMax = 0;
  let auxMin = max;

  function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 20; i++) {
    valor[i] = numAleatorio(min, max);
  }

  for (let j = 0; j < valor.length; j++) {
    if (valor[j] > auxMax) {
      auxMax = valor[j];
    }
    if (valor[j] < auxMin) {
      auxMin = valor[j];
    }
  }
  console.log(valor);
  console.log(`max value used: ${auxMax}`);
  console.log(`min value used: ${auxMin}`);
  }


// Exercise 2

const al3ex2 = () => {
  const fechaDeHoy = new Date();
  let hour = fechaDeHoy.getHours();
  let minutes = fechaDeHoy.getMinutes();
  console.log(hour, ":", minutes);
  let intro = prompt("Please, what's your name?");
  let greeting = {
    gMorning: "Good Morning,",
    gAfternoon: "Good Afternoon,",
    gEvening: "Good Evening,",
  };
  if (hour >= 05 && hour < 12) {
    console.log(greeting.gMorning, intro);
  } else if (hour >= 12 && hour < 18) {
    console.log(greeting.gAfternoon, intro);
  } else if (hour >= 18 && hour < 05) {
    console.log(greeting.gEvening, intro);
  }
}


// Exercise 3

const al3ex3 = () => {
  const coloresHexa = () => {
    var Numeros = 10;
    var numee = []
    while(numee.length < Numeros){
    const RandomNumber = size => [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      var exists = false;
      for(var i=0;i<numee.length;i++){
        if(numee [i] == RandomNumber){
            exists = true;
            break;
        }
      }
      if(!exists){
        numee[numee.length] = RandomNumber();
      }
    }
    console.log("números aleatorios : " + numee);
    for( var k = 0; k < 10; k++ ){
    console.log(`%cHello World! Color ${k + 1}`, `color:#${numee[k]}`);
}
    }
    coloresHexa();
}
// Exercise 4

const al3ex4 = () => {
  let userDni = prompt("Please, insert your DNI:");
  function verifyDNI(userDni) {
    let numberDni = userDni.substring(0, 8);
    let letterDni = userDni.slice(-1).toUpperCase();
    let letterValidation = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
      "T",
    ];
    let letterArray = numberDni % 23;
  
    if (
      userDni.length == 9 &&
      letterDni.charCodeAt() == letterValidation[letterArray].charCodeAt()
    ) {
      alert("Valid DNI");
    } else {
      alert("The data entered is wrong");
    }
  }
  verifyDNI(userDni);
}

// Exercise 5

const al3ex5 = () => {
  const  generateRandomString = () => {
    const characters ='0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 4; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result1;
  }
  const  generateLetterString = () => {
    const characters ='BCDFGHJKLMNPQRSTVWXYZ';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 3; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result1;""
  }
  console.log(generateRandomString(), generateLetterString());
}


// Exercise 6

const al3ex6 = () => {
  let quotes = [
    `"Mistakes are always forgivable, if one has the courage to admid them."`,
    `"The more we value things, the less we value ourselves."`,
    `"Be water, my friend."`,
    `"Absorb what is useful, Discard what is not, Add what is uniquely your own."`,
    `"A wise man can learn more from a foolish question than a fool can learn from a wise answer."`,
    `"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it."`,
    `"Man, the living creature, the creating individual, is always more important than any established style or system."`,
    `"Do not pray for an easy life, pray for the strength to endure a difficult one."`,
    `"If you love life, don't waste time, for time is what life is made up of."`,
    `"The key to immortality is first living a life worth remembering."`,
    `"Service to others is the rent you pay for your room here on earth."`,
    `"If my mind can conceive it, and my heart can believe it, then I can achieve it."`,
    `"It's hard to be humble when you're as great as I am."`,
    `"A man who views the world the same at 50 as he did at 20 has wasted 30 years of his life."`,
    `"A man who has no imagination has no wings."`,
    `"It's just a job. Grass grows, birds fly, waves pound the sand. I beat people up."`,
    `"Live everyday as if it were your last because someday you're going to be right."`,
    `"It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe."`,
    `"It's the repetition of affirmations that leads to belief. And once that belief becomes a deep conviction, things begin to happen."`,
    `"Friendship... is not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything."`,
  ];
  let min = 0;
  let max = quotes.length - 1;
  let number = -1;
  let timer = setInterval(() => {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(quotes[number]);
  }, 10000);
  setTimeout(() => {
    clearInterval(timer);
  }, 120000);
}

// Exercise 7

const al3ex7 = () => {
  let numerosAleatorios = null;
  let array = [];
  for (let i = 1; i <= 100; i++) {
    numerosAleatorios = Math.floor(Math.random() * 500);
    array.push(numerosAleatorios);
  }
  
  let result = array.filter((n) => n % 2 == 0);
  
  function comparar(a, b) {
    return b - a;
  }
  result.sort(comparar);
  console.log(result);
}

// Exercise 8

const al3ex8 = () => {
  let ramdonCard = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const playerBet = () => {
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

  const checkOption = (optionString) => {
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

const al3ex9 = () => {
  const checkOption = (optionString) => {
    while (optionString !== "c" && optionString !== "d") {
      optionString = prompt("Please, enter a valid option (c/d)");
    }
    if (optionString === "c") {
      return true;
    } else {
      return false;
    }
  };
  
  const codify = (message) => {
    let result = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() === 88) {
        result += String.fromCharCode(message.charCodeAt(65) + 3);
      } else if (message[i].charCodeAt() === 89) {
        result += String.fromCharCode(message.charCodeAt(66) + 3);
      } else if (message[i].charCodeAt() === 90) {
        result += String.fromCharCode(message.charCodeAt(67) + 3);
      } else {
        result += String.fromCharCode(message.charCodeAt(i) + 3);
      }
    }
    return result;
  };
  
  const decodify = (message) => {
    let result = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() === 65) {
        result += String.fromCharCode(message.charCodeAt(88) - 3);
      } else if (message[i].charCodeAt() === 66) {
        result += String.fromCharCode(message.charCodeAt(89) - 3);
      } else if (message[i].charCodeAt() === 67) {
        result += String.fromCharCode(message.charCodeAt(90) - 3);
      } else {
        result += String.fromCharCode(message.charCodeAt(i) - 3);
      }
    }
    return result;
  };
  
  const codeAndDecode = (message, cOrD) => {
    if (cOrD === true) {
      return codify(message);
    } else {
      return decodify(message);
    }
  };
  
  let message = prompt("Enter a message").toUpperCase();
  let chooseCodifyOrDecodify = prompt("Do you want to codify or decodify? (c/d)");
  let cOrD = checkOption(chooseCodifyOrDecodify);
  console.log(codeAndDecode(message, cOrD));
}
