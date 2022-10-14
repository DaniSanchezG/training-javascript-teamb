//ALGORITHMS 2. EJERCICIO 1

// let letter= [..."palindrome"];
// console.log(letter);
// console.log(`Palimdrome has ${letter.length} letters.`);

// ALGORITHMS 3. EJERCICIO 1
let min = parseInt(prompt("Please, insert the minimum value:"));
let max = parseInt(prompt("Please, insert the maximun value:"));
console.log(min);
console.log(max);
let valor = [];
let auxMax=0;
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
console.log(auxMax);
console.log(auxMin);

//ALGORITHMS 3. EJERCICIO4
