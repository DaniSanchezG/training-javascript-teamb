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

// let min = 0;
// let max = 10;
// let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(numberRandom);
// let guessNumber;
// let centinela = false;
// let intentos = 3;

// while (!centinela && intentos >= 1) {
//   if (intentos == 3) {
//     guessNumber = parseInt(prompt(`Inserte un numero, intentos ${intentos}`));
//   } else {
//     guessNumber = parseInt(
//       prompt(`Prueba de nuevo, tienes ${intentos} intentos`)
//     );
//   }

//   if (numberRandom == guessNumber) {
//     centinela = true;
//   }
//   intentos--;
// }
// if (centinela) {
//   console.log("You wins!");
// } else {
//   console.log("Sorry, Good luck in love!");
// }
