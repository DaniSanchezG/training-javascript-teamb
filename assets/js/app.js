//ALGORITHMS 2. EJERCICIO 1
function palindrome(word) {
  let letter = [...word];
  console.log(`${letter}`);
  console.log(`${word} has ${word.length} letters.`);
}
// palindrome("palindrome");

// ALGORITHMS 3. EJERCICIO 1

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

//ALGORITHMS 3. EJERCICIO4

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
// verifyDNI(prompt("Please enter your DNI:"));
