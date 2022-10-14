// 5. Ejercicio

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
  stringResultReplaceChars = stringResult.toString()
  stringResultReplaceChars = replaceAnyChar(stringResultReplaceChars, ",", "");
  console.log(stringResultReplaceChars);
};

// fuction to replace aney char in an array
let replaceAnyChar = (array, replacement, toReplace) => {
  for(let i = 0; i < array.length; i++){
    array = array.replace(replacement, toReplace)
  }
  return array;
}

let capitalizeWords = (string) => {
  let stringResultCapitalize;
  let stringResult = string.split(" ");
  for(let i = 0; i < stringResult.length; i++){
    stringResult[i] = stringResult[i].charAt(0).toUpperCase() + stringResult[i].slice(1);
  }
  stringResultCapitalize = stringResult.toString();
  stringResultCapitalize = replaceAnyChar(stringResultCapitalize, ",", " ");
  console.log(stringResultCapitalize);
}

let replaceSpaces = (string) => {
  let stringResultReplaceSpaces;
  let stringResult = string.split(" ");
  stringResultReplaceSpaces = stringResult.toString();
  stringResultReplaceSpaces = replaceAnyChar(stringResultReplaceSpaces, " ", ",");
  console.log(stringResultReplaceSpaces);
}

let countWords = (string) => {
  let stringResult = string.split(" ");
  return stringResult.length;
}

let countChars = (string) => {
  let stringResult = string.split("");
  return stringResult.length;
}

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
console.log("work done in " + (finalMillisecon - initialMillisecon) + " miliseconds");
console.log(countWords(userString) + " words, " + countChars(userString) + " chars");