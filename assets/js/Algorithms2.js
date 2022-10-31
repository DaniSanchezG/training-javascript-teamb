// Exercise 1
// Exercise 2
// Exercise 3
// Exercise 4
// Exercise 5

let al1ex5 = () => {
  let menu = () => {
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

  let stringManager = (userString, objectOptions) => {
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

  let checkOption = (optionString) => {
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
  let replaceChars = (string) => {
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
  let replaceAnyChar = (array, replacement, toReplace) => {
    for (let i = 0; i < array.length; i++) {
      array = array.replace(replacement, toReplace);
    }
    return array;
  };

  let capitalizeWords = (string) => {
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

  let replaceSpaces = (string) => {
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

  let countWords = (string) => {
    let stringResult = string.split(" ");
    return stringResult.length;
  };

  let countChars = (string) => {
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
// Exercise 7
// Exercise 8

let al2ex8 = () => {
  let checkOption = (optionString) => {
    while (optionString !== "y" && optionString !== "n") {
      optionString = prompt("Please, enter a valid option (y/n)");
    }
    if (optionString === "y") {
      return true;
    } else {
      return false;
    }
  };

  let randomNumber = (min, max) => {
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
