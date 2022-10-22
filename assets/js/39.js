// El cifrado César es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto. Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la D (situada 3 lugares a la derecha de la A), la B sería reemplazada por la E, etc. Este método debe su nombre a Julio César, que lo usaba para comunicarse con sus generales.
// Escribe un programa con una función que recibe 2 parámetros, el primero para indicar si hay que cifrar o descifrar, y el segundo bien texto en claro, o bien el texto codificado mediante el cifrado Cesar. El programa mostrará por consola el string resultante, codificado o no, según corresponda

let checkOption = (optionString) => {
  while (optionString !== "c" && optionString !== "d") {
    optionString = prompt("Please, enter a valid option (c/d)");
  }
  if (optionString === "c") {
    return true;
  } else {
    return false;
  }
};

let codify = (message) => {
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

let decodify = (message) => {
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

let codeAndDecode = (message, cOrD) => {
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
