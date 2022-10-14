//ALGOROTHMS2 EJERCICIO 2.

// let palindromo = "no lemon, no melon";
// let copyPalindromo = [...palindromo];
// copyPalindromo.reverse(copyPalindromo);
// console.log(copyPalindromo);
// let text = copyPalindromo.toString();
// console.log(copyPalindromo.toString());

// copyPalimdromo2 = copyPalindromo.toString()
// for (let i = 0; i < copyPalindromo.length; i++) {
// copyPalimdromo2 = copyPalimdromo2.replace(",", "");
// }
// console.log(copyPalimdromo2);

//ALGORITHMS2 EJERCICIO 7.
// Mediante el objeto Math, genera un número aleatorio entero entre 0 y 10, y guárdalo en una variable.
// A continuación pide al usuario que adivine el número. Tendrá como máximo 3 intentos. El
// programa debe mostrar el número de intentos disponibles. Si acierta, mostramos el mensaje: “You
// win!”. Si falla, pero le quedan intentos, mostramos el mensaje “Try it again”. Si agota los intentos y
// no ha conseguido acertar, mostramos el mensaje: “Sorry, Good luck in love”.

let min = 0;
let max = 10;
let number = 9;
let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
let guessNumber = prompt("Guess the number please");
let oneAttempts = prompt("Attempts one");
let twoAttempts = prompt("Attempts two");
let threeAttempts = prompt("Attempts tree");


for (let i = 0; i < 5; i++) {
    console.count();
  }

