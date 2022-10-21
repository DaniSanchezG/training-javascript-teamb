// // Algorithm 1 exercise 5

// let menu = () => {
//   userOptionReplaceChars = prompt("Replace chars by signs? (y/n)");
//   console.log(`Replace chars by signs? ${userOptionReplaceChars}`);
//   objectOptions.replaceChars = checkOption(userOptionReplaceChars);
//   userOptionCapitalize = prompt("Capitalize? (y/n)");
//   console.log(`Capitalize? ${userOptionCapitalize}`);
//   objectOptions.capitalize = checkOption(userOptionCapitalize);
//   userOptionReplaceSpaces = prompt("Replace spaces with commas? (y/n)");
//   console.log(`Replace spaces with commas? ${userOptionReplaceSpaces}`);
//   objectOptions.replaceSpaces = checkOption(userOptionReplaceSpaces);
// };

// let stringManager = (userString, objectOptions) => {
//   console.log(userString);
//   if (objectOptions.replaceChars) {
//     replaceChars(userString);
//   }
//   if (objectOptions.capitalize) {
//     capitalizeWords(userString);
//   }
//   if (objectOptions.replaceSpaces) {
//     replaceSpaces(userString);
//   }
// };

// let checkOption = (optionString) => {
//   while (optionString !== "y" && optionString !== "n") {
//     optionString = prompt("Please, enter a valid option (y/n)");
//   }
//   if (optionString === "y") {
//     return true;
//   } else {
//     return false;
//   }
// };

// // function replaceChars
// let replaceChars = (string) => {
//   let stringResultReplaceChars;
//   let stringResult = [...string];
//   for (character of stringResult) {
//     switch (character) {
//       case "a":
//         stringResult[stringResult.indexOf(character)] = "@";
//         break;
//       case "e":
//         stringResult[stringResult.indexOf(character)] = "3";
//         break;
//       case "i":
//         stringResult[stringResult.indexOf(character)] = "1";
//         break;
//       case "o":
//         stringResult[stringResult.indexOf(character)] = "0";
//         break;
//       case "s":
//         stringResult[stringResult.indexOf(character)] = "$";
//         break;
//     }
//   }
//   stringResultReplaceChars = stringResult.toString()
//   stringResultReplaceChars = replaceAnyChar(stringResultReplaceChars, ",", "");
//   console.log(stringResultReplaceChars);
// };

// // fuction to replace aney char in an array
// let replaceAnyChar = (array, replacement, toReplace) => {
//   for(let i = 0; i < array.length; i++){
//     array = array.replace(replacement, toReplace)
//   }
//   return array;
// }

// let capitalizeWords = (string) => {
//   let stringResultCapitalize;
//   let stringResult = string.split(" ");
//   for(let i = 0; i < stringResult.length; i++){
//     stringResult[i] = stringResult[i].charAt(0).toUpperCase() + stringResult[i].slice(1);
//   }
//   stringResultCapitalize = stringResult.toString();
//   stringResultCapitalize = replaceAnyChar(stringResultCapitalize, ",", " ");
//   console.log(stringResultCapitalize);
// }

// let replaceSpaces = (string) => {
//   let stringResultReplaceSpaces;
//   let stringResult = string.split(" ");
//   stringResultReplaceSpaces = stringResult.toString();
//   stringResultReplaceSpaces = replaceAnyChar(stringResultReplaceSpaces, " ", ",");
//   console.log(stringResultReplaceSpaces);
// }

// let countWords = (string) => {
//   let stringResult = string.split(" ");
//   return stringResult.length;
// }

// let countChars = (string) => {
//   let stringResult = string.split("");
//   return stringResult.length;
// }

// let userString = prompt("Enter a string!");
// let userOptionReplaceChars;
// let userOptionCapitalize;
// let userOptionReplaceSpaces;
// let initialMillisecon;
// let finalMillisecon;
// let objectOptions = {
//   replaceChars: false,
//   capitalize: false,
//   replaceSpaces: false,
// };

// initialMillisecon = Date.now();
// menu();
// stringManager(userString, objectOptions);
// finalMillisecon = Date.now();
// console.log("work done in " + (finalMillisecon - initialMillisecon) + " miliseconds");
// console.log(countWords(userString) + " words, " + countChars(userString) + " chars");

// Algorithm 2 Exercise 8

// let checkOption = (optionString) => {
//   while (optionString !== "y" && optionString !== "n") {
//     optionString = prompt("Please, enter a valid option (y/n)");
//   }
//   if (optionString === "y") {
//     return true;
//   } else {
//     return false;
//   }
// };

// let randomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

// let passwordLength = parseInt(
//   prompt(
//     "Enter the length of the password ( min 8 character, max 16 characters"
//   )
// );

// while (passwordLength < 8 || passwordLength > 16 || isNaN(passwordLength)) {
//   passwordLength = parseInt(
//     prompt(
//       "Enter a valid length of the password ( min 8 character, max 16 characters"
//     )
//   );
// }

// let charResult = 0;
// let randomNumberResult = randomNumber(33, 126);
// charResult = randomNumberResult;
// let finalChar;
// let passwordResult = "";
// let minus = checkOption(
//   prompt("Do you want to include lowercase letters? (y/n)")
// );
// let mayus = checkOption(
//   prompt("Do you want to include uppercase letters? (y/n)")
// );
// let number = checkOption(prompt("Do you want to include numbers? (y/n)"));
// let special = checkOption(
//   prompt("Do you want to include special characters? (y/n)")
// );

// switch (true) {
//   case minus && mayus && number && special:
//     console.log("All options selected");
//     let charResult1 = 0;
//     for (let i = 0; i < passwordLength; i++) {
//       charResult1 = 0;
//       randomNumberResult = randomNumber(33, 126);
//       charResult1 = randomNumberResult;
//       finalChar = String.fromCharCode(charResult1);
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case minus && mayus && number:
//     console.log("Minus, mayus and number selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 48 || charResult > 57) &&
//         (charResult < 65 || charResult > 90) &&
//         (charResult < 97 || charResult > 122)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case minus && mayus && special:
//     console.log("Minus, mayus and special selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 33 || charResult > 47) &&
//         (charResult < 58 || charResult > 64) &&
//         (charResult < 91 || charResult > 96) &&
//         (charResult < 65 || charResult > 90) &&
//         (charResult < 97 || charResult > 122)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case minus && number && special:
//     console.log("Minus, number and special selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 33 || charResult > 47) &&
//         (charResult < 58 || charResult > 64) &&
//         (charResult < 91 || charResult > 96) &&
//         (charResult < 48 || charResult > 57) &&
//         (charResult < 97 || charResult > 122)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case mayus && number && special:
//     console.log("Mayus, number and special selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 33 || charResult > 47) &&
//         (charResult < 58 || charResult > 64) &&
//         (charResult < 91 || charResult > 96) &&
//         (charResult < 48 || charResult > 57) &&
//         (charResult < 65 || charResult > 90)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case minus && mayus:
//     console.log("Minus and mayus selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 65 || charResult > 90) &&
//         (charResult < 97 || charResult > 122)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case minus && number:
//     console.log("Minus and number selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 97 || charResult > 122) &&
//         (charResult < 49 || charResult > 57)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case minus && special:
//     console.log("Minus and special selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 33 || charResult > 47) &&
//         (charResult < 58 || charResult > 64) &&
//         (charResult < 91 || charResult > 96) &&
//         (charResult < 97 || charResult > 122)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case mayus && number:
//     console.log("Mayus and number selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 48 || charResult > 57) &&
//         (charResult < 65 || charResult > 90)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case mayus && special:
//     console.log("Mayus and special selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 33 || charResult > 47) &&
//         (charResult < 58 || charResult > 64) &&
//         (charResult < 91 || charResult > 96) &&
//         (charResult < 65 || charResult > 90)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case number && special:
//     console.log("Number and special selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 33 || charResult > 47) &&
//         (charResult < 58 || charResult > 64) &&
//         (charResult < 91 || charResult > 96) &&
//         (charResult < 48 || charResult > 57)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case minus:
//     console.log("Minus selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (charResult < 97 || charResult > 122) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case mayus:
//     console.log("Mayus selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (charResult < 65 || charResult > 90) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case number:
//     console.log("Number selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (charResult < 48 || charResult > 57) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   case special:
//     console.log("Special selected");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (
//         (charResult < 33 || charResult > 47) &&
//         (charResult < 58 || charResult > 64) &&
//         (charResult < 91 || charResult > 96)
//       ) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
//   default:
//     console.log("No options selected");
//     console.log("selecting lowercase by default");
//     for (let i = 0; i < passwordLength; i++) {
//       charResult = 0;
//       while (charResult < 97 || charResult > 122) {
//         randomNumberResult = randomNumber(33, 126);
//         charResult = randomNumberResult;
//         finalChar = String.fromCharCode(charResult);
//       }
//       passwordResult += finalChar;
//     }
//     console.log(passwordResult);
//     break;
// }

// Algorithm 3 Exercise 8

let ramdonCard = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let playerBet = () => {
  bet = parseInt(prompt("How much do you want to bet?"));
  while(isNaN(bet)){
    bet = parseInt(prompt("opss! wrong option, try againt, How much do you want to bet?"));
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

