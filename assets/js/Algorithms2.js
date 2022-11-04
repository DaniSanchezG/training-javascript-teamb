// Exercise 1

const ex1al2 = () => {
  function palindrome(word) {
    let letter = [...word];
    console.log(`${letter}`);
    console.log(`${word} has ${word.length} letters.`);
  }
  palindrome("palindrome");
};

// Exercise 2

const ex2al2way1 = () => {
  let palindromo = "no lemon, no melon";
  let copyPalindromo = ["no", "lemon", "no", "melon"];
  copyPalindromo.reverse();
  copyPalindromo.toString();
  console.log(copyPalindromo.toString());
};

const ex2al2way2 = () => {
  let palindromo = "no lemon, no melon";
  let copyPalindromo = [...palindromo];
  console.log(copyPalindromo);
  let text = copyPalindromo.toString();
  console.log(copyPalindromo.toString());

  copyPalimdromo2 = copyPalindromo.toString();
  for (let i = 0; i < copyPalindromo.length; i++) {
    copyPalimdromo2 = copyPalimdromo2.replace(",", "");
  }
  console.log(copyPalimdromo2);
};

// Exercise 3

const ex3al2 = () => {
  const asterisco = () => {
    let result = "";
    let rows = 4;
    let col = 4;
    for (let index = 0; index < rows; index++) {
      for (let index = 0; index < col; index++) {
        result += "*";
      }
      result += "\n";
    }
    console.log(result);
  };
  asterisco();
};

// Exercise 4

const ex4al2 = () => {
  function temperaturaMedia(temperaturas) {
    let i = 0,
      summ = 0,
      ArrayLen = temperaturas.length;
    while (i < ArrayLen) {
      summ = summ + temperaturas[i++];
    }
    return summ / ArrayLen;
  }
  let temperaturas = [22, 22.8, 23.7, 22.7, 21.6, 21.6, 22.3];
  console.log(temperaturaMedia(temperaturas));
};

// Exercise 5

const ex5al2 = () => {
  const menu = () => {
    userOptionReplaceChars = prompt("Replace chars by signs? (y/n)");
    console.log(`Replace chars by signs? ${userOptionReplaceChars}`);
    objectOptions.replaceChars = checkOption(userOptionReplaceChars);
    userOptionCapitalize = prompt("Capitalize? (y/n)");
    console.log(`Capitalize? ${userOptionCapitalize}`);
    objectOptions.capitalize = checkOption(userOptionCapitalize);
    userOptionReplaceSpaces = prompt("Replace spaces with commas? (y/n)");
    console.log(`Replace spaces with commas? ${userOptionReplaceSpaces}`);
    objectOptions.replaceSpaces = checkOption(userOptionReplaceSpaces);
  };

  const stringManager = (userString, objectOptions) => {
    console.log(userString);
    if (objectOptions.replaceChars) {
      replaceChars(userString);
    }
    if (objectOptions.capitalize) {
      capitalizeWords(userString);
    }
    if (objectOptions.replaceSpaces) {
      replaceSpaces(userString);
    }
  };

  const checkOption = (optionString) => {
    while (optionString !== "y" && optionString !== "n") {
      optionString = prompt("Please, enter a valid option (y/n)");
    }
    if (optionString === "y") {
      return true;
    } else {
      return false;
    }
  };

  // function replaceChars
  const replaceChars = (string) => {
    let stringResultReplaceChars;
    let stringResult = [...string];
    for (character of stringResult) {
      switch (character) {
        case "a":
          stringResult[stringResult.indexOf(character)] = "@";
          break;
        case "e":
          stringResult[stringResult.indexOf(character)] = "3";
          break;
        case "i":
          stringResult[stringResult.indexOf(character)] = "1";
          break;
        case "o":
          stringResult[stringResult.indexOf(character)] = "0";
          break;
        case "s":
          stringResult[stringResult.indexOf(character)] = "$";
          break;
      }
    }
    stringResultReplaceChars = stringResult.toString();
    stringResultReplaceChars = replaceAnyChar(
      stringResultReplaceChars,
      ",",
      ""
    );
    console.log(stringResultReplaceChars);
  };

  // fuction to replace aney char in an array
  const replaceAnyChar = (array, replacement, toReplace) => {
    for (let i = 0; i < array.length; i++) {
      array = array.replace(replacement, toReplace);
    }
    return array;
  };

  const capitalizeWords = (string) => {
    let stringResultCapitalize;
    let stringResult = string.split(" ");
    for (let i = 0; i < stringResult.length; i++) {
      stringResult[i] =
        stringResult[i].charAt(0).toUpperCase() + stringResult[i].slice(1);
    }
    stringResultCapitalize = stringResult.toString();
    stringResultCapitalize = replaceAnyChar(stringResultCapitalize, ",", " ");
    console.log(stringResultCapitalize);
  };

  const replaceSpaces = (string) => {
    let stringResultReplaceSpaces;
    let stringResult = string.split(" ");
    stringResultReplaceSpaces = stringResult.toString();
    stringResultReplaceSpaces = replaceAnyChar(
      stringResultReplaceSpaces,
      " ",
      ","
    );
    console.log(stringResultReplaceSpaces);
  };

  const countWords = (string) => {
    let stringResult = string.split(" ");
    return stringResult.length;
  };

  const countChars = (string) => {
    let stringResult = string.split("");
    return stringResult.length;
  };

  let userString = prompt("Enter a string!");
  let userOptionReplaceChars;
  let userOptionCapitalize;
  let userOptionReplaceSpaces;
  let initialMillisecon;
  let finalMillisecon;
  let objectOptions = {
    replaceChars: false,
    capitalize: false,
    replaceSpaces: false,
  };

  initialMillisecon = Date.now();
  menu();
  stringManager(userString, objectOptions);
  finalMillisecon = Date.now();
  console.log(
    "work done in " + (finalMillisecon - initialMillisecon) + " miliseconds"
  );
  console.log(
    countWords(userString) + " words, " + countChars(userString) + " chars"
  );
};

// Exercise 6

const ex6al2 = () => {
  let ejercicio6_lorem = prompt("Introduce frase:");
  function palabras() {
    let ejercicio6_lenght = ejercicio6_lorem.length;
    let ejercicio6_numberLetters = ejercicio6_lorem.replace(/ /g, "");
    let ejercicio6_noSpace = ejercicio6_lorem.split(" ");
    let ejercicio6_count = new Set(ejercicio6_noSpace).size;
    let ejercicio6_porcentaje =
      (ejercicio6_noSpace.length / ejercicio6_count) * 100;
    let corto = ejercicio6_noSpace.sort((a, b) =>
      a.length > b.length ? 1 : -1
    );
    let ejercicio6_avg = Math.round(
      ejercicio6_numberLetters.length / ejercicio6_noSpace.length
    );
    console.log("Length:", ejercicio6_lenght, "characthers");
    console.log(
      "Length without space:",
      ejercicio6_numberLetters.length,
      "CharacterWords:",
      ejercicio6_noSpace.length
    );
    console.log("Unique Words:", ejercicio6_count);
    console.log("Unique Words(%):", ejercicio6_porcentaje, "%");
    console.log("Length of shortest word:", corto[0].length, "characthers");
    console.log(
      "Length of largest word:",
      corto[corto.length - 1].length,
      "characthers"
    );
    console.log("Avg. word length:", ejercicio6_avg);
  }
  palabras();
};

ex6al2();

// Exercise 7

const ex7al2 = () => {
  let min = 0;
  let max = 10;
  let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(numberRandom);
  let guessNumber;
  let centinela = false;
  let tries = 3;

  while (!centinela && tries >= 1) {
    if (tries == 3) {
      guessNumber = parseInt(prompt(`Insert a number, tries ${tries}`));
    } else {
      guessNumber = parseInt(prompt(`try again, you have ${tries} tries`));
    }

    if (numberRandom == guessNumber) {
      centinela = true;
    }
    tries--;
  }
  if (centinela) {
    console.log("You win!");
  } else {
    console.log("Sorry, Good luck in love!");
  }
};

// Exercise 8

const ex8al2 = () => {
  const checkOption = (optionString) => {
    while (optionString !== "y" && optionString !== "n") {
      optionString = prompt("Please, enter a valid option (y/n)");
    }
    if (optionString === "y") {
      return true;
    } else {
      return false;
    }
  };

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  let passwordLength = parseInt(
    prompt(
      "Enter the length of the password ( min 8 character, max 16 characters"
    )
  );

  while (passwordLength < 8 || passwordLength > 16 || isNaN(passwordLength)) {
    passwordLength = parseInt(
      prompt(
        "Enter a valid length of the password ( min 8 character, max 16 characters"
      )
    );
  }

  let charResult = 0;
  let randomNumberResult = randomNumber(33, 126);
  charResult = randomNumberResult;
  let finalChar;
  let passwordResult = "";
  let minus = checkOption(
    prompt("Do you want to include lowercase letters? (y/n)")
  );
  let mayus = checkOption(
    prompt("Do you want to include uppercase letters? (y/n)")
  );
  let number = checkOption(prompt("Do you want to include numbers? (y/n)"));
  let special = checkOption(
    prompt("Do you want to include special characters? (y/n)")
  );

  switch (true) {
    case minus && mayus && number && special:
      console.log("All options selected");
      let charResult1 = 0;
      for (let i = 0; i < passwordLength; i++) {
        charResult1 = 0;
        randomNumberResult = randomNumber(33, 126);
        charResult1 = randomNumberResult;
        finalChar = String.fromCharCode(charResult1);
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case minus && mayus && number:
      console.log("Minus, mayus and number selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 48 || charResult > 57) &&
          (charResult < 65 || charResult > 90) &&
          (charResult < 97 || charResult > 122)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case minus && mayus && special:
      console.log("Minus, mayus and special selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 33 || charResult > 47) &&
          (charResult < 58 || charResult > 64) &&
          (charResult < 91 || charResult > 96) &&
          (charResult < 65 || charResult > 90) &&
          (charResult < 97 || charResult > 122)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case minus && number && special:
      console.log("Minus, number and special selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 33 || charResult > 47) &&
          (charResult < 58 || charResult > 64) &&
          (charResult < 91 || charResult > 96) &&
          (charResult < 48 || charResult > 57) &&
          (charResult < 97 || charResult > 122)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case mayus && number && special:
      console.log("Mayus, number and special selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 33 || charResult > 47) &&
          (charResult < 58 || charResult > 64) &&
          (charResult < 91 || charResult > 96) &&
          (charResult < 48 || charResult > 57) &&
          (charResult < 65 || charResult > 90)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case minus && mayus:
      console.log("Minus and mayus selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 65 || charResult > 90) &&
          (charResult < 97 || charResult > 122)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case minus && number:
      console.log("Minus and number selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 97 || charResult > 122) &&
          (charResult < 49 || charResult > 57)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case minus && special:
      console.log("Minus and special selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 33 || charResult > 47) &&
          (charResult < 58 || charResult > 64) &&
          (charResult < 91 || charResult > 96) &&
          (charResult < 97 || charResult > 122)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case mayus && number:
      console.log("Mayus and number selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 48 || charResult > 57) &&
          (charResult < 65 || charResult > 90)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case mayus && special:
      console.log("Mayus and special selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 33 || charResult > 47) &&
          (charResult < 58 || charResult > 64) &&
          (charResult < 91 || charResult > 96) &&
          (charResult < 65 || charResult > 90)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case number && special:
      console.log("Number and special selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 33 || charResult > 47) &&
          (charResult < 58 || charResult > 64) &&
          (charResult < 91 || charResult > 96) &&
          (charResult < 48 || charResult > 57)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case minus:
      console.log("Minus selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (charResult < 97 || charResult > 122) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case mayus:
      console.log("Mayus selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (charResult < 65 || charResult > 90) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case number:
      console.log("Number selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (charResult < 48 || charResult > 57) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    case special:
      console.log("Special selected");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (
          (charResult < 33 || charResult > 47) &&
          (charResult < 58 || charResult > 64) &&
          (charResult < 91 || charResult > 96)
        ) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
    default:
      console.log("No options selected");
      console.log("selecting lowercase by default");
      for (let i = 0; i < passwordLength; i++) {
        charResult = 0;
        while (charResult < 97 || charResult > 122) {
          randomNumberResult = randomNumber(33, 126);
          charResult = randomNumberResult;
          finalChar = String.fromCharCode(charResult);
        }
        passwordResult += finalChar;
      }
      console.log(passwordResult);
      break;
  }
};
